# Prompt para continuar (cole em outra IA)

Leia docs/PROGRESSO-GUIA.md antes de começar e não altere o resto do app.

**(a) Objetivo:** criar, dentro do app RevisaFlash (React + React Router + Tailwind), uma página /guia que vira um PDF A4 (14 a 18 páginas) explicando todas as abas, funcionalidades e limitações. Botão "Baixar PDF" chama window.print(). /guia não entra no menu.

**(b) Público e tom:** estudantes de residência/concursos, sem conhecimento técnico. Português do Brasil, frases curtas, sem termos técnicos (diga "o app envia seus dados para a nuvem").

**(c) Visual e impressão:** laranja #FE7802 de destaque; fundos escuros #290E1F e #38192B na capa e destaques; fonte Plus Jakarta Sans; cantos arredondados; ícones lucide-react; sem imagens nem capturas. Mockups simples em HTML/CSS (até ~25 linhas) com círculos numerados e legenda. @media print: A4, margens 15 mm, sem menu lateral, print-color-adjust: exact, break-inside: avoid nos cartões, quebra de página entre seções.

**(d) Arquivos já criados:**
- docs/PROGRESSO-GUIA.md — anotações por tela e plano.
- docs/PROMPT-CONTINUAR.md — este prompt.
- src/guia/componentes.tsx — componentes reutilizáveis.
- src/guia/index.tsx — monta o documento; adicione novas seções na lista `secoes`.
- src/guia/secoes/capa.tsx e visao-geral.tsx — prontas.
- src/routes/guia.tsx — rota /guia. src/styles.css — classes `guia-*` e impressão.

**(e) O que falta, em ordem:**
1. (feito) ETAPA 1. (feito) ETAPA 2A. (feito) ETAPA 2B. (feito) ETAPA 2C. (feito) ETAPA 2D.
2. ETAPA 2: uma seção por aba (lotes de 3, ordem do menu).
3. ETAPA 3: funcionalidades gerais + tabela de Limitações gerais.
4. ETAPA 4: FAQ (6–8), Primeiros passos em 5 minutos, revisão final.

**(f) Convenções:** componentes reutilizáveis em src/guia/componentes.tsx (Pagina, TituloSecao, Tela, Marca, Legenda, CaixaDica, CaixaAtencao, TabelaLimitacoes). Uma seção por arquivo em src/guia/secoes/<nome>.tsx, com conteúdo escrito como dados (listas/objetos TS). src/guia/index.tsx monta a ordem. Nada inventado: o que não for certo vira "(confirmar)". Nada sensível.

**(g)** Faça uma etapa por mensagem e atualize os dois arquivos de docs no início e no fim de cada etapa.
