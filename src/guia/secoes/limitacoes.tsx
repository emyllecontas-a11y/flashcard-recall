import { Pagina, TituloSecao, TabelaLimitacoes, type Limitacao } from "../componentes";

const linhas: Limitacao[] = [
  { limitacao: "O primeiro login precisa de internet.", porque: "O app confirma sua conta na nuvem.", fazer: "Entre uma vez com internet; depois dá para estudar offline." },
  { limitacao: "PDF não baixado não abre offline.", porque: "O arquivo fica na nuvem até você baixá-lo.", fazer: "Em Conteúdo, toque em “Disponível offline” antes de sair da internet." },
  { limitacao: "Baixar PDFs exige internet.", porque: "O download vem da nuvem.", fazer: "Se aparecer “Verifique sua conexão”, tente de novo com internet." },
  { limitacao: "Alterações feitas offline demoram a aparecer em outro aparelho.", porque: "Só são enviadas quando a internet volta.", fazer: "Abra o app com internet e espere “Sincronização concluída”." },
  { limitacao: "Imagem em questão: até 2 MB, só JPG, PNG ou WebP.", porque: "Arquivos grandes deixam o app lento.", fazer: "Diminua ou recorte a imagem antes de enviar." },
  { limitacao: "Plano de estudos só importa planilha .xlsx.", porque: "O app lê o modelo de Excel.", fazer: "Baixe o modelo, preencha e salve como Excel." },
  { limitacao: "Comparar no máximo 5 simulados.", porque: "Limite da tela de estatísticas.", fazer: "Escolha os 5 mais importantes." },
  { limitacao: "Alguns PDFs podem falhar ao copiar de uma amiga.", porque: "Falha no download do arquivo.", fazer: "Tente copiar de novo os que faltaram." },
  { limitacao: "Teste gratuito de 30 dias.", porque: "Depois disso o acesso expira.", fazer: "Toque em “Renovar acesso”." },
  { limitacao: "Excluir conta ou plano não tem volta.", porque: "Os dados são apagados.", fazer: "Faça antes o “Backup dos dados” em Ajustes." },
];

export function Limitacoes() {
  return (
    <Pagina>
      <TituloSecao numero="Parte 3" titulo="Limitações gerais" resumo="O que o app ainda não faz, por quê, e como contornar." />
      <TabelaLimitacoes linhas={linhas} />
    </Pagina>
  );
}
