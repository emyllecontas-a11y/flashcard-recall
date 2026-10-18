import { Pagina, TituloSecao, Tela, Marca, Legenda, CaixaDica, CaixaAtencao } from "../componentes";

const legenda = [
  "Seus baralhos, que podem ter sub-baralhos (tópicos).",
  "Frente do cartão: a pergunta.",
  "Verso: a resposta, que aparece depois.",
  "Sua nota: Errei, Difícil, Bom ou Fácil. Ela define quando o cartão volta.",
];

const passos = [
  "Crie um baralho (nome obrigatório) e escolha a disciplina.",
  "Toque em “Novo flashcard” e preencha a frente e o verso.",
  "Abra o baralho e revise os cartões do dia.",
  "Responda com sinceridade. No fim aparece “🎉 Revisão concluída!”.",
];

export function Flashcards() {
  return (
    <Pagina>
      <TituloSecao numero="Aba 6" titulo="Flashcards" resumo="Cartões de pergunta e resposta que voltam no dia certo para você lembrar." />
      <div className="grid grid-cols-2 gap-5">
        <Tela titulo="Flashcards">
          <div className="guia-cartao relative p-1.5 text-[10px]">Baralho: Patologia · 12 hoje <Marca n={1} className="-right-1 -top-2" /></div>
          <div className="guia-cartao relative p-3 text-center text-xs font-bold">O que é uma mácula? <Marca n={2} className="-right-1 -top-2" /></div>
          <div className="guia-cartao relative p-2 text-center text-[10px]">Mancha plana, sem relevo. <Marca n={3} className="-right-1 -top-2" /></div>
          <div className="relative grid grid-cols-4 gap-1 text-center text-[9px]">
            {["Errei", "Difícil", "Bom", "Fácil"].map((t) => <div key={t} className="guia-cartao p-1">{t}</div>)}
            <Marca n={4} className="-right-1 -top-2" />
          </div>
        </Tela>
        <Legenda itens={legenda} />
      </div>
      <h3 className="mt-6 mb-2 text-lg font-bold">Passo a passo</h3>
      <ol className="mb-4 list-decimal space-y-1.5 pl-5 text-sm">{passos.map((p) => <li key={p}>{p}</li>)}</ol>
      <div className="space-y-3">
        <CaixaDica>Dá para compartilhar um baralho com amigas por e-mail. Cada baralho mostra estatísticas como acertos, erros e tempo total.</CaixaDica>
        <CaixaAtencao>Um cartão que você erra muitas vezes é marcado como “Sanguessuga”. Vale reescrever esse cartão. As regras ficam em Ajustes.</CaixaAtencao>
      </div>
    </Pagina>
  );
}
