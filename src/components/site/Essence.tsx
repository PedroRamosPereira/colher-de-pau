import essenceImg from "@/assets/essence.jpg";
import { PawPrint, Coffee, Moon, Info } from "lucide-react";
import { Reveal } from "./Reveal";

const rituals = [
  { icon: Coffee, title: "Café da Rainha", text: "Uma manhã generosa, servida com docinhos da casa, frutas frescas e o pão do dia." },
  { icon: Moon, title: "After Coffee", text: "Quando a tarde se inclina, a casa muda de tom: luz baixa, taças e pratos compartilháveis." },
  { icon: PawPrint, title: "Pet Friendly", text: "Suas varandas recebem com carinho a sua companhia de quatro patas." },
];

export function Essence() {
  return (
    <section id="essencia" className="relative py-24 lg:py-32 grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
        <Reveal className="lg:col-span-5 lg:col-start-1 order-2 lg:order-1">
          <div className="arch-image aspect-[3/4] shadow-xl">
            <img src={essenceImg} alt="Cantinho da Colher de Pau" className="h-full w-full object-cover" loading="lazy" width={1000} height={1400} />
          </div>
        </Reveal>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <Reveal>
            <p className="uppercase text-xs tracking-[0.3em] text-caramel mb-5">A Essência</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground">
              Afeto, cuidado e acolhimento — <em className="text-caramel">eis o nosso ofício.</em>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Fundada em 2017 por Samira Norbim, a Colher de Pau nasceu para ser um refúgio.
              Um cantinho de Paris em Vila Velha onde o tempo se demora, o pão de fermentação
              natural perfuma o ar e cada gesto é desenhado para você desacelerar.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {rituals.map((r, i) => (
              <Reveal key={r.title} delay={0.1 * i}>
                <div className="rounded-2xl border border-border bg-card p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <r.icon className="h-6 w-6 text-caramel" />
                  <h3 className="mt-4 font-serif text-xl">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 flex gap-4 rounded-2xl bg-accent/60 border border-border p-5">
              <Info className="h-5 w-5 text-caramel shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/80 leading-relaxed">
                <span className="font-medium">Um lembrete delicado:</span> tudo é preparado de forma artesanal.
                Em finais de semana movimentados, alguns pratos pedem o tempo que a alta qualidade exige.
                Aproveite para <em>desacelerar</em> — vale cada minuto.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
