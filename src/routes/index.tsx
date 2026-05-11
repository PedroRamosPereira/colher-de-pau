import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Essence } from "@/components/site/Essence";
import { Houses } from "@/components/site/Houses";
import { Orders } from "@/components/site/Orders";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Colher de Pau · Cafeteria e Bistrô em Vila Velha" },
      {
        name: "description",
        content:
          "Cafeteria, confeitaria artesanal e bistrô em Vila Velha. Desde 2017, a Colher de Pau recebe você com fermentação natural, afeto e clima de Paris.",
      },
      { property: "og:title", content: "Colher de Pau · Cafeteria e Bistrô" },
      {
        property: "og:description",
        content:
          "Cafés especiais, confeitaria artesanal e bistrô com afeto em Itaparica e Praia da Costa.",
      },
      { property: "og:image", content: "/og-preview.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Colher de Pau Cafeteria e Bistrô" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-preview.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Essence />
        <Houses />
        <Orders />
      </main>
      <Footer />
    </div>
  );
}
