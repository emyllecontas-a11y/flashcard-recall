import { Pagina, TituloSecao, CaixaDica, CaixaAtencao } from "../componentes";

const blocos: { titulo: string; itens: string[] }[] = [
  { titulo: "Sua prova", itens: ["Prova-alvo e data da prova (obrigatórios).", "Elas definem a contagem “Dias até a prova” no Início."] },
  { titulo: "Limites diários", itens: ["Novos cards por dia.", "Máximo de revisões por dia.", "Limite total de cards por dia."] },
  { titulo: "Passos de aprendizado", itens: ["Passos de aprendizado e de reaprendizado (em minutos).", "Intervalo de graduação e intervalo fácil (em dias)."] },
  { titulo: "Priorização e sanguessugas", itens: ["Limiar de sanguessuga: quantos erros até o cartão ser priorizado.", "Embaralhar cards, mostrar tempo de resposta e início do dia."] },
  { titulo: "Importar do Anki", itens: ["Arquivos .txt, .csv ou .apkg.", "Mostra quantos cards foram importados e ignorados."] },
  { titulo: "Backup e aparência", itens: ["Backup dos dados: baixa um arquivo com disciplinas, flashcards, erros, revisões e estudos.", "Tema do app (confirmar as opções)."] },
];

export function Ajustes() {
  return (
    <Pagina>
      <TituloSecao numero="Aba 9" titulo="Ajustes" resumo="Defina sua prova, as regras dos flashcards e guarde uma cópia dos seus dados." />
      <div className="grid grid-cols-2 gap-3">
        {blocos.map((b) => (
          <div key={b.titulo} className="guia-cartao p-3">
            <p className="font-bold">{b.titulo}</p>
            <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs">{b.itens.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-3">
        <CaixaDica>Faça um backup de vez em quando e guarde o arquivo em local seguro. Toque em “Salvar configurações” depois de mudar algo.</CaixaDica>
        <CaixaAtencao>“Excluir conta” apaga sua conta. Faça um backup antes.</CaixaAtencao>
      </div>
    </Pagina>
  );
}
