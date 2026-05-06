import { MapPin, MessageCircle, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const houses = [
  {
    name: "Unidade Praia de Itaparica",
    address: "Rua Ibitirama, 253 — Praia de Itaparica",
    city: "Vila Velha — ES · CEP 29102-130",
    tag: "A casa mãe",
  },
  {
    name: "Unidade Praia da Costa",
    address: "Rua Rio Branco, 97 — Praia da Costa",
    city: "Vila Velha — ES · CEP 29101-130",
    tag: "Nossa irmã à beira-mar",
  },
];

export function Houses() {
  return (
    <section id="casas" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="uppercase text-xs tracking-[0.3em] text-caramel mb-5">Nossas Casas</p>
            <h2 className="font-serif text-4xl md:text-5xl">Duas moradas, a mesma alma.</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Escolha o cantinho mais próximo de você. Nós cuidamos do resto.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {houses.map((h, i) => (
            <Reveal key={h.name} delay={0.1 * i}>
              <div className="rounded-3xl border border-border bg-card p-8 lg:p-10 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <p className="text-xs uppercase tracking-[0.25em] text-caramel">{h.tag}</p>
                <h3 className="mt-3 font-serif text-3xl">{h.name}</h3>
                <div className="mt-6 flex items-start gap-3 text-foreground/80">
                  <MapPin className="h-5 w-5 text-caramel mt-0.5 shrink-0" />
                  <div>
                    <p>{h.address}</p>
                    <p className="text-sm text-muted-foreground">{h.city}</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button className="rounded-full bg-caramel hover:bg-bistro text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <MessageCircle className="h-4 w-4 mr-1" /> WhatsApp
                  </Button>
                  <Button variant="outline" className="rounded-full border-foreground/20">
                    <MapPin className="h-4 w-4 mr-1" /> Rota no Maps
                  </Button>
                </div>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm text-caramel hover:underline">
                  <Compass className="h-4 w-4" /> Realizar o Tour Virtual 360º
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
