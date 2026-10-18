import type { ReactNode } from "react";
import { Lightbulb, AlertTriangle } from "lucide-react";

/** Uma página A4 do guia. `escura` usa o fundo da capa. */
export function Pagina({ children, escura = false }: { children: ReactNode; escura?: boolean }) {
  return <section className={`guia-pagina ${escura ? "guia-pagina-escura" : ""}`}>{children}</section>;
}

export function TituloSecao({ numero, titulo, resumo }: { numero?: string; titulo: string; resumo?: string }) {
  return (
    <header className="mb-5">
      {numero && <span className="guia-etiqueta">{numero}</span>}
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight">{titulo}</h2>
      {resumo && <p className="mt-2 max-w-prose text-base text-guia-suave">{resumo}</p>}
    </header>
  );
}

/** Moldura simplificada de uma tela do app. */
export function Tela({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <div className="guia-tela guia-cartao">
      <div className="guia-tela-topo">
        <span className="h-2 w-2 rounded-full bg-guia-destaque" />
        <span className="text-xs font-bold">{titulo}</span>
      </div>
      <div className="relative space-y-2 p-3">{children}</div>
    </div>
  );
}

/** Círculo numerado que aponta para uma parte do mockup. */
export function Marca({ n, className = "" }: { n: number; className?: string }) {
  return <span className={`guia-marca ${className}`}>{n}</span>;
}

export function Legenda({ itens }: { itens: string[] }) {
  return (
    <ol className="space-y-1.5 text-sm">
      {itens.map((t, i) => (
        <li key={i} className="flex gap-2">
          <Marca n={i + 1} className="static shrink-0" />
          <span>{t}</span>
        </li>
      ))}
    </ol>
  );
}

function Caixa({ tipo, titulo, children }: { tipo: "dica" | "atencao"; titulo: string; children: ReactNode }) {
  const Icone = tipo === "dica" ? Lightbulb : AlertTriangle;
  return (
    <aside className={`guia-cartao guia-caixa-${tipo} flex gap-3 p-3 text-sm`}>
      <Icone className="mt-0.5 h-4 w-4 shrink-0" />
      <div><strong>{titulo}</strong><div className="mt-0.5">{children}</div></div>
    </aside>
  );
}
export const CaixaDica = ({ children, titulo = "Dica" }: { children: ReactNode; titulo?: string }) => (
  <Caixa tipo="dica" titulo={titulo}>{children}</Caixa>
);
export const CaixaAtencao = ({ children, titulo = "Atenção" }: { children: ReactNode; titulo?: string }) => (
  <Caixa tipo="atencao" titulo={titulo}>{children}</Caixa>
);

export type Limitacao = { limitacao: string; porque: string; fazer: string };
export function TabelaLimitacoes({ linhas }: { linhas: Limitacao[] }) {
  return (
    <table className="guia-tabela">
      <thead><tr><th>Limitação</th><th>Por quê</th><th>O que fazer</th></tr></thead>
      <tbody>
        {linhas.map((l, i) => (
          <tr key={i}><td>{l.limitacao}</td><td>{l.porque}</td><td>{l.fazer}</td></tr>
        ))}
      </tbody>
    </table>
  );
}
