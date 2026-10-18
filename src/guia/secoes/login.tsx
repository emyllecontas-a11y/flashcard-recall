import { Pagina, TituloSecao, Tela, Marca, Legenda, CaixaDica, CaixaAtencao } from "../componentes";

const legenda = [
  "“Continuar com Google”: entra com sua conta Google.",
  "E-mail e senha (o olho mostra ou esconde a senha).",
  "“Esqueci minha senha”: para criar uma senha nova.",
  "Botão para entrar. Quem não tem conta vai para “Crie sua conta”.",
];

const tarefas = [
  { titulo: "Criar sua conta", passos: ["Na tela “Crie sua conta”, digite nome completo, e-mail e senha.", "A senha precisa ter no mínimo 8 caracteres.", "Abra seu e-mail e copie o código recebido.", "Digite o código em “Verifique seu e-mail”."] },
  { titulo: "Entrar de novo", passos: ["Na tela “Bem-vinda de volta”, digite e-mail e senha.", "Ou toque em “Continuar com Google”.", "Esqueceu a senha? Toque em “Esqueci minha senha”."] },
];

export function Login() {
  return (
    <Pagina>
      <TituloSecao numero="Tela extra" titulo="Entrar e criar conta" resumo="Sua conta guarda seus estudos para você acessar de qualquer aparelho." />
      <div className="grid grid-cols-2 gap-5">
        <Tela titulo="Bem-vinda de volta">
          <div className="guia-cartao relative p-2 text-center text-[10px]">Continuar com Google <Marca n={1} className="-right-1 -top-2" /></div>
          <div className="relative space-y-1 text-[10px]">
            <div className="guia-cartao p-1.5">E-mail</div><div className="guia-cartao p-1.5">Senha</div>
            <Marca n={2} className="-right-1 -top-2" />
          </div>
          <div className="relative text-right text-[10px] underline">Esqueci minha senha <Marca n={3} className="-left-1 -top-1" /></div>
          <div className="guia-botao relative justify-center text-[10px]">Entrar <Marca n={4} className="-right-1 -top-2" /></div>
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
        <CaixaDica>Mensagens comuns: “Preencha o e-mail e a senha.”, “E-mail ou senha incorretos.” e “Código inválido ou expirado.” (peça um código novo).</CaixaDica>
        <CaixaAtencao titulo="Seu acesso expirou">O teste gratuito dura 30 dias. Depois, aparece a tela “Seu acesso expirou” com o botão “Renovar acesso”. O primeiro login precisa de internet.</CaixaAtencao>
      </div>
    </Pagina>
  );
}
