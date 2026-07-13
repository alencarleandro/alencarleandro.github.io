# A.M.P.H.I.T.R.U.O

<p align="center">
  <img src="assets/amphitruo-logo.svg" alt="Logo A.M.P.H.I.T.R.U.O" width="620">
</p>

Aplicativo quantitativo local e instalável para Binance Spot. O projeto baixa dados oficiais, acompanha o melhor bid/ask, executa backtests reproduzíveis e mantém um paper trader automático no SQLite desta máquina.

O objetivo é tomar decisões melhores sob incerteza. Não existe estratégia capaz de garantir lucro; por isso, esta versão **não possui rota de ordem real**. Mesmo um resultado aprovado significa apenas “candidato a paper forward”.

## O que já existe no MVP

- dados públicos da Binance Spot via REST;
- book ticker em tempo real via WebSocket;
- histórico paginado, sem usar o candle ainda aberto;
- estratégia Spot long/caixa, sem margem, short, futuros ou alavancagem;
- momentum temporal de 1, 2 e 4 semanas, sem escolher o melhor lookback depois de ver o resultado;
- exposição escalada pela volatilidade EWMA e limitada por um teto explícito;
- execução simulada no primeiro open após uma barra diária completa de latência, evitando lookahead e o fill inexequível 1 ms após o fechamento semanal;
- taxa, spread/slippage configurável e cenário de custos estressados;
- comparação com BTC buy-and-hold sob os mesmos custos;
- CAGR, Sharpe, Sortino, Calmar, drawdown, Expected Shortfall, Probabilistic Sharpe, turnover e exposição;
- segmentos cronológicos de estabilidade e block bootstrap determinístico;
- histórico imutável de cada pesquisa em `data/amphitruo.db`;
- credenciais privadas opcionais, isoladas por padrão na Spot Testnet;
- interface responsiva em roxo, preto e prata;
- pares Spot com qualquer moeda de cotação suportada, inclusive BRL quando o par existir;
- filtros atuais de notional, lote e preço lidos por símbolo na Binance;
- piso de perda e meta de patrimônio, com liquidação best-effort e registro de ultrapassagens;
- bloco final de 365 dias OOS e PSR corrigido conservadoramente pelas tentativas locais;
- paper trader persistente de 15 minutos com BUY/SELL/HOLD, Spot long/caixa e nenhuma ordem real;
- previsão causal com momentum multi-horizonte, EMA, escala robusta, validação cronológica e barreira completa de custos;
- instalador Windows com Electron Forge/Squirrel, servidor em porta loopback efêmera e dados no perfil do usuário.

## O piso, a meta e o exemplo de R$ 10

Com capital inicial de R$ 10, perda máxima de 50% e meta de ganho de 100%:

```text
piso = 10 × (1 - 0,50) = R$ 5
meta = 10 × (1 + 1,00) = R$ 20
```

Essas barreiras mandam o paper trader parar e tentar liquidar. Não são preços garantidos: gap, spread, slippage, latência, liquidez e lote mínimo podem produzir um resultado além do limite.

O capital também precisa formar uma ordem válida. Em 13/07/2026, a consulta real de `BTCBRL` retornou `minNotional` de R$ 10; exatamente R$ 10 fica insuficiente após custos. O app consulta o filtro novamente em cada sessão e explica o bloqueio, pois esse valor pode mudar.

## Instalar no Windows

Execute:

```text
out\make\squirrel.windows\x64\A.M.P.H.I.T.R.U.O-Setup.exe
```

O instalador é por usuário. O backend abre somente em `127.0.0.1` numa porta livre e o banco fica nos dados do aplicativo. Este build local ainda não possui assinatura de código, então o Windows pode mostrar um aviso de reputação.

## Executar a partir do código

