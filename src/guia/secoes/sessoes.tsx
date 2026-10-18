import { Pagina, TituloSecao, Tela, Marca, Legenda, CaixaDica, CaixaAtencao } from "../componentes";

const legenda = [
  "Cronômetro Pomodoro: Foco, Pausa curta e Pausa longa.",
  "Escolha a disciplina (obrigatório) e o tópico (opcional).",
  "Números: Hoje, Últimos 7 dias, Sessões no mês e Média (mês).",
  "Gráficos: tempo por dia e tempo por disciplina.",
  "“Registrar sessão manual” para estudo feito fora do app.",
];

const passos = [
  "Escolha uma disciplina e, se quiser, um tópico.",
  "Comece o foco. Ao terminar, o app mostra o “Resumo da sessão”.",
  "Salve: aparece “Sessão salva com sucesso!”.",
  "Esqueceu o cronômetro? Use “Registrar sessão manual” com horas e minutos.",
];

export function Sessoes() {
  return (
    <Pagina>
      <TituloSecao numero="Aba 4" titulo="Sessões" resumo="Cronometre seu estudo e veja quanto tempo você dedicou." />
      <div className="grid grid-cols-2 gap-5">
        <Tela titulo="Sessões">
          <div className="guia-cartao relative p-3 text-center text-xl font-extrabold">25:00 <Marca n={1} className="-right-1 -top-2" /></div>
          <div className="guia-cartao relative p-1.5 text-[10px]">Disciplina * · Tópico <Marca n={2} className="-right-1 -top-2" /></div>
          <div className="relative grid grid-cols-4 gap-1 text-[9px]">
            {["Hoje", "7 dias", "Mês", "Média"].map((t) => <div key={t} className="guia-cartao p-1">{t}</div>)}
            <Marca n={3} className="-right-1 -top-2" />
          </div>
          <div className="guia-cartao relative h-8 p-1.5 text-[10px]">▁▃▅▂▇ <Marca n={4} className="-right-1 -top-2" /></div>
          <div className="relative text-center"><span className="guia-botao text-[10px]">Registrar sessão manual</span><Marca n={5} className="-right-1 -top-2" /></div>
        </Tela>
        <Legenda itens={legenda} />
      </div>
      <h3 className="mt-6 mb-2 text-lg font-bold">Passo a passo</h3>
      <ol className="mb-4 list-decimal space-y-1.5 pl-5 text-sm">{passos.map((p) => <li key={p}>{p}</li>)}</ol>
      <div className="space-y-3">
        <CaixaDica>Em “Ajustes do Pomodoro” você muda o tempo de foco e pausas, liga o alarme e as notificações. O cartão também tem um tocador de música (confirmar as músicas disponíveis).</CaixaDica>
        <CaixaAtencao>Sem disciplina, o cronômetro não começa. No registro manual, a duração precisa ser maior que zero.</CaixaAtencao>
      </div>
    </Pagina>
  );
}
