import { createFileRoute } from "@tanstack/react-router";
import { UnitPage, type UnitData } from "@/components/site/UnitPage";

const data: UnitData = {
  name: "Unidade Praia da Costa",
  tag: "Nossa irmã à beira-mar",
  address: "Rua Rio Branco, 97, Praia da Costa",
  city: "Vila Velha, ES · CEP 29101-130",
  hours: "Segunda a sábado, das 7h30 às 20h. Domingos das 8h às 18h.",
  whatsapp: "https://wa.me/5527999999998",
  maps: "https://maps.google.com/?q=Rua+Rio+Branco+97+Praia+da+Costa+Vila+Velha",
  instagram: "https://instagram.com/colherdepaucafeteriabistro",
  about:
    "A irmã caçula nasceu para receber quem vive a orla. Próxima à praia, mantém a alma da casa mãe com um menu adaptado ao ritmo do bairro: cafés rápidos, sanduíches autorais e doces para levar ou saborear na varanda.",
  highlights: [
    { title: "Grab & Go", desc: "Cafés especiais, croissants e doces para levar a caminho da praia." },
    { title: "Sanduíches autorais", desc: "Toasts de fermentação natural com recheios criados pela chef Samira." },
    { title: "Encomendas locais", desc: "Bolos inteiros, naked cakes e cestas de café da manhã com retirada no bairro." },
  ],
};

export const Route = createFileRoute("/praia-da-costa")({
  head: () => ({
    meta: [
      { title: "Colher de Pau Praia da Costa · Cafeteria & Bistrô" },
      { name: "description", content: "A unidade da Praia da Costa traz cafés especiais, sanduíches autorais e confeitaria artesanal a poucos passos do mar." },
      { property: "og:title", content: "Colher de Pau Praia da Costa" },
      { property: "og:description", content: "Cafés rápidos, doces para levar e encomendas a poucos passos da orla." },
    ],
  }),
  component: () => <UnitPage data={data} />,
});
