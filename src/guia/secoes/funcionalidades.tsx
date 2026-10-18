import { WifiOff, Cloud, Users, Smartphone, Palette, Bell } from "lucide-react";
import { Pagina, TituloSecao, CaixaDica } from "../componentes";

const itens = [
  { icone: WifiOff, titulo: "Funciona sem internet", texto: "Seus flashcards, erros e estudos ficam salvos no aparelho. Você pode estudar offline. PDFs só abrem offline se você tocou em “Disponível offline” antes." },
  { icone: Cloud, titulo: "Cópia na nuvem", texto: "Quando há internet, o app envia seus dados para a nuvem. Assim eles aparecem em outros aparelhos. Ao sincronizar, aparece “Sincronização concluída” ou “Falha ao sincronizar”." },
  { icone: Users, titulo: "Compartilhar com amigas", texto: "Em Comunidade, convide amigas por e-mail. Vocês podem compartilhar pastas, PDFs, listas e simulados, e cada uma copia o que quiser para si." },
  { icone: Smartphone, titulo: "Instalar no celular", texto: "O app pode ser instalado na tela inicial e abre como um aplicativo, sem a barra do navegador. Use a opção “Adicionar à tela inicial” do navegador (confirmar o caminho em cada celular)." },
  { icone: Palette, titulo: "Tema claro ou escuro", texto: "Em Ajustes, escolha o tema escuro (padrão) ou claro. A escolha fica salva na sua conta." },
  { icone: Bell, titulo: "Avisos e alarmes", texto: "O app pode mostrar avisos do navegador, se você permitir. O alarme do Pomodoro funciona mesmo offline (confirmar quais avisos existem)." },
];

export function Funcionalidades() {
  return (
    <Pagina>
      <TituloSecao numero="Parte 3" titulo="Funcionalidades gerais" resumo="Recursos que valem para o app inteiro, em qualquer aba." />
      <div className="grid grid-cols-2 gap-3">
        {itens.map(({ icone: I, titulo, texto }) => (
          <div key={titulo} className="guia-cartao p-3">
            <div className="flex items-center gap-2 font-bold"><I className="h-4 w-4 text-guia-destaque" />{titulo}</div>
            <p className="mt-1.5 text-xs">{texto}</p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <CaixaDica>Antes de trocar de aparelho, abra o app com internet e espere a sincronização terminar. Assim nada fica só no aparelho antigo.</CaixaDica>
      </div>
    </Pagina>
  );
}
