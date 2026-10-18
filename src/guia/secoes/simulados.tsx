import { Pagina, TituloSecao, Tela, Marca, Legenda, CaixaDica, CaixaAtencao } from "../componentes";

const legenda = [
  "Duas partes: Simulados e Listas de questões.",
  "“Importar simulado”: arquivo .json ou .pdf.",
  "Cada simulado: refazer, recomeçar do zero, gerenciar questões, compartilhar ou excluir.",
  "“📊 Estatísticas de Simulados”: média, melhor resultado, tempo médio e desempenho por área.",
];

const listas = [
  "Organize as listas por disciplina e em pastas (criar, renomear, excluir).",
  "Importe várias listas de uma vez (pode selecionar vários arquivos .json).",
  "Veja o histórico de tentativas: última, melhor e média.",
  "Mova listas entre pastas e edite as questões.",
];

export function Simulados() {
  return (
    <Pagina>
      <TituloSecao numero="Aba 7" titulo="Simulados e Listas" resumo="Faça provas completas e listas de questões, e acompanhe sua evolução." />
      <div className="grid grid-cols-2 gap-5">
        <Tela titulo="Simulados">
          <div className="relative grid grid-cols-2 gap-1 text-center text-[10px]">
            <div className="guia-cartao p-1 font-bold">Simulados</div><div className="guia-cartao p-1">Listas</div>
            <Marca n={1} className="-right-1 -top-2" />
          </div>
          <div className="relative text-center"><span className="guia-botao text-[10px]">Importar simulado</span><Marca n={2} className="-right-1 -top-2" /></div>
          <div className="guia-cartao relative p-2 text-[10px]">ENARE 2025 · 72% · ↻ 🗑 <Marca n={3} className="-right-1 -top-2" /></div>
          <div className="guia-cartao relative p-2 text-[10px]">📊 Média · 🏆 Melhor <Marca n={4} className="-right-1 -top-2" /></div>
        </Tela>
        <Legenda itens={legenda} />
      </div>
      <h3 className="mt-6 mb-2 text-lg font-bold">Listas de questões</h3>
      <ul className="mb-4 list-disc space-y-1.5 pl-5 text-sm">{listas.map((p) => <li key={p}>{p}</li>)}</ul>
      <div className="space-y-3">
        <CaixaDica>Use “Comparar simulados” para ver lado a lado como você foi em cada área. Ao importar um PDF, o app mostra as questões para você revisar antes de salvar.</CaixaDica>
        <CaixaAtencao>Dá para comparar no máximo 5 simulados de uma vez. Excluir uma tentativa apaga aquele resultado.</CaixaAtencao>
      </div>
    </Pagina>
  );
}
