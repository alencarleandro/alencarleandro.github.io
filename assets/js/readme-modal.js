(function () {
    const modal = document.getElementById('readmeModal');
    const modalTitle = document.getElementById('readmeModalTitle');
    const modalContent = document.getElementById('readmeModalContent');
    const modalLoading = document.getElementById('readmeModalLoading');
    const readmeCache = new Map();
    let lastFocusedElement = null;

    if (!modal || !modalTitle || !modalContent || !modalLoading) {
        return;
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function cleanRelativeUrl(url, rawBase) {
        const value = String(url || '').trim();

        if (!value || /^(https?:|mailto:|tel:|#|data:)/i.test(value)) {
            return value;
        }

        if (!rawBase) {
            return value;
        }

        return rawBase + value.replace(/^\.?\//, '').replace(/^\/+/, '').replace(/ /g, '%20');
    }

    function sanitizeHtml(value) {
        return String(value)
            .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
            .replace(/\son\w+=("[^"]*"|'[^']*')/gi, '')
            .replace(/javascript:/gi, '');
    }

    function rewriteAssetUrls(html, rawBase) {
        return sanitizeHtml(html).replace(/\b(src|href)=["']([^"']+)["']/gi, function (_, attribute, url) {
            return attribute + '="' + cleanRelativeUrl(url, rawBase) + '"';
        });
    }

    function formatInline(value, rawBase) {
        const placeholders = [];

        function hold(html) {
            const token = '%%INLINE' + placeholders.length + '%%';
            placeholders.push({ token: token, html: html });
            return token;
        }

        let html = escapeHtml(value);

        html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, function (_, alt, url) {
            const safeAlt = escapeHtml(alt);
            const safeUrl = escapeHtml(cleanRelativeUrl(url, rawBase));
            return hold('<img src="' + safeUrl + '" alt="' + safeAlt + '" loading="lazy">');
        });

        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (_, label, url) {
            const safeLabel = escapeHtml(label);
            const safeUrl = escapeHtml(cleanRelativeUrl(url, rawBase));
            return hold('<a href="' + safeUrl + '" target="_blank" rel="noopener noreferrer">' + safeLabel + '</a>');
        });

        html = html.replace(/`([^`]+)`/g, function (_, code) {
            return hold('<code>' + code + '</code>');
        });

        html = html
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            .replace(/__([^_]+)__/g, '<strong>$1</strong>')
            .replace(/\*([^*]+)\*/g, '<em>$1</em>')
            .replace(/_([^_]+)_/g, '<em>$1</em>');

        placeholders.forEach(function (item) {
            html = html.replace(item.token, item.html);
        });

        return html;
    }

    function renderTable(rows, rawBase) {
        const header = rows[0];
        const body = rows.slice(2);

        function cells(row) {
            return row
                .trim()
                .replace(/^\|/, '')
                .replace(/\|$/, '')
                .split('|')
                .map(function (cell) {
                    return cell.trim();
                });
        }

        const headerCells = cells(header)
            .map(function (cell) {
                return '<th>' + formatInline(cell, rawBase) + '</th>';
            })
            .join('');

        const bodyRows = body
            .map(function (row) {
                const bodyCells = cells(row)
                    .map(function (cell) {
                        return '<td>' + formatInline(cell, rawBase) + '</td>';
                    })
                    .join('');

                return '<tr>' + bodyCells + '</tr>';
            })
            .join('');

        return '<table><thead><tr>' + headerCells + '</tr></thead><tbody>' + bodyRows + '</tbody></table>';
    }

    function renderMarkdown(markdown, rawBase) {
        const lines = String(markdown || '').replace(/\r\n/g, '\n').split('\n');
        const html = [];
        let paragraph = [];
        let codeBlock = null;

        function flushParagraph() {
            if (!paragraph.length) {
                return;
            }

            html.push('<p>' + formatInline(paragraph.join(' '), rawBase) + '</p>');
            paragraph = [];
        }

        for (let index = 0; index < lines.length; index += 1) {
            const line = lines[index];
            const trimmed = line.trim();

            if (codeBlock) {
                if (trimmed.startsWith('```')) {
                    html.push('<pre><code>' + escapeHtml(codeBlock.lines.join('\n')) + '</code></pre>');
                    codeBlock = null;
                } else {
                    codeBlock.lines.push(line);
                }
                continue;
            }

            if (trimmed.startsWith('```')) {
                flushParagraph();
                codeBlock = { lines: [] };
                continue;
            }

            if (!trimmed) {
                flushParagraph();
                continue;
            }

            if (/^\|.*\|$/.test(trimmed) && lines[index + 1] && /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(lines[index + 1])) {
                const tableRows = [trimmed, lines[index + 1].trim()];
                index += 2;

                while (index < lines.length && /^\s*\|.*\|\s*$/.test(lines[index])) {
                    tableRows.push(lines[index].trim());
                    index += 1;
                }

                index -= 1;
                flushParagraph();
                html.push(renderTable(tableRows, rawBase));
                continue;
            }

            if (/^#{1,6}\s+/.test(trimmed)) {
                const level = Math.min(trimmed.match(/^#+/)[0].length, 4);
                const text = trimmed.replace(/^#{1,6}\s+/, '');
                flushParagraph();
                html.push('<h' + level + '>' + formatInline(text, rawBase) + '</h' + level + '>');
                continue;
            }

            if (/^([-*_])\1{2,}$/.test(trimmed)) {
                flushParagraph();
                html.push('<hr>');
                continue;
            }

            if (/^[-*+]\s+/.test(trimmed)) {
                const items = [];

                while (index < lines.length && /^[-*+]\s+/.test(lines[index].trim())) {
                    items.push(lines[index].trim().replace(/^[-*+]\s+/, ''));
                    index += 1;
                }

                index -= 1;
                flushParagraph();
                html.push('<ul>' + items.map(function (item) {
                    return '<li>' + formatInline(item, rawBase) + '</li>';
                }).join('') + '</ul>');
                continue;
            }

            if (/^\d+\.\s+/.test(trimmed)) {
                const items = [];

                while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
                    items.push(lines[index].trim().replace(/^\d+\.\s+/, ''));
                    index += 1;
                }

                index -= 1;
                flushParagraph();
                html.push('<ol>' + items.map(function (item) {
                    return '<li>' + formatInline(item, rawBase) + '</li>';
                }).join('') + '</ol>');
                continue;
            }

            if (/^>\s?/.test(trimmed)) {
                const quote = [];

                while (index < lines.length && /^>\s?/.test(lines[index].trim())) {
                    quote.push(lines[index].trim().replace(/^>\s?/, ''));
                    index += 1;
                }

                index -= 1;
                flushParagraph();
                html.push('<blockquote>' + quote.map(function (item) {
                    return '<p>' + formatInline(item, rawBase) + '</p>';
                }).join('') + '</blockquote>');
                continue;
            }

            if (/^<\/?[a-z][\s\S]*>/i.test(trimmed)) {
                flushParagraph();
                html.push(rewriteAssetUrls(trimmed, rawBase));
                continue;
            }

            paragraph.push(trimmed);
        }

        if (codeBlock) {
            html.push('<pre><code>' + escapeHtml(codeBlock.lines.join('\n')) + '</code></pre>');
        }

        flushParagraph();
        return html.join('\n');
    }

    function setLoading(isLoading) {
        modalLoading.style.display = isLoading ? 'block' : 'none';
        modalContent.style.display = isLoading ? 'none' : 'block';
    }

    async function fetchReadmeText(readmeUrl) {
        const response = await fetch(readmeUrl, { cache: 'no-store' });

        if (!response.ok) {
            throw new Error('README unavailable: ' + response.status);
        }

        return response.text();
    }

    async function loadReadme(card) {
        const readmeUrl = card.getAttribute('data-readme');
        const fallbackUrl = card.getAttribute('data-readme-fallback');
        const rawBase = card.getAttribute('data-raw-base') || '';

        if (!readmeUrl) {
            return '<p>README nao configurado para este projeto.</p>';
        }

        if (!readmeCache.has(readmeUrl)) {
            try {
                readmeCache.set(readmeUrl, await fetchReadmeText(readmeUrl));
            } catch (error) {
                if (!fallbackUrl) {
                    throw error;
                }

                readmeCache.set(readmeUrl, await fetchReadmeText(fallbackUrl));
            }
        }

        return renderMarkdown(readmeCache.get(readmeUrl), rawBase);
    }

    async function openReadme(card) {
        lastFocusedElement = document.activeElement;
        modalTitle.textContent = card.getAttribute('data-project-title') || card.querySelector('.project-title')?.textContent || 'Projeto';
        modalContent.innerHTML = '';
        setLoading(true);
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('readme-modal-open');
        modal.querySelector('.readme-modal-close')?.focus();

        try {
            modalContent.innerHTML = await loadReadme(card);
        } catch (error) {
            const githubLink = card.querySelector('.project-links a[href*="github.com"]')?.href;
            const linkHtml = githubLink
                ? '<p><a href="' + escapeHtml(githubLink) + '" target="_blank" rel="noopener noreferrer">Abrir projeto no GitHub</a></p>'
                : '';

            modalContent.innerHTML = '<p>README indisponivel no momento. Tente novamente pelo link do GitHub.</p>' + linkHtml;
        } finally {
            setLoading(false);
        }
    }

    function closeReadme() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('readme-modal-open');
        modalContent.innerHTML = '';

        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
        }
    }

    document.querySelectorAll('.project-card-detailed[data-readme]').forEach(function (card) {
        card.addEventListener('click', function (event) {
            if (event.target.closest('a')) {
                return;
            }

            openReadme(card);
        });

        card.addEventListener('keydown', function (event) {
            if ((event.key === 'Enter' || event.key === ' ') && event.target === card) {
                event.preventDefault();
                openReadme(card);
            }
        });
    });

    modal.querySelectorAll('[data-readme-close]').forEach(function (closeElement) {
        closeElement.addEventListener('click', closeReadme);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('is-open')) {
            closeReadme();
        }
    });
}());
