# Progresso do Guia RevisaFlash

**Status:** ETAPA 3 concluída. Próxima: ETAPA 4 (FAQ, Primeiros passos, revisão final).

**Próxima mensagem a enviar:** `Continue a partir de docs/PROGRESSO-GUIA.md` (fazer a ETAPA 4)

## Decisões tomadas
- O código foi lido do repositório GitHub `revisa-flash` (branch main). Este projeto Lovable é separado: o guia precisa ser criado DENTRO do repositório do app.
- O app usa **React Router** em `src/router.tsx` (lista de rotas em objetos). A rota /guia deve ser adicionada lá, sem proteção de login (decisão: pública, só leitura).
- O menu atual tem **"Comunidade"**, que junta "Amigas" + "Compartilhado comigo" (comentário em `app-shell.tsx`). O guia terá uma seção "Comunidade" cobrindo as duas partes.
- `/teste-pdf` ("Leitor de PDF (teste antigo)") e `/landing` não entram no guia.
- Ordem das seções = ordem do menu: Início, Conteúdo, Calendário, Sessões, Erros, Flashcards, Simulados (+ Listas), Comunidade, Ajustes; depois Leitor de PDF, Plano de estudos, Login/Cadastro.

## Abas encontradas (fonte: `src/components/app-shell.tsx` linhas 43–57, `src/router.tsx`)
Menu principal (celular): Início, Conteúdo, Calendário, Sessões. Menu "Mais": Erros, Flashcards, Simulados, Comunidade, Ajustes.
Outras telas: Leitor de PDF (`/pdf/:fileId`), Simulado aberto (`/simulados/:id`), Lista aberta (`/listas/:id`), Login, Cadastro, Redefinir senha.

## Anotações por tela

### Início — `src/routes/index.tsx`
- Título "Início". Blocos: "Flashcards hoje", "Progresso por disciplina", "Próximas revisões".
- Tem "Desafio do dia" (`DailyChallenge.tsx`) (confirmar o texto exato).
- Mostra o cartão do plano do dia (`PlanoDiaCard.tsx`) (confirmar).
- Há um tour de boas-vindas (`OnboardingTour.tsx`).

### Conteúdo — `src/routes/conteudo.tsx`
- Organiza disciplinas e "Tópicos" com PDFs.
- PDFs podem ficar "Disponível offline"; dá para remover a "Cópia offline".
- Baixar todos os PDFs do tópico para offline; avisos: "Todos os PDFs deste tópico já estão offline", "Nenhum PDF offline neste tópico".
- Limitação: baixar offline exige internet ("Nenhum PDF pôde ser baixado. Verifique sua conexão.").
- Se o download direto falhar, o PDF abre em nova aba.
- Compartilhar pasta com amigas (`CompartilharPastaModal.tsx`).
- Subtópicos com modal próprio (`SubtopicoModal.tsx`).

### Calendário — `src/routes/calendario.tsx`
- Registrar estudo de um tópico ("Selecione um tópico para registrar o estudo.").
- Concluir revisões agendadas; excluir registros.
- Limitação: o registro exige um tópico existente ("Tópico não encontrado.").

### Sessões — `src/routes/sessoes.tsx`
- Cronômetro/Pomodoro (`PomodoroCard.tsx`, `PomodoroSettings.tsx`, `PomodoroStats.tsx`).
- "Registrar sessão manual"; "Resumo da sessão" ao finalizar.
- Obrigatório escolher disciplina ("Escolha uma disciplina antes de iniciar.").
- Duração precisa ser maior que zero.
- Player de música (`MusicPlayer.tsx`, `MiniMusicPlayer.tsx`) (confirmar onde aparece).

### Erros — `src/routes/erros.tsx`
- Caderno de erros: registrar questão errada ("Erro registrado com sucesso!").
- Campos obrigatórios: questão e resposta correta.
- Editar e excluir erros; enviar erros para outra pessoa (`EnviarErrosModal.tsx`) (confirmar).

### Flashcards — `src/routes/flashcards.tsx`
- Decks (baralhos); botões "Novo flashcard", "Editar baralho", "Voltar para os decks".
- Tela final "🎉 Revisão concluída!".
- Revisão espaçada estilo Anki (limites diários e passos de aprendizado em Ajustes).

### Simulados e Listas — `src/routes/simulados.tsx`, `simulados.$id.tsx`, `listas.$id.tsx`, `ListasTab.tsx`
- Importar simulado em arquivo `.json` ou `.pdf`; revisar importação de PDF (`RevisarImportacaoPdfModal.tsx`).
- "📊 Estatísticas de Simulados"; comparar no máximo 5 simulados.
- Apagar progresso, excluir tentativa, limpar histórico.
- Gerar PDF do simulado/lista; copiar simulado.
- Listas de questões com estatísticas (`EstatisticasListasModal.tsx`) e edição de questões.

### Comunidade (Amigas + Compartilhado comigo) — `comunidade.tsx`, `amigas.tsx`, `compartilhados.tsx`
- Convidar amiga por e-mail ("Convite enviado!"); aceitar, recusar, cancelar convite; remover amizade.
- Ver o que foi compartilhado e copiar para si: tópicos, PDFs, listas, simulados.
- Limitação: alguns PDFs podem falhar ao copiar ("Copiei X PDF(s), mas Y falharam").
- Grifos, respostas e resultados são individuais (confirmar no código de cópia).

### Ajustes — `src/routes/configuracoes.tsx`
- "Limites diários", "Priorização e sanguessugas", "Passos de aprendizado" (flashcards).
- "Importar flashcards do Anki": formatos `.txt`, `.apkg`, `.csv`.
- "Backup dos dados": arquivo `.json`.
- Envio de imagem (foto de perfil?) (confirmar).
- Temas (confirmar).

