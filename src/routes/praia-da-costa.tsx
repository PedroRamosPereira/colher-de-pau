import { createFileRoute } from "@tanstack/react-router";
import { UnitPage } from "@/components/site/UnitPage";
import { UnitProvider } from "@/context/UnitContext";

export const Route = createFileRoute("/praia-da-costa")({
  head: () => ({
    meta: [
      { title: "Colher de Pau Praia da Costa · Cafeteria e Bistrô" },
      {
        name: "description",
        content:
          "A Colher de Pau Praia da Costa recebe você com cafés especiais, sanduíches autorais e confeitaria artesanal a poucos passos do mar.",
      },
      { property: "og:title", content: "Colher de Pau Praia da Costa" },
      {
        property: "og:description",
        content: "Cafés especiais, doces para levar e encomendas a poucos passos da orla.",
      },
      { property: "og:image", content: "/og-praia-da-costa.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <UnitProvider defaultSlug="praia-da-costa">
      <UnitPage />
    </UnitProvider>
  ),
});
