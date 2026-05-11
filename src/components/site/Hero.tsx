import heroImg from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generalOrdersHref } from "@/data/brand";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-32 lg:pt-20">
        <div className="lg:col-span-6 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs uppercase tracking-[0.3em] text-caramel sm:mb-6"
          >
            Cafeteria e bistrô desde 2017, em Vila Velha
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Um cantinho de <em className="text-caramel">afeto</em> para saborear sem pressa.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg"
          >
            Desde 2017, a Colher de Pau recebe você com cafés especiais, confeitaria artesanal e
            pratos de bistrô em duas casas de Vila Velha, com o charme de um cantinho de Paris.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-7 max-w-2xl sm:mt-10"
          >
            <p className="mb-4 max-w-xl text-sm leading-6 text-foreground/75 sm:mb-5 sm:text-base sm:leading-7">
              Escolha a casa que combina com o seu momento ou fale com a gente para encomendas,
              cestas e celebrações.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-caramel px-6 text-primary-foreground hover:bg-bistro"
              >
                <a href="#casas">
                  Conhecer as casas <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-caramel/40 px-6 text-caramel hover:bg-caramel hover:text-primary-foreground"
              >
                <a href={generalOrdersHref}>
                  <MessageCircle className="h-4 w-4" /> Pedir encomenda
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative arch-image aspect-[4/5] shadow-2xl">
            <img
              src={heroImg}
              alt="Interior acolhedor da Colher de Pau"
              className="h-full w-full object-cover"
              width={1600}
              height={1200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bistro/55 via-bistro/10 to-transparent" />
            <img
              src={logo}
              alt=""
              aria-hidden
              className="absolute top-6 right-6 h-20 w-20 md:h-28 md:w-28 object-contain drop-shadow-2xl opacity-95"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
