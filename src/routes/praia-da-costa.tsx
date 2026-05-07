import { createFileRoute } from "@tanstack/react-router";
import { UnitPage } from "@/components/site/UnitPage";
import { UnitProvider } from "@/context/UnitContext";
import { getUnit } from "@/data/units";

const data = getUnit("praia-da-costa");

export const Route = createFileRoute("/praia-da-costa")({
  head: () => ({
    meta: [
      { title: "Colher de Pau Praia da Costa · Cafeteria & Bistrô" },
      { name: "description", content: "A unidade da Praia da Costa traz cafés especiais, sanduíches autorais e confeitaria artesanal a poucos passos do mar." },
      { property: "og:title", content: "Colher de Pau Praia da Costa" },
      { property: "og:description", content: "Cafés rápidos, doces para levar e encomendas a poucos passos da orla." },
    ],
  }),
  component: () => (
    <UnitProvider defaultSlug="praia-da-costa">
      <UnitPage data={data} />
    </UnitProvider>
  ),
});
