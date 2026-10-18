import { Pagina, TituloSecao, Tela, Marca, Legenda, CaixaDica, CaixaAtencao } from "../componentes";

const legenda = [
  "Página anterior e próxima página, e o número da página.",
  "Zoom: diminuir, aumentar e “Ajustar à largura”.",
  "“Buscar no PDF”: procura uma palavra ou expressão.",
  "Selecione um trecho para grifar (Amarelo, Verde, Rosa, Azul ou Vermelho), “Sublinhar”, “Riscar” ou “Anotar”.",
  "“Notas”: lista todas as suas anotações. “Modo leitura” esconde o resto da tela.",
];

const tarefas = [
  { titulo: "Grifar e anotar um trecho", passos: ["Abra o PDF em Conteúdo.", "Selecione o texto com o dedo ou o mouse.", "Escolha uma cor, ou toque em “Anotar” e escreva sua nota.", "Para desfazer, toque no grifo e em “Remover marcação”."] },
  { titulo: "Encontrar um assunto no PDF", passos: ["Toque na lupa (“Buscar no PDF”).", "Digite a palavra e aperte Enter.", "Use “Próximo resultado” e “Resultado anterior” para navegar."] },
];

export function LeitorPdf() {
  return (
    <Pagina>
      <TituloSecao numero="Tela extra" titulo="Leitor de PDF" resumo="Leia seus PDFs dentro do app, com grifos, notas e busca." />
      <div className="grid grid-cols-2 gap-5">
        <Tela titulo="Leitor de PDF">
          <div className="relative flex gap-1 text-[10px]">
            <div className="guia-cartao px-1.5 py-1">‹ 3 / 40 ›</div>
            <div className="guia-cartao px-1.5 py-1">− 100% +</div>
            <div className="guia-cartao px-1.5 py-1">🔍</div>
            <Marca n={1} className="-left-1 -top-2" /><Marca n={2} className="left-16 -top-2" /><Marca n={3} className="right-6 -top-2" />
          </div>
          <div className="guia-cartao relative space-y-1 p-2 text-[10px]">
            <p>Texto do PDF com um <span className="rounded bg-guia-destaque/40 px-0.5">trecho grifado</span>.</p>
            <p className="underline">Trecho sublinhado.</p>
            <Marca n={4} className="-right-1 -top-2" />
          </div>
          <div className="relative flex gap-1 text-[10px]">
            <div className="guia-cartao px-1.5 py-1">Notas (2)</div>
            <div className="guia-cartao px-1.5 py-1">Modo leitura</div>
            <Marca n={5} className="-right-1 -top-2" />
          </div>
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
        <CaixaDica>Se o PDF já estiver salvo no aparelho, aparece “Lendo do cache local (abre sem internet)”. No computador, use as setas ← → para trocar de página.</CaixaDica>
        <CaixaAtencao>Um PDF que não foi baixado para uso offline precisa de internet para abrir. Seus grifos e notas são só seus (confirmar se ficam salvos na nuvem).</CaixaAtencao>
      </div>
    </Pagina>
  );
}
