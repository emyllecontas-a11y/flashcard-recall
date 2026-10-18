import { Home, BookOpen, Calendar, Timer, AlertCircle, Layers, FileText, Users, Settings, type LucideIcon } from "lucide-react";
import { Pagina, TituloSecao, CaixaDica } from "../componentes";

const abas: { icone: LucideIcon; nome: string; faz: string }[] = [
  { icone: Home, nome: "Início", faz: "Resumo do dia: flashcards, progresso e próximas revisões." },
  { icone: BookOpen, nome: "Conteúdo", faz: "Disciplinas, tópicos e PDFs de estudo." },
  { icone: Calendar, nome: "Calendário", faz: "Registra o que você estudou e agenda revisões." },
  { icone: Timer, nome: "Sessões", faz: "Cronômetro de estudo e registro manual de sessões." },
  { icone: AlertCircle, nome: "Erros", faz: "Caderno com as questões que você errou." },
  { icone: Layers, nome: "Flashcards", faz: "Baralhos com revisão no dia certo." },
  { icone: FileText, nome: "Simulados", faz: "Simulados e listas de questões, com estatísticas." },
  { icone: Users, nome: "Comunidade", faz: "Amigas e o que foi compartilhado com você." },
  { icone: Settings, nome: "Ajustes", faz: "Regras dos flashcards, importação do Anki e backup." },
];

const conexoes = [
  "Você cria disciplinas e tópicos em Conteúdo. Eles aparecem no Calendário, nas Sessões e no Início.",
  "Estudar um tópico no Calendário agenda as próximas revisões, que voltam no Início.",
  "Questões erradas viram anotações em Erros. Flashcards revisam o que você precisa lembrar.",
  "Na Comunidade, você recebe materiais de amigas e copia para o seu Conteúdo ou Simulados.",
];

export function VisaoGeral() {
  return (
    <Pagina>
      <TituloSecao numero="Visão geral" titulo="O mapa do app" resumo="O menu tem 9 abas. No celular, as 4 primeiras ficam embaixo e as outras ficam em “Mais”." />
      <div className="grid grid-cols-3 gap-3">
        {abas.map(({ icone: Icone, nome, faz }) => (
          <div key={nome} className="guia-cartao p-3">
            <Icone className="h-5 w-5 text-guia-destaque" />
            <p className="mt-2 font-bold">{nome}</p>
            <p className="mt-1 text-xs text-guia-suave">{faz}</p>
          </div>
        ))}
      </div>
      <h3 className="mt-6 mb-2 text-lg font-bold">Como as abas se conectam</h3>
      <ol className="mb-5 list-decimal space-y-1.5 pl-5 text-sm">
        {conexoes.map((c) => <li key={c}>{c}</li>)}
      </ol>
      <CaixaDica>Também existem telas fora do menu: o leitor de PDF, o plano de estudos e as telas de entrar e criar conta.</CaixaDica>
    </Pagina>
  );
}
