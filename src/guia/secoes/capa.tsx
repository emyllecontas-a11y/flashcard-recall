import { BookOpen } from "lucide-react";
import { Pagina } from "../componentes";

const destaques = ["Todas as abas, uma por página", "Passo a passo das tarefas mais comuns", "Limitações e cuidados", "Perguntas frequentes"];

export function Capa() {
  return (
    <Pagina escura>
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center gap-3">
          <span className="guia-logo"><BookOpen className="h-6 w-6" /></span>
          <span className="text-xl font-extrabold">RevisaFlash</span>
        </div>
        <div>
          <span className="guia-etiqueta">Guia visual</span>
          <h1 className="mt-4 text-6xl font-extrabold leading-tight tracking-tight">
            Tudo o que o<br /><span className="text-guia-destaque">RevisaFlash</span> faz
          </h1>
          <p className="mt-5 max-w-md text-lg opacity-80">
            Um guia simples para estudar para residência e concursos com mais organização.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3 text-sm">
          {destaques.map((d) => <li key={d} className="guia-cartao-escuro p-3">{d}</li>)}
        </ul>
      </div>
    </Pagina>
  );
}
