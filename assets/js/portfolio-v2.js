(function () {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const header = document.getElementById('siteHeader');
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    const submitButton = document.getElementById('btnEnviar');
    const year = document.getElementById('currentYear');

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    function closeMenu() {
        if (!menuToggle || !mainNav) {
            return;
        }

        mainNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
        menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    }

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            const isOpen = mainNav.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
                : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
        });

        mainNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });
    }

    window.addEventListener('scroll', function () {
        if (header) {
            header.classList.toggle('is-scrolled', window.scrollY > 8);
        }
    }, { passive: true });

    if (!form || !status || !submitButton) {
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('assunto').value.trim();
        const message = document.getElementById('mensagem').value.trim();

        if (!name || !email || !subject || !message) {
            status.textContent = 'Preencha todos os campos antes de continuar.';
            status.className = 'form-status is-error';
            return;
        }

        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailIsValid) {
            status.textContent = 'Informe um endereço de e-mail válido.';
            status.className = 'form-status is-error';
            return;
        }

        const originalContent = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i><span>Abrindo Gmail...</span>';

        const body = encodeURIComponent('Nome: ' + name + '\nE-mail: ' + email + '\n\nMensagem:\n' + message);
        const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=leandro130333.dev@gmail.com&su=' + encodeURIComponent(subject) + '&body=' + body;

        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
        form.reset();
        status.textContent = 'O Gmail foi aberto com sua mensagem preenchida.';
        status.className = 'form-status is-success';
        submitButton.disabled = false;
        submitButton.innerHTML = originalContent;
    });
}());
