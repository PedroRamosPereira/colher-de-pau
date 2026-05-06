import { Reveal } from "./Reveal";
import cakesImg from "@/assets/cakes.jpg";
import empanadaImg from "@/assets/empanada.jpg";
import coffeeImg from "@/assets/coffee.jpg";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

type Pick = { name: string; desc: string; price: string; image: string; tag: string };

// 7 curadorias — uma para cada dia da semana, garantindo variedade
const weekly: Pick[][] = [
  // Domingo
  [
    { tag: "Brunch do dia", name: "Brunch Colher de Pau", desc: "Cesta de pães, waffle, ovos com bacon, cafés filtrados e 2 sucos de laranja.", price: "R$ 138", image: empanadaImg },
    { tag: "Doce do dia", name: "Brownie Bowl", desc: "Brownie quente, 2 bolas de sorvete, morangos, nutella e calda.", price: "R$ 41", image: cakesImg },
    { tag: "Café do dia", name: "Cappuccino Colher de Pau", desc: "Espresso, leite vaporizado e marshmallow tostado.", price: "R$ 33", image: coffeeImg },
  ],
  // Segunda
  [
    { tag: "Quentinho da semana", name: "Chocolate Colher de Pau", desc: "Chocolate cremoso com marshmallow tostado.", price: "R$ 30", image: coffeeImg },
    { tag: "Doce do dia", name: "Bolo da Tarde", desc: "Bolo da vovó — consultar sabores da vitrine.", price: "R$ 22", image: cakesImg },
    { tag: "Salgado do dia", name: "Croissant Caprese", desc: "Folhado com tomate, muçarela e manjericão fresco.", price: "—", image: empanadaImg },
  ],
  // Terça
  [
    { tag: "Brunch do dia", name: "Brunch Individual", desc: "Croissant, ovos mexidos, bacon, tomate confit, cream cheese + mimosa.", price: "R$ 68", image: empanadaImg },
    { tag: "Café do dia", name: "Hario V60", desc: "Coado especial 200ml, perfil floral e adocicado.", price: "R$ 20", image: coffeeImg },
    { tag: "Doce do dia", name: "Croissant Banoffee", desc: "Doce de leite, banana e chantilly.", price: "R$ 38", image: cakesImg },
  ],
  // Quarta
  [
    { tag: "Brunch do dia", name: "Brunch Samira", desc: "Waffle com nutella e morango, panquecas, toast e café filtrado.", price: "R$ 105", image: empanadaImg },
    { tag: "Refrescante", name: "MaraCoffee", desc: "Geleia de maracujá, água tônica, gelo e espresso.", price: "R$ 28", image: coffeeImg },
    { tag: "Doce do dia", name: "Trio de Bolos", desc: "Três sabores clássicos com calda — para compartilhar.", price: "R$ 70", image: cakesImg },
  ],
  // Quinta
  [
    { tag: "Sugestão da Chef", name: "Croissant Pistache", desc: "Recheado com brigadeiro de pistache.", price: "R$ 49", image: cakesImg },
    { tag: "Café do dia", name: "Latte Macchiato", desc: "Leite vaporizado com espresso encorpado.", price: "R$ 17", image: coffeeImg },
    { tag: "Salgado do dia", name: "Toast Samira", desc: "Pão de fermentação natural com cream cheese, ovos e bacon.", price: "—", image: empanadaImg },
  ],
  // Sexta
  [
    { tag: "Sexta-feira pede", name: "Aperol Spritz", desc: "Aperol, água com gás, champagne e toque de laranja.", price: "R$ 38", image: coffeeImg },
    { tag: "Doce do dia", name: "Chocolatudo", desc: "Bolo de chocolate quente com brigadeiro e calda de baunilha.", price: "R$ 45", image: cakesImg },
    { tag: "Salgado do dia", name: "Croissant Gruyère", desc: "Queijo gruyère, presunto royale e bechamel da casa, gratinado.", price: "—", image: empanadaImg },
  ],
  // Sábado
  [
    { tag: "Brunch do dia", name: "Bowl 2", desc: "Croissant na chapa com requeijão, ovos, tomate confit, bacon + suco.", price: "R$ 59", image: empanadaImg },
    { tag: "Refrescante", name: "Pink Lemonade", desc: "Hibisco e frutas vermelhas.", price: "R$ 24", image: coffeeImg },
    { tag: "Doce do dia", name: "Waffle Apple Pie", desc: "Strudel de maçã com canela e sorvete.", price: "R$ 39", image: cakesImg },
  ],
];

const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

export function Recommendations() {
  const today = new Date().getDay();
  const picks = weekly[today];
  const dayName = days[today];

  return (
    <section id="recomendacoes" className="py-24 lg:py-32 bg-cream/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="uppercase text-xs tracking-[0.3em] text-caramel mb-5 inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" /> Recomendações do dia · {dayName}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl">A curadoria de hoje, feita para você.</h2>
              <p className="mt-5 text-muted-foreground text-lg">
                Nossa Chef Samira seleciona, todos os dias, três pequenas obras para começarem o seu dia. Volte amanhã para uma nova combinação.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="outline" className="rounded-full border-caramel/40 text-caramel hover:bg-caramel hover:text-primary-foreground">
                <a href="/cardapio.pdf" target="_blank" rel="noopener">Ver cardápio completo</a>
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {picks.map((p, i) => (
            <Reveal key={p.name} delay={0.1 * i}>
              <div className="group rounded-3xl overflow-hidden bg-card border border-border h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-caramel">{p.tag}</p>
                  <div className="mt-2 flex items-baseline justify-between gap-3">
                    <h3 className="font-serif text-2xl">{p.name}</h3>
                    <span className="text-caramel font-medium whitespace-nowrap">{p.price}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
