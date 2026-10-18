import { Pagina, TituloSecao, Tela, Marca, Legenda, CaixaDica, CaixaAtencao } from "../componentes";

const legenda = [
  "Duas partes: Amizades e Compartilhado comigo.",
  "Convide uma amiga pelo e-mail.",
  "Convites recebidos (aceitar ou recusar) e enviados (cancelar).",
  "Materiais que amigas compartilharam: copie um item ou use “Copiar tudo”.",
];

const passos = [
  "Em Amizades, digite o e-mail da amiga e envie o convite.",
  "Ela aceita o convite na Comunidade dela.",
  "Compartilhe pastas em Conteúdo, simulados, listas ou baralhos.",
  "Ela abre “Compartilhado comigo” e copia o que quiser para o app dela.",
];

export function Comunidade() {
  return (
    <Pagina>
      <TituloSecao numero="Aba 8" titulo="Comunidade" resumo="Estude junto com amigas: troque materiais e simulados." />
      <div className="grid grid-cols-2 gap-5">
        <Tela titulo="Comunidade">
          <div className="relative grid grid-cols-2 gap-1 text-center text-[10px]">
            <div className="guia-cartao p-1 font-bold">Amizades</div><div className="guia-cartao p-1">Compartilhado</div>
            <Marca n={1} className="-right-1 -top-2" />
          </div>
          <div className="guia-cartao relative p-1.5 text-[10px]">E-mail da amiga · Enviar <Marca n={2} className="-right-1 -top-2" /></div>
          <div className="guia-cartao relative p-1.5 text-[10px]">Convite de Ana · ✓ ✕ <Marca n={3} className="-right-1 -top-2" /></div>
          <div className="guia-cartao relative p-1.5 text-[10px]">📁 Patologia · Copiar tudo <Marca n={4} className="-right-1 -top-2" /></div>
        </Tela>
        <Legenda itens={legenda} />
      </div>
      <h3 className="mt-6 mb-2 text-lg font-bold">Passo a passo</h3>
      <ol className="mb-4 list-decimal space-y-1.5 pl-5 text-sm">{passos.map((p) => <li key={p}>{p}</li>)}</ol>
      <div className="space-y-3">
        <CaixaDica>Copiar cria uma cópia sua. O que você grifar ou responder fica só com você (confirmar).</CaixaDica>
        <CaixaAtencao>Alguns PDFs podem falhar ao copiar. Se aparecer “O PDF não pôde ser copiado.”, tente de novo depois com uma boa conexão.</CaixaAtencao>
      </div>
    </Pagina>
  );
}
