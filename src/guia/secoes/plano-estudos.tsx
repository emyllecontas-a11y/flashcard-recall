import { Pagina, TituloSecao, Tela, Marca, Legenda, CaixaDica, CaixaAtencao } from "../componentes";

const legenda = [
  "“Plano do dia”: as matérias que você deve estudar hoje.",
  "“Baú de Pendências”: matérias atrasadas de dias anteriores.",
  "“Gerenciar plano”: editar, substituir ou apagar o plano.",
];

const tarefas = [
  { titulo: "Criar com o passo a passo", passos: ["No cartão do plano, toque em “Cadastrar plano”.", "Escolha “Criar Passo a Passo”.", "Passo 1: nome do plano, duração (semanas) e semana atual.", "Passo 2: escolha as matérias de cada dia da semana.", "Toque em “Salvar Plano”."] },
  { titulo: "Importar de uma planilha", passos: ["Escolha “Importar Excel”.", "Baixe o modelo e preencha no formato “Matéria: Tema”.", "Informe o nome do plano e em qual semana você está hoje.", "Envie o arquivo .xlsx preenchido e toque para importar."] },
];

export function PlanoEstudos() {
  return (
    <Pagina>
      <TituloSecao numero="Tela extra" titulo="Plano de estudos" resumo="Monte sua rotina da semana e veja todo dia o que estudar." />
      <div className="grid grid-cols-2 gap-5">
        <Tela titulo="Plano do dia">
          <div className="guia-cartao relative space-y-1 p-2 text-[10px]">
            <p>• Português: Crase</p><p>• Matemática: Conjuntos</p>
            <Marca n={1} className="-right-1 -top-2" />
          </div>
          <div className="guia-cartao relative p-2 text-[10px]">Baú de Pendências · 2 matérias atrasadas <Marca n={2} className="-right-1 -top-2" /></div>
          <div className="guia-cartao relative p-2 text-[10px]">Gerenciar plano <Marca n={3} className="-right-1 -top-2" /></div>
        </Tela>
        <Legenda itens={legenda} />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {tarefas.map((t) => (
          <div key={t.titulo} className="guia-cartao p-3">
            <p className="font-bold">{t.titulo}</p>
            <ol className="mt-1.5 list-decimal space-y-1 pl-4 text-xs">{t.passos.map((p) => <li key={p}>{p}</li>)}</ol>
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-3">
        <CaixaDica>Para mudar só uma semana, use “Gerenciar plano” e edite a semana; depois toque em “Salvar Alterações”. Dia sem matéria na planilha vira dia livre.</CaixaDica>
        <CaixaAtencao>A importação aceita só arquivos .xlsx (Excel). Não mude os títulos da primeira linha do modelo (Semana, Segunda, Terça...). “Excluir plano” remove o plano inteiro. Domingo aparece como descanso (confirmar se dá para mudar).</CaixaAtencao>
      </div>
    </Pagina>
  );
}
