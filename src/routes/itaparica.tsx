import { createFileRoute } from "@tanstack/react-router";
import { UnitPage, type UnitData } from "@/components/site/UnitPage";

const data: UnitData = {
  name: "Unidade Praia de Itaparica",
  tag: "A casa mãe, desde 2017",
  address: "Rua Ibitirama, 253, Praia de Itaparica",
  city: "Vila Velha, ES · CEP 29102-130",
  hours: "Terça a domingo, das 8h às 19h. After Coffee às sextas e sábados.",
  whatsapp: "https://wa.me/5527999999999",
  maps: "https://maps.google.com/?q=Rua+Ibitirama+253+Praia+de+Itaparica+Vila+Velha",
  ifood: "https://www.ifood.com.br/delivery/vila-velha-es/colher-de-pau",
  instagram: "https://instagram.com/colherdepaucafeteriabistro",
  about:
    "Onde tudo começou. A unidade de Itaparica é a casa que viu Samira Norbim transformar a cafeteria em um pedacinho de Paris no litoral capixaba. Pão de fermentação natural, confeitaria autoral e cafés especiais servidos em uma varanda pet friendly.",
  highlights: [
    { title: "Café da Rainha", desc: "Manhã generosa com cesta de pães, frutas frescas, ovos e cafés filtrados." },
    { title: "Confeitaria autoral", desc: "Bolos da vovó, croissants recheados e o famoso Brownie Bowl." },
    { title: "After Coffee", desc: "Nas sextas e sábados, a casa muda de tom: luz baixa, taças e pratos de compartilhar." },
  ],
};

export const Route = createFileRoute("/itaparica")({
  head: () => ({
    meta: [
      { title: "Colher de Pau Itaparica · Cafeteria & Bistrô em Vila Velha" },
      { name: "description", content: "A casa mãe da Colher de Pau na Praia de Itaparica. Café da Rainha, confeitaria autoral e After Coffee." },
      { property: "og:title", content: "Colher de Pau Itaparica" },
      { property: "og:description", content: "Pão de fermentação natural, cafés especiais e confeitaria artesanal na Praia de Itaparica." },
    ],
  }),
  component: () => <UnitPage data={data} />,
});
