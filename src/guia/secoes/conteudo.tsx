import { Pagina, TituloSecao, Tela, Marca, Legenda, CaixaDica, CaixaAtencao } from "../componentes";

const legenda = [
  "Busca: encontre uma disciplina ou tópico pelo nome.",
  "Disciplina com o progresso dos tópicos.",
  "Tópico com status: Não iniciado, Estudando, Revisado ou Dominado.",
  "PDFs do tópico: abrir no leitor, baixar, deixar offline ou remover.",
  "Compartilhar com amigas.",
];

const passos = [
  "Toque em “Criar nova disciplina” e dê um nome (ex.: Patologia Oral).",
  "Dentro dela, crie um tópico (ex.: Lesões fundamentais) e escolha o status inicial.",
  "Use “Enviar arquivo” para juntar seus PDFs ao tópico.",
  "Toque em “Baixar todos” para estudar sem internet depois.",
];

export function Conteudo() {
  return (
    <Pagina>
      <TituloSecao numero="Aba 2" titulo="Conteúdo" resumo="Onde ficam suas disciplinas, tópicos e PDFs." />
      <div className="grid grid-cols-2 gap-5">
        <Tela titulo="Disciplinas e materiais">
          <div className="guia-cartao relative p-1.5 text-[10px]">Buscar disciplina ou tópico <Marca n={1} className="-right-1 -top-2" /></div>
          <div className="guia-cartao relative p-2 text-xs font-bold">Patologia Oral · 3/8 <Marca n={2} className="-right-1 -top-2" /></div>
          <div className="relative pl-3 text-[10px]">• Lesões fundamentais — Estudando <Marca n={3} className="-right-1 -top-1" /></div>
          <div className="guia-cartao relative p-1.5 text-[10px]">📄 aula1.pdf · ⬇ · offline <Marca n={4} className="-right-1 -top-2" /></div>
          <div className="relative text-right text-[10px]">Compartilhar <Marca n={5} className="-right-1 -top-1" /></div>
        </Tela>
        <Legenda itens={legenda} />
      </div>
      <h3 className="mt-6 mb-2 text-lg font-bold">Passo a passo</h3>
      <ol className="mb-4 list-decimal space-y-1.5 pl-5 text-sm">{passos.map((p) => <li key={p}>{p}</li>)}</ol>
      <div className="space-y-3">
        <CaixaDica>O filtro “Mostrar só PDFs disponíveis offline” ajuda a ver o que já está guardado no aparelho. Tópicos também podem ter subtópicos.</CaixaDica>
        <CaixaAtencao>Para deixar um PDF offline, você precisa de internet. Se aparecer “Nenhum PDF pôde ser baixado. Verifique sua conexão.”, tente de novo com internet. Se o download falhar, o PDF abre em uma nova aba.</CaixaAtencao>
      </div>
    </Pagina>
  );
}
