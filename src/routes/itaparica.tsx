import { createFileRoute } from "@tanstack/react-router";
import { UnitPage } from "@/components/site/UnitPage";
import { UnitProvider } from "@/context/UnitContext";
import { getUnit } from "@/data/units";

const data = getUnit("itaparica");

export const Route = createFileRoute("/itaparica")({
  head: () => ({
    meta: [
      { title: "Colher de Pau Itaparica · Cafeteria & Bistrô em Vila Velha" },
      { name: "description", content: "A casa mãe da Colher de Pau na Praia de Itaparica. Café da Rainha, confeitaria autoral e After Coffee." },
      { property: "og:title", content: "Colher de Pau Itaparica" },
      { property: "og:description", content: "Pão de fermentação natural, cafés especiais e confeitaria artesanal na Praia de Itaparica." },
    ],
  }),
  component: () => (
    <UnitProvider defaultSlug="itaparica">
      <UnitPage data={data} />
    </UnitProvider>
  ),
});
