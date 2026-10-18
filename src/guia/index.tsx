import { Download } from "lucide-react";
import { Capa } from "./secoes/capa";
import { VisaoGeral } from "./secoes/visao-geral";
import { Inicio } from "./secoes/inicio";
import { Conteudo } from "./secoes/conteudo";
import { Calendario } from "./secoes/calendario";
import { Sessoes } from "./secoes/sessoes";
import { Erros } from "./secoes/erros";
import { Flashcards } from "./secoes/flashcards";
import { Simulados } from "./secoes/simulados";
import { Comunidade } from "./secoes/comunidade";
import { Ajustes } from "./secoes/ajustes";
import { LeitorPdf } from "./secoes/leitor-pdf";
import { PlanoEstudos } from "./secoes/plano-estudos";
import { Login } from "./secoes/login";

/** Ordem do documento. Novas seções entram nesta lista. */
const secoes = [Capa, VisaoGeral, Inicio, Conteudo, Calendario, Sessoes, Erros, Flashcards, Simulados, Comunidade, Ajustes, LeitorPdf, PlanoEstudos, Login];

export function GuiaPage() {
  return (
    <div className="guia">
      <div className="guia-barra">
        <span className="font-bold">Guia RevisaFlash</span>
        <button type="button" className="guia-botao" onClick={() => window.print()}>
          <Download className="h-4 w-4" /> Baixar PDF
        </button>
      </div>
      <main className="guia-documento">
        {secoes.map((S, i) => <S key={i} />)}
      </main>
    </div>
  );
}
