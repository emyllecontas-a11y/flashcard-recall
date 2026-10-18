import { Pagina, TituloSecao, Tela, Marca, Legenda, CaixaDica, CaixaAtencao } from "../componentes";

const legenda = [
  "Números: Total ativos, Críticas, Reincidentes, Resolvidos e Disciplinas com erro.",
  "“Registrar novo erro”.",
  "Cada erro mostra disciplina, tópico e tipo de erro.",
  "Editar, excluir ou enviar para os flashcards.",
];

const tipos = ["Conceito: você não sabia o conteúdo.", "Interpretação: leu errado o enunciado.", "Memória: sabia, mas esqueceu.", "Atenção: errou por distração."];

const passos = [
  "Toque em “Registrar novo erro”.",
  "Cole o enunciado da questão e a resposta correta.",
  "Se quiser, anote sua resposta, o tipo de erro e o que aprendeu.",
  "Salve: aparece “Erro registrado com sucesso!”.",
];

export function Erros() {
  return (
    <Pagina>
      <TituloSecao numero="Aba 5" titulo="Erros" resumo="Seu caderno de erros: guarde as questões que errou para não errar de novo." />
      <div className="grid grid-cols-2 gap-5">
        <Tela titulo="Caderno de erros">
          <div className="relative grid grid-cols-3 gap-1 text-[9px]">
            {["Ativos", "Críticas", "Resolvidos"].map((t) => <div key={t} className="guia-cartao p-1">{t}</div>)}
            <Marca n={1} className="-right-1 -top-2" />
          </div>
          <div className="relative text-center"><span className="guia-botao text-[10px]">Registrar novo erro</span><Marca n={2} className="-right-1 -top-2" /></div>
          <div className="guia-cartao relative p-2 text-[10px]">Patologia · Lesões · Conceito <Marca n={3} className="-right-1 -top-2" /></div>
          <div className="relative text-right text-[10px]">✏️ 🗑 ➜ Flashcards <Marca n={4} className="-right-1 -top-1" /></div>
        </Tela>
        <Legenda itens={legenda} />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-5">
        <div>
          <h3 className="mb-2 text-lg font-bold">Passo a passo</h3>
          <ol className="list-decimal space-y-1.5 pl-5 text-sm">{passos.map((p) => <li key={p}>{p}</li>)}</ol>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold">Tipos de erro</h3>
          <ul className="list-disc space-y-1.5 pl-5 text-sm">{tipos.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        <CaixaDica>Você pode enviar erros para o baralho “Erros” nos Flashcards e revisá-los como cartões.</CaixaDica>
        <CaixaAtencao>A questão e a resposta correta são obrigatórias para salvar.</CaixaAtencao>
      </div>
    </Pagina>
  );
}
