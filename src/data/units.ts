import cakesImg from "@/assets/cakes.jpg";
import empanadaImg from "@/assets/empanada.jpg";
import coffeeImg from "@/assets/coffee.jpg";

export type MenuItem = {
  name: string;
  desc: string;
  price?: string;
  image: string;
  category: "confeitaria" | "bistro" | "cafeteria";
};

export type WeeklyPick = {
  tag: string;
  name: string;
  desc: string;
  price: string;
  image: string;
};

export type Unit = {
  slug: "itaparica" | "praia-da-costa";
  name: string;
  shortName: string;
  tag: string;
  address: string;
  city: string;
  hours: string;
  petFriendly: boolean;
  whatsapp: string;
  maps: string;
  ifood?: string;
  instagram: string;
  cardapioPdf: string;
  about: string;
  highlights: { title: string; desc: string }[];
  menu: MenuItem[];
  weekly: WeeklyPick[][]; // 7 dias (Domingo..Sábado), 3 indicações cada
};

const itaparica: Unit = {
  slug: "itaparica",
  name: "Unidade Praia de Itaparica",
  shortName: "Itaparica",
  tag: "A casa mãe, desde 2017",
  address: "Rua Ibitirama, 253, Praia de Itaparica",
  city: "Vila Velha, ES · CEP 29102-130",
  hours: "Terça a domingo, das 8h às 19h. After Coffee às sextas e sábados.",
  petFriendly: true,
  whatsapp: "https://wa.me/5527999999999",
  maps: "https://maps.google.com/?q=Rua+Ibitirama+253+Praia+de+Itaparica+Vila+Velha",
  ifood: "https://www.ifood.com.br/delivery/vila-velha-es/colher-de-pau-itaparica",
  instagram: "https://instagram.com/colherdepaucafeteriabistro",
  cardapioPdf: "/cardapio.pdf",
  about:
    "Onde tudo começou. A unidade de Itaparica é a casa que viu Samira Norbim transformar a cafeteria em um pedacinho de Paris no litoral capixaba. Pão de fermentação natural, confeitaria autoral e cafés especiais servidos em uma varanda pet friendly.",
  highlights: [
    { title: "Café da Rainha", desc: "Manhã generosa com cesta de pães, frutas frescas, ovos e cafés filtrados." },
    { title: "Confeitaria autoral", desc: "Bolos da vovó, croissants recheados e o famoso Brownie Bowl." },
    { title: "After Coffee", desc: "Nas sextas e sábados, a casa muda de tom: luz baixa, taças e pratos de compartilhar." },
  ],
  menu: [
    { name: "Trio de Bolos", desc: "Três bolos do dia, fatias generosas para compartilhar.", price: "R$ 70", image: cakesImg, category: "confeitaria" },
    { name: "Brownie Bowl", desc: "Brownie quente, sorvete, morangos, nutella e calda.", price: "R$ 41", image: cakesImg, category: "confeitaria" },
    { name: "Bolo Pudim", desc: "Duas paixões em uma só fatia, untuoso e aveludado.", price: "R$ 28", image: cakesImg, category: "confeitaria" },
    { name: "Croissant Pistache", desc: "Recheado com brigadeiro de pistache.", price: "R$ 49", image: cakesImg, category: "confeitaria" },
    { name: "Brunch Samira", desc: "Waffle com nutella e morango, panquecas, toast e café filtrado.", price: "R$ 105", image: empanadaImg, category: "bistro" },
    { name: "Croissant com Ovo Poché", desc: "Folhado artesanal, gema corrida e ervas frescas.", price: "R$ 38", image: empanadaImg, category: "bistro" },
    { name: "Quiche de Brie & Damasco", desc: "O contraste perfeito entre o doce e o salgado.", price: "R$ 36", image: empanadaImg, category: "bistro" },
    { name: "Croissant Gruyère", desc: "Queijo gruyère, presunto royale e bechamel da casa, gratinado.", price: "R$ 42", image: empanadaImg, category: "bistro" },
    { name: "Cappuccino Colher de Pau", desc: "Espresso, leite vaporizado e marshmallow tostado.", price: "R$ 33", image: coffeeImg, category: "cafeteria" },
    { name: "Hario V60", desc: "Coado especial 200ml, perfil floral e adocicado.", price: "R$ 20", image: coffeeImg, category: "cafeteria" },
    { name: "MaraCoffee", desc: "Geleia de maracujá, água tônica, gelo e espresso.", price: "R$ 28", image: coffeeImg, category: "cafeteria" },
    { name: "Aperol Spritz", desc: "Aperol, água com gás, champagne e toque de laranja.", price: "R$ 38", image: coffeeImg, category: "cafeteria" },
  ],
  weekly: [
    [
      { tag: "Brunch do dia", name: "Brunch Colher de Pau", desc: "Cesta de pães, waffle, ovos com bacon, cafés filtrados e 2 sucos.", price: "R$ 138", image: empanadaImg },
      { tag: "Doce do dia", name: "Brownie Bowl", desc: "Brownie quente, sorvete, morangos, nutella e calda.", price: "R$ 41", image: cakesImg },
      { tag: "Café do dia", name: "Cappuccino Colher de Pau", desc: "Espresso, leite vaporizado e marshmallow tostado.", price: "R$ 33", image: coffeeImg },
    ],
    [
      { tag: "Quentinho da semana", name: "Chocolate Colher de Pau", desc: "Chocolate cremoso com marshmallow tostado.", price: "R$ 30", image: coffeeImg },
      { tag: "Doce do dia", name: "Bolo da Tarde", desc: "Bolo da vovó, sabores da vitrine.", price: "R$ 22", image: cakesImg },
      { tag: "Salgado do dia", name: "Croissant Caprese", desc: "Folhado com tomate, muçarela e manjericão fresco.", price: "R$ 32", image: empanadaImg },
    ],
    [
      { tag: "Brunch do dia", name: "Brunch Individual", desc: "Croissant, ovos mexidos, bacon, tomate confit, cream cheese e mimosa.", price: "R$ 68", image: empanadaImg },
      { tag: "Café do dia", name: "Hario V60", desc: "Coado especial 200ml, floral e adocicado.", price: "R$ 20", image: coffeeImg },
      { tag: "Doce do dia", name: "Croissant Banoffee", desc: "Doce de leite, banana e chantilly.", price: "R$ 38", image: cakesImg },
    ],
    [
      { tag: "Brunch do dia", name: "Brunch Samira", desc: "Waffle com nutella e morango, panquecas, toast e café filtrado.", price: "R$ 105", image: empanadaImg },
      { tag: "Refrescante", name: "MaraCoffee", desc: "Geleia de maracujá, água tônica, gelo e espresso.", price: "R$ 28", image: coffeeImg },
      { tag: "Doce do dia", name: "Trio de Bolos", desc: "Três sabores clássicos com calda, para compartilhar.", price: "R$ 70", image: cakesImg },
    ],
    [
      { tag: "Sugestão da Chef", name: "Croissant Pistache", desc: "Recheado com brigadeiro de pistache.", price: "R$ 49", image: cakesImg },
      { tag: "Café do dia", name: "Latte Macchiato", desc: "Leite vaporizado com espresso encorpado.", price: "R$ 17", image: coffeeImg },
      { tag: "Salgado do dia", name: "Toast Samira", desc: "Pão de fermentação natural, cream cheese, ovos e bacon.", price: "R$ 36", image: empanadaImg },
    ],
    [
      { tag: "Sexta-feira pede", name: "Aperol Spritz", desc: "Aperol, água com gás, champagne e laranja.", price: "R$ 38", image: coffeeImg },
      { tag: "Doce do dia", name: "Chocolatudo", desc: "Bolo de chocolate quente, brigadeiro e calda de baunilha.", price: "R$ 45", image: cakesImg },
      { tag: "After Coffee", name: "Croissant Gruyère", desc: "Gruyère, presunto royale e bechamel, gratinado.", price: "R$ 42", image: empanadaImg },
    ],
    [
      { tag: "Brunch do dia", name: "Bowl 2", desc: "Croissant na chapa com requeijão, ovos, tomate confit, bacon e suco.", price: "R$ 59", image: empanadaImg },
      { tag: "Refrescante", name: "Pink Lemonade", desc: "Hibisco e frutas vermelhas.", price: "R$ 24", image: coffeeImg },
      { tag: "Doce do dia", name: "Waffle Apple Pie", desc: "Strudel de maçã com canela e sorvete.", price: "R$ 39", image: cakesImg },
    ],
  ],
};

