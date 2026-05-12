import { Link } from "@tanstack/react-router";
import { MapPin, ArrowRight, PawPrint, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { units } from "@/data/units";
import { brandUnitRoutes } from "@/data/brand";

export function Houses() {
  return (
    <section id="casas" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="uppercase text-xs tracking-[0.3em] text-caramel mb-5">Nossas Casas</p>
            <h2 className="font-serif text-4xl md:text-5xl">Duas casas, o mesmo cuidado.</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Cada casa tem cardápio, horário e iFood próprios. Escolha uma unidade para ver rota,
              detalhes e sugestões antes da visita.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {units.map((h, i) => {
            return (
              <Reveal key={h.slug} delay={0.1 * i}>
                <div className="rounded-3xl border border-border bg-card p-8 lg:p-10 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-7 aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                    <img
                      src={h.image}
                      alt={h.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-caramel">{h.tag}</p>
                    {h.petFriendly && (
                      <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-caramel border border-caramel/30 rounded-full px-2 py-1">
                        <PawPrint className="h-3 w-3" /> Pet friendly
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 font-serif text-3xl">{h.name}</h3>
                  <div className="mt-6 space-y-3 text-foreground/80">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-caramel mt-0.5 shrink-0" />
                      <div>
                        <p>{h.address}</p>
                        <p className="text-sm text-muted-foreground">{h.city}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-caramel mt-0.5 shrink-0" />
                      <p className="text-sm">{h.hours}</p>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="rounded-full bg-caramel text-primary-foreground hover:bg-bistro"
                    >
                      <Link to={brandUnitRoutes[h.slug]}>
                        Ver a casa <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-caramel/40 text-caramel hover:bg-caramel hover:text-primary-foreground"
                    >
                      <a href={h.maps} target="_blank" rel="noopener">
                        Como chegar
                      </a>
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
