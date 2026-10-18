import { Pagina, TituloSecao, Tela, Marca, Legenda, CaixaDica, CaixaAtencao } from "../componentes";

const legenda = [
  "Mês com os dias de estudo e as revisões marcadas.",
  "Revisão agendada (ex.: “Revisão D2”). Toque para concluir.",
  "Resumo do mês: estudos e questões feitas.",
  "“Registrar estudo”: escolha disciplina, tópico e tipo de estudo.",
];

const passos = [
  "Toque em “Registrar estudo”.",
  "Selecione uma disciplina e depois um tópico.",
  "Escolha o tipo de estudo (teórico ou prático com questões).",
  "Anote detalhes, se quiser, e salve.",
  "O app agenda as próximas revisões sozinho.",
];

export function Calendario() {
  return (
    <Pagina>
      <TituloSecao numero="Aba 3" titulo="Calendário" resumo="A agenda de estudos: registre o que estudou e veja as revisões." />
      <div className="grid grid-cols-2 gap-5">
        <Tela titulo="Agenda de estudos">
          <div className="relative grid grid-cols-7 gap-0.5 text-center text-[9px]">
            {Array.from({ length: 14 }, (_, i) => <div key={i} className={`guia-cartao p-1 ${i === 9 ? "font-bold text-guia-destaque" : ""}`}>{i + 1}</div>)}
            <Marca n={1} className="-right-1 -top-2" />
          </div>
          <div className="guia-cartao relative p-1.5 text-[10px]">Revisão D2 · Lesões <Marca n={2} className="-right-1 -top-2" /></div>
          <div className="guia-cartao relative p-1.5 text-[10px]">Estudos 12 · Questões 80 <Marca n={3} className="-right-1 -top-2" /></div>
          <div className="relative text-center"><span className="guia-botao text-[10px]">Registrar estudo</span><Marca n={4} className="-right-1 -top-2" /></div>
        </Tela>
        <Legenda itens={legenda} />
      </div>
      <h3 className="mt-6 mb-2 text-lg font-bold">Passo a passo</h3>
      <ol className="mb-4 list-decimal space-y-1.5 pl-5 text-sm">{passos.map((p) => <li key={p}>{p}</li>)}</ol>
      <div className="space-y-3">
        <CaixaDica>As revisões seguem intervalos crescentes: 1, 7, 15, 30 e 60 dias (confirmar se vale para tópicos e subtópicos).</CaixaDica>
        <CaixaAtencao>Só dá para registrar estudo de um tópico que já existe em Conteúdo. Crie o tópico antes.</CaixaAtencao>
      </div>
    </Pagina>
  );
}
