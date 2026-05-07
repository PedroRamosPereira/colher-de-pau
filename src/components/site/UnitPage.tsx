import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Instagram, Clock, ArrowLeft, ExternalLink, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MenuSection } from "./Menu";
import { Recommendations } from "./Recommendations";
import heroImg from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";
import type { Unit } from "@/data/units";

export function UnitPage({ data }: { data: Unit }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-20 lg:pt-20 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-caramel hover:underline mb-6">
                <ArrowLeft className="h-4 w-4" /> Voltar à página inicial
              </Link>
              <p className="uppercase text-xs tracking-[0.3em] text-caramel mb-5">{data.tag}</p>
              <h1 className="font-serif text-5xl md:text-6xl leading-[1.05]">{data.name}</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{data.about}</p>

              <div className="mt-8 space-y-3 text-foreground/85">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-caramel mt-0.5 shrink-0" />
                  <div>
                    <p>{data.address}</p>
                    <p className="text-sm text-muted-foreground">{data.city}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-caramel mt-0.5 shrink-0" />
                  <p>{data.hours}</p>
                </div>
                <div className="flex items-start gap-3">
                  <PawPrint className="h-5 w-5 text-caramel mt-0.5 shrink-0" />
                  <p>{data.petFriendly ? "Casa pet friendly, traga seu melhor amigo." : "Esta casa não recebe pets, ideal para grab & go."}</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-caramel hover:bg-bistro text-primary-foreground">
                  <a href={data.whatsapp} target="_blank" rel="noopener">
                    <MessageCircle className="h-4 w-4 mr-1" /> WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-foreground/20">
                  <a href={data.maps} target="_blank" rel="noopener">
                    <MapPin className="h-4 w-4 mr-1" /> Rota no Maps
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-caramel/40 text-caramel hover:bg-caramel hover:text-primary-foreground">
                  <a href={data.cardapioPdf} target="_blank" rel="noopener">Cardápio em PDF</a>
                </Button>
                {data.ifood && (
                  <Button asChild className="rounded-full bg-[#EA1D2C] hover:bg-[#c8121f] text-white">
                    <a href={data.ifood} target="_blank" rel="noopener">
                      Pedir no iFood <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                )}
                <Button asChild variant="outline" className="rounded-full">
                  <a href={data.instagram} target="_blank" rel="noopener">
                    <Instagram className="h-4 w-4 mr-1" /> Instagram
                  </a>
                </Button>
              </div>
            </div>

            <Reveal className="lg:col-span-6">
              <div className="relative arch-image aspect-[4/5] shadow-2xl">
                <img src={heroImg} alt={data.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-bistro/55 via-bistro/10 to-transparent" />
                <img src={logo} alt="" aria-hidden className="absolute top-6 right-6 h-24 w-24 object-contain drop-shadow-2xl" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-accent/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <p className="uppercase text-xs tracking-[0.3em] text-caramel mb-5">Destaques desta casa</p>
              <h2 className="font-serif text-4xl md:text-5xl">O que essa unidade faz com excelência.</h2>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {data.highlights.map((h, i) => (
                <Reveal key={h.title} delay={0.08 * i}>
                  <div className="rounded-2xl border border-border bg-card p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <h3 className="font-serif text-xl">{h.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Recommendations />
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}