Pré-requisito: Node.js 24 ou superior. Esta máquina já possui Node 24.

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Abra [http://127.0.0.1:3000](http://127.0.0.1:3000). O servidor rejeita bind fora de loopback, Host de DNS rebinding e origem cross-site.

Para validar a versão de produção:

```powershell
npm test
npm run build
npm start
```

## Credenciais da Spot Testnet

Dados públicos e backtests funcionam sem chave. Para consultar a conta virtual:

1. Crie uma chave própria em [testnet.binance.vision](https://testnet.binance.vision/).
2. Prefira Ed25519 e mantenha a chave privada fora do repositório.
3. Copie `.env.example` para `.env` e preencha apenas:

```dotenv
BINANCE_ENV=testnet
BINANCE_KEY_TYPE=ED25519
BINANCE_API_KEY=sua_api_key_de_testnet
BINANCE_PRIVATE_KEY_PATH=C:\caminho\fora\do\repo\test-prv-key.pem
BINANCE_PRIVATE_KEY_PASSPHRASE=sua_passphrase
```

O `.gitignore` bloqueia `.env`, PEMs, bancos e logs. Para uma chave de produção futura, use uma chave exclusiva do app, whitelist de IP, sem saque, transferência, margem ou futuros. A versão atual não envia ordens reais mesmo que `BINANCE_ENV=production` seja configurado.

## Estratégia baseline

No fechamento confirmado de cada semana, o app calcula se o retorno do ativo foi positivo em 1, 2 e 4 semanas. O score é a fração de horizontes positivos:

```text
score ∈ {0, 1/3, 2/3, 1}
```

A exposição alvo é:

```text
exposição = score × min(alocação_máxima, volatilidade_alvo / volatilidade_EWMA)
```

O rebalanceamento espera uma barra diária completa e acontece no open posterior. Com candles diários, essa defasagem conservadora evita fingir que seria possível observar o fechamento semanal, calcular e capturar exatamente o open ocorrido 1 ms depois. A estratégia é uma hipótese simples e testável, não uma afirmação de que momentum continuará existindo.

### Portão para paper trading

O app só marca um resultado como elegível se, no mínimo:

- houver ao menos 1.095 dias e 365 dias no bloco final;
- o bloco final tiver retorno líquido, Sharpe e atividade suficientes;
- o Probabilistic Sharpe OOS superar o limiar ajustado pelas tentativas salvas;
- drawdown de fechamento e a marca conservadora pelo low diário ficarem nos limites;
- ordens forem executáveis após notional, step, no-trade band e participação no volume;
- a estratégia sobreviver a custos 3× e a maioria dos segmentos OOS for positiva;
- os parâmetros do protocolo conservador permanecerem congelados.

Mesmo quando todos passam, é obrigatório um período forward em Testnet/paper trading. Alterar parâmetros depois de olhar o período reservado invalida o teste.

## Estrutura

```text
src/
  client/              dashboard React
  server/
    binance/           REST, stream, assinatura e regras da exchange
    paper/             previsão 15m, sessão virtual e serviço automático
    quant/             sinais, simulação e estatística
    storage/           diário SQLite dos experimentos
  shared/              contratos entre backend e interface
docs/
  ARCHITECTURE.md       fronteiras e invariantes de segurança
  RESEARCH.md           pesquisa técnica e fontes
tests/                  testes sem depender da rede
```

Veja [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) e [docs/RESEARCH.md](docs/RESEARCH.md).

## Como funciona o paper trader de 15 minutos

O serviço usa somente dados públicos. Para cada candle completo, calcula uma decisão e calibra a direção usando exemplos históricos cuja barra seguinte já era conhecida. Uma ação direcional precisa superar estritamente:

```text
2 × fee + 2 × slippage + spread atual + margem de segurança
```

BUY compra apenas até a alocação configurada; SELL vende a posição Spot existente; HOLD não opera. Não há short, margem, futuros ou alavancagem. A mesma barra nunca é processada duas vezes. A sessão continua enquanto o app estiver aberto e é retomada do SQLite após reiniciar.

## Limites conhecidos desta versão

- Testnet valida autenticação e ciclo técnico, mas não reproduz liquidez, slippage ou impacto reais.
- Candles não contêm a sequência intradiária nem o livro histórico; o slippage é um cenário, não uma previsão.
- O bootstrap não elimina mudança de regime, risco de stablecoin, custódia, contraparte, API ou software.
- A comissão padrão é configurável. Quando credenciais forem usadas, uma próxima etapa deve carregar a comissão efetiva por símbolo/conta.
- O baseline trabalha um símbolo por vez; um portfólio exige dados point-in-time e controles de correlação.
- A previsão de 15 minutos é uma hipótese conservadora, não uma máquina de acertar o próximo preço; muitos sinais podem corretamente terminar em HOLD.
- O book ticker mostra o topo atual, não profundidade completa nem impacto futuro. Paper fills continuam sendo aproximações.
- O bloco final e a correção por tentativas reduzem data mining, mas não substituem DSR/CSCV completo nem um período forward realmente intocado.

## Execução real Spot (opt-in técnico)

O endpoint de ordem MARKET real existe somente quando o processo inicia com uma chave privada de produção e `LIVE_TRADING_ENABLED=true`. Ele exige a confirmação literal `OPERAR_COM_DINHEIRO_REAL`, aceita BUY por `quoteOrderQty` e SELL por `quantity`, e nunca reenvia uma ordem após timeout. Ainda não está conectado ao laço automático do paper trader: essa conexão exige conciliador de conta e diário de ordens antes de poder ser considerada segura.

Use uma chave separada, sem permissão de saque, transferência, margem ou futuros, com whitelist de IP. Nunca envie chaves para este chat.

## Próximas etapas antes de qualquer capital real automatizado

1. Acumular 3–6 meses de paper forward e 20–30 fills executáveis sem mudar o protocolo.
2. Implementar DSR/CSCV/PBO por família e um holdout pré-registrado.
3. Adotar a WebSocket API User Data Stream atual (`userDataStream.subscribe`).
4. Construir diário idempotente de ordens reais e recuperação de estado desconhecido.
5. Carregar comissão efetiva, profundidade, impacto e watchdog de relógio/latência.
6. Fazer revisão humana e liberar separadamente apenas `order/test` na Testnet.
7. Só depois projetar execução real isolada, com chave sem saque e menor ordem possível.

## Aviso

Este software é uma ferramenta de pesquisa, não aconselhamento financeiro. Retorno passado, inclusive fora da amostra, não garante retorno futuro. Criptoativos podem perder grande parte ou todo o valor e ainda carregam riscos de exchange e stablecoin.