const praiaDaCosta: Unit = {
  slug: "praia-da-costa",
  name: "Unidade Praia da Costa",
  shortName: "Praia da Costa",
  tag: "Nossa irmã à beira-mar",
  address: "Rua Rio Branco, 97, Praia da Costa",
  city: "Vila Velha, ES · CEP 29101-130",
  hours: "Segunda a sábado, das 7h30 às 20h. Domingos das 8h às 18h.",
  petFriendly: false,
  whatsapp: "https://wa.me/5527999999998",
  maps: "https://maps.google.com/?q=Rua+Rio+Branco+97+Praia+da+Costa+Vila+Velha",
  ifood: "https://www.ifood.com.br/delivery/vila-velha-es/colher-de-pau-praia-da-costa",
  instagram: "https://instagram.com/colherdepaucafeteriabistro",
  cardapioPdf: "/cardapio.pdf",
  about:
    "A irmã caçula nasceu para receber quem vive a orla. Próxima à praia, mantém a alma da casa mãe com um menu adaptado ao ritmo do bairro: cafés rápidos, sanduíches autorais e doces para levar ou saborear na varanda.",
  highlights: [
    { title: "Grab & Go", desc: "Cafés especiais, croissants e doces para levar a caminho da praia." },
    { title: "Sanduíches autorais", desc: "Toasts de fermentação natural com recheios criados pela chef Samira." },
    { title: "Encomendas locais", desc: "Bolos inteiros, naked cakes e cestas de café da manhã com retirada no bairro." },
  ],
  menu: [
    { name: "Naked Cake da Casa", desc: "Bolo inteiro com camadas de creme e frutas da estação.", price: "sob consulta", image: cakesImg, category: "confeitaria" },
    { name: "Donuts de Frutas Vermelhas", desc: "Massa fofa, glacê delicado e geleia artesanal.", price: "R$ 18", image: cakesImg, category: "confeitaria" },
    { name: "Cookie Recheado", desc: "Crocante por fora, com recheio cremoso de doce de leite.", price: "R$ 14", image: cakesImg, category: "confeitaria" },
    { name: "Toast Praia da Costa", desc: "Pão de fermentação natural, abacate amanteigado e ovo poché.", price: "R$ 34", image: empanadaImg, category: "bistro" },
    { name: "Sanduíche Mediterrâneo", desc: "Pão rústico, brie, damasco e rúcula.", price: "R$ 32", image: empanadaImg, category: "bistro" },
    { name: "Empanada do dia", desc: "Massa dourada com recheios autorais que mudam diariamente.", price: "R$ 24", image: empanadaImg, category: "bistro" },
    { name: "Espresso Duplo", desc: "Grãos especiais, encorpado, para o ritmo da orla.", price: "R$ 12", image: coffeeImg, category: "cafeteria" },
    { name: "Frapê de Cappuccino", desc: "Clássico gelado, cremoso, com nota de cacau.", price: "R$ 29", image: coffeeImg, category: "cafeteria" },
    { name: "Café Bom Bom", desc: "Espresso encorpado sobre camada generosa de leite condensado.", price: "R$ 18", image: coffeeImg, category: "cafeteria" },
    { name: "Limonada Suíça", desc: "Refrescante, perfeita pós praia.", price: "R$ 16", image: coffeeImg, category: "cafeteria" },
  ],
  weekly: [
    [
      { tag: "Domingo na orla", name: "Toast Praia da Costa", desc: "Abacate amanteigado e ovo poché em pão de fermentação.", price: "R$ 34", image: empanadaImg },
      { tag: "Doce do dia", name: "Naked Cake", desc: "Camadas de creme e frutas da estação.", price: "sob consulta", image: cakesImg },
      { tag: "Café do dia", name: "Café Bom Bom", desc: "Espresso e leite condensado.", price: "R$ 18", image: coffeeImg },
    ],
    [
      { tag: "Grab & Go", name: "Espresso Duplo", desc: "Para começar a semana com energia.", price: "R$ 12", image: coffeeImg },
      { tag: "Doce do dia", name: "Cookie Recheado", desc: "Doce de leite cremoso por dentro.", price: "R$ 14", image: cakesImg },
      { tag: "Salgado do dia", name: "Empanada do dia", desc: "Recheios autorais que mudam diariamente.", price: "R$ 24", image: empanadaImg },
    ],
    [
      { tag: "Sanduíche da semana", name: "Sanduíche Mediterrâneo", desc: "Brie, damasco e rúcula em pão rústico.", price: "R$ 32", image: empanadaImg },
      { tag: "Refrescante", name: "Limonada Suíça", desc: "Geladinha, perfeita pós praia.", price: "R$ 16", image: coffeeImg },
      { tag: "Doce do dia", name: "Donuts de Frutas Vermelhas", desc: "Glacê delicado e geleia artesanal.", price: "R$ 18", image: cakesImg },
    ],
    [
      { tag: "Brunch leve", name: "Toast Praia da Costa", desc: "Para um almoço rápido na orla.", price: "R$ 34", image: empanadaImg },
      { tag: "Café do dia", name: "Frapê de Cappuccino", desc: "Cremoso e gelado.", price: "R$ 29", image: coffeeImg },
      { tag: "Doce do dia", name: "Cookie Recheado", desc: "Crocante por fora, cremoso por dentro.", price: "R$ 14", image: cakesImg },
    ],
    [
      { tag: "Sugestão da Chef", name: "Sanduíche Mediterrâneo", desc: "Brie, damasco e rúcula.", price: "R$ 32", image: empanadaImg },
      { tag: "Café do dia", name: "Espresso Duplo", desc: "Grãos especiais.", price: "R$ 12", image: coffeeImg },
      { tag: "Doce do dia", name: "Donuts de Frutas Vermelhas", desc: "Glacê delicado.", price: "R$ 18", image: cakesImg },
    ],
    [
      { tag: "Sexta na orla", name: "Empanada do dia", desc: "Recheio especial de sexta.", price: "R$ 24", image: empanadaImg },
      { tag: "Refrescante", name: "Limonada Suíça", desc: "Refrescante pós sol.", price: "R$ 16", image: coffeeImg },
      { tag: "Doce do dia", name: "Naked Cake", desc: "Fatia generosa do dia.", price: "sob consulta", image: cakesImg },
    ],
    [
      { tag: "Sábado na orla", name: "Toast Praia da Costa", desc: "Abacate e ovo poché.", price: "R$ 34", image: empanadaImg },
      { tag: "Doce do dia", name: "Cookie Recheado", desc: "Para levar à praia.", price: "R$ 14", image: cakesImg },
      { tag: "Café do dia", name: "Café Bom Bom", desc: "Espresso e leite condensado.", price: "R$ 18", image: coffeeImg },
    ],
  ],
};

export const units: Unit[] = [itaparica, praiaDaCosta];

export function getUnit(slug: Unit["slug"]): Unit {
  return units.find((u) => u.slug === slug) ?? itaparica;
}
