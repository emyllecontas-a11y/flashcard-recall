import { createFileRoute } from "@tanstack/react-router";
import { GuiaPage } from "@/guia";

export const Route = createFileRoute("/guia")({
  head: () => ({
    meta: [
      { title: "Guia visual do RevisaFlash" },
      { name: "description", content: "Guia em PDF com todas as abas, funções e limitações do RevisaFlash." },
      { property: "og:title", content: "Guia visual do RevisaFlash" },
      { property: "og:description", content: "Todas as abas, funções e limitações do RevisaFlash." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: GuiaPage,
});
