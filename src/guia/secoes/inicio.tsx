import { Pagina, TituloSecao, Tela, Marca, Legenda, CaixaDica } from "../componentes";

const legenda = [
  "Saudação do dia e o nome da sua prova (ex.: ENARE 2026).",
  "Sequência de dias, flashcards para hoje e dias até a prova.",
  "Flashcards hoje: quantos revisar e quantos estão atrasados.",
  "Progresso por disciplina: as 4 principais do seu plano. “Ver todas” leva a Conteúdo.",
  "Próximas revisões agendadas. “Ver agenda” leva ao Calendário.",
];

const passos = [
  "Abra o app: o Início é a primeira tela.",
  "Veja se há flashcards atrasados e comece por eles.",
  "Confira as revisões de hoje e de amanhã.",
  "Toque em “Ver agenda” para registrar o que estudou.",
];

export function Inicio() {
  return (
    <Pagina>
      <TituloSecao numero="Aba 1" titulo="Início" resumo="O resumo do seu dia de estudo, em uma tela só." />
      <div className="grid grid-cols-2 gap-5">
        <Tela titulo="Início">
          <div className="relative font-bold">Boa tarde! <Marca n={1} className="-right-1 top-0" /></div>
          <div className="relative grid grid-cols-3 gap-1 text-[10px]">
            {["Sequência", "Hoje", "Prova"].map((t) => <div key={t} className="guia-cartao p-1.5">{t}</div>)}
            <Marca n={2} className="-right-1 -top-2" />
          </div>
          <div className="guia-cartao relative p-2 text-[10px]">Revisar · Atrasados <Marca n={3} className="-right-1 -top-2" /></div>
          <div className="guia-cartao relative p-2 text-[10px]">Progresso por disciplina <Marca n={4} className="-right-1 -top-2" /></div>
          <div className="guia-cartao relative p-2 text-[10px]">Próximas revisões <Marca n={5} className="-right-1 -top-2" /></div>
        </Tela>
        <Legenda itens={legenda} />
      </div>
      <h3 className="mt-6 mb-2 text-lg font-bold">Passo a passo</h3>
      <ol className="mb-5 list-decimal space-y-1.5 pl-5 text-sm">{passos.map((p) => <li key={p}>{p}</li>)}</ol>
      <CaixaDica>Sem disciplinas, o Início mostra “Nenhuma disciplina cadastrada.”. Comece criando uma em Conteúdo. Também pode aparecer a “Meta do dia” (confirmar quando aparece).</CaixaDica>
    </Pagina>
  );
}
