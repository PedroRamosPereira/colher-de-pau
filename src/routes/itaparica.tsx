import { createFileRoute } from "@tanstack/react-router";
import { UnitPage } from "@/components/site/UnitPage";
import { UnitProvider } from "@/context/UnitContext";

export const Route = createFileRoute("/itaparica")({
  head: () => ({
    meta: [
      { title: "Colher de Pau Itaparica · Cafeteria e Bistrô em Vila Velha" },
      {
        name: "description",
        content:
          "A casa mãe da Colher de Pau na Praia de Itaparica, com Café da Rainha, confeitaria autoral e After Coffee.",
      },
      { property: "og:title", content: "Colher de Pau Itaparica" },
      {
        property: "og:description",
        content:
          "Pães de fermentação natural, cafés especiais e confeitaria artesanal na Praia de Itaparica.",
      },
      { property: "og:image", content: "/og-itaparica.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <UnitProvider defaultSlug="itaparica">
      <UnitPage />
    </UnitProvider>
  ),
});