### Leitor de PDF — `src/routes/pdf.$fileId.tsx`, `PdfViewer.tsx`, `TextoGrifavel.tsx`
- Abre o PDF do tópico; grifos no texto (confirmar).

### Plano de estudos — `PlanoWizard.tsx`, `PlanoImportCsv.tsx`, `PlanoEditorSemanas.tsx`
- Criar plano com assistente ("Plano criado com sucesso!").
- Importar plano por planilha `.xlsx` (apesar do nome "Csv").
- Editar por semanas.

### Login / Cadastro — `login.tsx`, `cadastro.tsx`
- "Bem-vinda de volta"; "Crie sua conta"; "Verifique seu e-mail"; redefinir senha.
- Login com Google (confirmar, existe rota `/sso-callback`).
- Tela de acesso expirado (`AccessExpired.tsx`) (confirmar o motivo).

### Atravessa o app (confirmar todos)
- Funciona offline com dados salvos no aparelho; envia para a nuvem quando volta a internet.
- Login precisa de internet na primeira vez (`ClerkProtectedRoute.tsx` trata modo offline).
- Instalação no celular e temas: não localizados ainda (confirmar).
- Limites de tamanho de arquivo: não localizados (confirmar).

## Plano das etapas
- [x] ETAPA 0 — leitura e anotações
- [x] ETAPA 1 — componentes, index, rota /guia, CSS de impressão, Capa e Visão geral
- [x] ETAPA 2A — Início, Conteúdo, Calendário
- [x] ETAPA 2B — Sessões, Erros, Flashcards
- [x] ETAPA 2C — Simulados/Listas, Comunidade, Ajustes
- [x] ETAPA 2D — Leitor de PDF, Plano de estudos, Login/Cadastro
- [x] ETAPA 3 — Funcionalidades gerais + Limitações gerais
- [ ] ETAPA 4 — FAQ, Primeiros passos, revisão final

## Decisões da ETAPA 1
- O guia foi montado neste projeto separado (TanStack Router). A rota é `src/routes/guia.tsx` e `/` redireciona para `/guia`. Para levar ao app original (React Router), copie `src/guia/` e o bloco "Guia RevisaFlash" do `src/styles.css`, e adicione `{ path: '/guia', element: <GuiaPage/> }` em `src/router.tsx`.
- A pasta `src/guia/` não depende do roteador: só React, Tailwind e lucide-react.
- Cores e classes do guia ficam em `src/styles.css` (prefixo `guia-`). A fonte Plus Jakarta Sans é carregada no `__root.tsx`.
- Ícone da capa: BookOpen (o logo real do app, `LogoIcon.tsx`, não foi copiado) (confirmar).

## Arquivos criados
- src/guia/componentes.tsx — Pagina, TituloSecao, Tela, Marca, Legenda, CaixaDica, CaixaAtencao, TabelaLimitacoes
- src/guia/index.tsx — GuiaPage, barra com "Baixar PDF" e lista `secoes` (ordem do documento)
- src/guia/secoes/capa.tsx, src/guia/secoes/visao-geral.tsx
- src/routes/guia.tsx (rota) e src/routes/index.tsx (redireciona para /guia)
- src/styles.css — bloco "Guia RevisaFlash" (cores, cartões, @media print A4)
- docs/PROGRESSO-GUIA.md
- docs/PROMPT-CONTINUAR.md

## Decisões da ETAPA 2A
- Seções criadas: src/guia/secoes/inicio.tsx, conteudo.tsx, calendario.tsx (cada uma 1 página).
- Intervalos de revisão lidos no código do Calendário: 1, 7, 15, 30, 60 dias (confirmar se vale para tópicos).
- Status de tópico: Não iniciado, Estudando, Revisado, Dominado.

## Decisões da ETAPA 2B
- Seções: sessoes.tsx, erros.tsx, flashcards.tsx.
- Tipos de erro no código: Conceito, Interpretação, Memória, Atenção. Erros podem ir para o baralho "Erros".
- Notas dos flashcards: Errei, Difícil, Bom, Fácil. Músicas do player: (confirmar).

## Decisões da ETAPA 2C
- Seções: simulados.tsx, comunidade.tsx, ajustes.tsx.
- Ajustes inclui Prova-alvo/Data da prova e "Excluir conta". Opções de tema: (confirmar).

## Decisões da ETAPA 2D
- Seções criadas: src/guia/secoes/leitor-pdf.tsx, plano-estudos.tsx, login.tsx (1 página cada).
- Leitor: cores de grifo Amarelo/Verde/Rosa/Azul/Vermelho, Sublinhar, Riscar, Anotar, Notas, Modo leitura, busca (fonte PdfViewer.tsx).
- Plano: “Criar Passo a Passo” e “Importar Excel” (.xlsx), Baú de Pendências, domingo como descanso (PlanoWizard, PlanoImportCsv, PlanoDiaCard, PlanoGestaoModal).
- Login: Google, senha mínima 8 caracteres, código por e-mail; teste gratuito de 30 dias (AccessExpired.tsx).
- (confirmar): grifos salvos na nuvem; se domingo pode ser dia de estudo.

## Decisões da ETAPA 3
- Seções: src/guia/secoes/funcionalidades.tsx e limitacoes.tsx.
- Fontes: offline/nuvem (app-shell.tsx, lib/powersync, conteudo.tsx), instalação (public/manifest.json, sw.js), tema claro/escuro (configuracoes.tsx), avisos (lib/notifications.ts, pomodoroAlarm.ts), imagem 2 MB JPG/PNG/WebP (EditarQuestaoModal.tsx), 30 dias (AccessExpired.tsx).
- (confirmar): caminho de instalação em cada celular; quais avisos o app envia.
