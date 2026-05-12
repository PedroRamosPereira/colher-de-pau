import { Link } from "@tanstack/react-router";
import { MapPin, Clock, ArrowLeft, PawPrint } from "lucide-react";
import { useUnit } from "@/context/UnitContext";
import { Reveal } from "./Reveal";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MenuSection } from "./Menu";
import { Recommendations } from "./Recommendations";
import { Orders } from "./Orders";
import { UnitQuickActions } from "./UnitQuickActions";
import logo from "@/assets/logo.png";

export function UnitPage() {
  const { unit } = useUnit();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="top" className="relative">
          <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 pb-8 pt-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-14 lg:pt-14">
            <div className="lg:col-span-6">
              <Link
                to="/"
                className="mb-4 inline-flex items-center gap-2 text-sm text-caramel hover:underline sm:mb-6"
              >
                <ArrowLeft className="h-4 w-4" /> Voltar para a página inicial
              </Link>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-caramel sm:mb-5">
                {unit.tag}
              </p>
              <h1 className="font-serif text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
                {unit.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                {unit.about}
              </p>

              <div className="mt-6 space-y-3 text-foreground/85 sm:mt-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-caramel mt-0.5 shrink-0" />
                  <div>
                    <p>{unit.address}</p>
                    <p className="text-sm text-muted-foreground">{unit.city}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-caramel mt-0.5 shrink-0" />
                  <p>{unit.hours}</p>
                </div>
                {unit.petFriendly && (
                  <div className="flex items-start gap-3">
                    <PawPrint className="h-5 w-5 text-caramel mt-0.5 shrink-0" />
                    <p>Casa pet friendly: traga seu melhor amigo.</p>
                  </div>
                )}
              </div>

              <div className="mt-7 sm:mt-10">
                <UnitQuickActions unit={unit} mode="menu-only" />
              </div>
            </div>

            <Reveal className="lg:col-span-6">
              <div className="relative arch-image aspect-[4/5] shadow-2xl">
                <img src={unit.image} alt={unit.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-bistro/55 via-bistro/10 to-transparent" />
                <img
                  src={logo}
                  alt=""
                  aria-hidden
                  className="absolute top-6 right-6 h-24 w-24 object-contain drop-shadow-2xl"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <Recommendations />

        <section className="bg-accent/40 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <p className="uppercase text-xs tracking-[0.3em] text-caramel mb-5">
                Destaques desta casa
              </p>
              <h2 className="font-serif text-4xl md:text-5xl">
                O que você encontra nesta unidade.
              </h2>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {unit.highlights.map((h, i) => (
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
        <MenuSection />
        <Orders unitName={unit.shortName} whatsappHref={unit.whatsapp} />
      </main>
      <Footer />
    </div>
  );
}
