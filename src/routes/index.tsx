import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Essence } from "@/components/site/Essence";
import { MenuSection } from "@/components/site/Menu";
import { Houses } from "@/components/site/Houses";
import { Orders } from "@/components/site/Orders";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Colher de Pau · Cafeteria & Bistrô em Vila Velha" },
      { name: "description", content: "Um cantinho de Paris em Vila Velha — ES. Cafeteria especializada, confeitaria artesanal e bistrô de fermentação natural desde 2017." },
      { property: "og:title", content: "Colher de Pau · Cafeteria & Bistrô" },
      { property: "og:description", content: "Experiências gastronômicas com afeto, em Itaparica e Praia da Costa." },
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
        <MenuSection />
        <Houses />
        <Orders />
      </main>
      <Footer />
    </div>
  );
}
