import cakesImg from "@/assets/cakes.jpg";
import empanadaImg from "@/assets/empanada.jpg";
import coffeeImg from "@/assets/coffee.jpg";
import itaparicaStoreImg from "@/assets/site/foto-loja-itaparica.jpg";
import praiaDaCostaStoreImg from "@/assets/site/foto-loja-praia-da-costa.jpg";
import brunchTableImg from "@/assets/site/foto-mesa-brunch-e-cafe.jpg";
import croissantEggsImg from "@/assets/site/foto-croissant-com-ovos.jpg";
import waffleDrinkImg from "@/assets/site/foto-waffle-bebida.jpg";
import cakeCoffeeImg from "@/assets/site/foto-bolo-com-cafe.jpg";
import icedDrinkImg from "@/assets/site/foto-drink-ou-cafe-gelado.jpg";
import deliveryImg from "@/assets/site/foto-entrega.jpg";
import toastedMarshmallowImg from "@/assets/site/bebida-marshmallow-tostado.jpg";
import chocolateCakeSliceImg from "@/assets/site/fatia-bolo-chocolate-morango.jpg";
import puddingCakeImg from "@/assets/site/bolo-pudim-inteiro.jpg";

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
  kind: "meal" | "drink" | "dessert";
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
  image: string;
  menuPdf: string;
  menuLabel?: string;
  brunchMenuPdf?: string;
  brunchMenuLabel?: string;
  brunchAvailability?: string;
  wineMenuPdf?: string;
  wineMenuLabel?: string;
  about: string;
  highlights: { title: string; desc: string }[];
  menu: MenuItem[];
  weekly: WeeklyPick[][];
};

const itaparica: Unit = {
  slug: "itaparica",
  name: "Unidade Praia de Itaparica",
  shortName: "Itaparica",
  tag: "A casa mãe, desde 2017",
  address: "Rua Ibitirama, 253, Praia de Itaparica",
  city: "Vila Velha, ES · CEP 29102-130",
  hours: "Terça a domingo, das 8h às 19h. After Coffee nas sextas e sábados.",
  petFriendly: true,
  whatsapp: "https://wa.me/5527999999999",
  maps: "https://maps.google.com/?q=Rua+Ibitirama+253+Praia+de+Itaparica+Vila+Velha",
  ifood: "https://www.ifood.com.br/delivery/vila-velha-es/colher-de-pau-itaparica",
  instagram: "https://instagram.com/colherdepaucafeteriabistro",
  image: itaparicaStoreImg,
  menuPdf: "/cardapio-colher-de-pau-praia-de-itaparica.pdf",
  menuLabel: "Cardápio da casa",
  brunchMenuPdf: "/cardapio-manha-brunch-itaparica.pdf",
  brunchMenuLabel: "Cardápio especial de brunch",
  brunchAvailability: "Terça a sexta, das 8h às 14h, exceto feriados.",
  about:
    "A história começou em Itaparica. Samira Norbim transformou a primeira casa da Colher de Pau em um pedacinho de Paris no litoral capixaba, com pães de fermentação natural, confeitaria autoral, cafés especiais e varanda pet friendly.",
  highlights: [
    {
      title: "Café da Rainha",
      desc: "Manhã farta com cesta de pães, frutas frescas, ovos e cafés filtrados.",
    },
    {
      title: "Confeitaria autoral",
      desc: "Bolos da vovó, croissants recheados e Brownie Bowl.",
    },
    {
      title: "After Coffee",
      desc: "Nas sextas e sábados, a casa recebe luz baixa, taças e pratos para compartilhar.",
    },
  ],
  menu: [
    {
      name: "Trio de Bolos",
      desc: "Três bolos do dia em fatias generosas para compartilhar.",
      price: "R$ 70",
      image: cakeCoffeeImg,
      category: "confeitaria",
    },
    {
      name: "Brownie Bowl",
      desc: "Brownie quente com sorvete, morangos, Nutella e calda.",
      price: "R$ 41",
      image: chocolateCakeSliceImg,
      category: "confeitaria",
    },
    {
      name: "Bolo Pudim",
      desc: "Bolo e pudim na mesma fatia, com textura cremosa.",
      price: "R$ 28",
      image: puddingCakeImg,
      category: "confeitaria",
    },
    {
      name: "Croissant de Pistache",
      desc: "Croissant recheado com brigadeiro de pistache.",
      price: "R$ 49",
      image: cakesImg,
      category: "confeitaria",
    },
    {
      name: "Brunch Samira",
      desc: "Waffle com Nutella e morango, panquecas, toast e café filtrado.",
      price: "R$ 105",
      image: brunchTableImg,
      category: "bistro",
    },
    {
      name: "Croissant com Ovo Poché",
      desc: "Folhado artesanal com gema cremosa e ervas frescas.",
      price: "R$ 38",
      image: croissantEggsImg,
      category: "bistro",
    },
    {
      name: "Quiche de Brie e Damasco",
      desc: "Brie e damasco equilibram doce e salgado.",
      price: "R$ 36",
      image: empanadaImg,
      category: "bistro",
    },
    {
      name: "Croissant Gruyère",
      desc: "Queijo gruyère, presunto royale e bechamel da casa, finalizado gratinado.",
      price: "R$ 42",
      image: empanadaImg,
      category: "bistro",
    },
    {
      name: "Cappuccino Colher de Pau",
      desc: "Espresso com leite vaporizado e marshmallow tostado.",
      price: "R$ 33",
      image: toastedMarshmallowImg,
      category: "cafeteria",
    },
    {
      name: "Hario V60",
      desc: "Café coado de 200 ml, com perfil floral e adocicado.",
      price: "R$ 20",
      image: coffeeImg,
      category: "cafeteria",
    },
    {
      name: "MaraCoffee",
      desc: "Geleia de maracujá, água tônica, gelo e espresso.",
      price: "R$ 28",
      image: icedDrinkImg,
      category: "cafeteria",
    },
    {
      name: "Aperol Spritz",
      desc: "Aperol, água com gás, espumante e toque de laranja.",
      price: "R$ 38",
      image: coffeeImg,
      category: "cafeteria",
    },
  ],
  weekly: [
    [
      {
        tag: "Favorito da casa",
        name: "Croissant Gruyère",
        desc: "Queijo gruyère, presunto royale e bechamel da casa, finalizado gratinado.",
        price: "R$ 42",
        image: empanadaImg,
        kind: "meal",
      },
      {
        tag: "Doce do dia",
        name: "Brownie Bowl",
        desc: "Brownie quente com sorvete, morangos, Nutella e calda.",
        price: "R$ 41",
        image: chocolateCakeSliceImg,
        kind: "dessert",
      },
      {
        tag: "Café do dia",
        name: "Cappuccino Colher de Pau",
        desc: "Espresso com leite vaporizado e marshmallow tostado.",
        price: "R$ 33",
        image: toastedMarshmallowImg,
        kind: "drink",
      },
    ],
    [
      {
        tag: "Quentinho da semana",
        name: "Chocolate Colher de Pau",
        desc: "Chocolate cremoso com marshmallow tostado.",
        price: "R$ 30",
        image: toastedMarshmallowImg,
        kind: "drink",
      },
      {
        tag: "Doce do dia",
        name: "Bolo da Tarde",
        desc: "Bolo da vovó, sabores da vitrine.",
        price: "R$ 22",
        image: cakeCoffeeImg,
        kind: "dessert",
      },
      {
        tag: "Salgado do dia",
        name: "Croissant Caprese",
        desc: "Folhado com tomate, muçarela e manjericão fresco.",
        price: "R$ 32",
        image: croissantEggsImg,
        kind: "meal",
      },
    ],
    [
      {
        tag: "Brunch do dia",
        name: "Brunch Individual",
        desc: "Croissant, ovos mexidos, bacon, tomate confit, cream cheese e mimosa.",
        price: "R$ 68",
        image: croissantEggsImg,
        kind: "meal",
      },
      {
        tag: "Café do dia",
        name: "Hario V60",
        desc: "Café coado de 200 ml, com perfil floral e adocicado.",
        price: "R$ 20",
        image: coffeeImg,
        kind: "drink",
      },
      {
        tag: "Doce do dia",
        name: "Croissant Banoffee",
        desc: "Doce de leite, banana e chantilly.",
        price: "R$ 38",
        image: cakesImg,
        kind: "dessert",
      },
    ],
    [
      {
        tag: "Brunch do dia",
        name: "Brunch Samira",
        desc: "Waffle com Nutella e morango, panquecas, toast e café filtrado.",
        price: "R$ 105",
        image: waffleDrinkImg,
        kind: "meal",
      },
      {
        tag: "Refrescante",
        name: "MaraCoffee",
        desc: "Geleia de maracujá, água tônica, gelo e espresso.",
        price: "R$ 28",
        image: icedDrinkImg,
        kind: "drink",
      },
      {
        tag: "Doce do dia",
        name: "Trio de Bolos",
        desc: "Três sabores clássicos com calda, para compartilhar.",
        price: "R$ 70",
        image: cakeCoffeeImg,
        kind: "dessert",
      },
    ],
    [
      {
        tag: "Sugestão da Samira",
        name: "Croissant de Pistache",
        desc: "Croissant recheado com brigadeiro de pistache.",
        price: "R$ 49",
        image: cakesImg,
        kind: "dessert",
      },
      {
        tag: "Café do dia",
        name: "Latte Macchiato",
        desc: "Leite vaporizado com espresso encorpado.",
        price: "R$ 17",
        image: coffeeImg,
        kind: "drink",
      },
      {
        tag: "Salgado do dia",
        name: "Toast Samira",
        desc: "Pão de fermentação natural, cream cheese, ovos e bacon.",
        price: "R$ 36",
        image: empanadaImg,
        kind: "meal",
      },
    ],
    [
      {
        tag: "Sexta pede",
        name: "Aperol Spritz",
        desc: "Aperol, água com gás, espumante e toque de laranja.",
        price: "R$ 38",
        image: coffeeImg,
        kind: "drink",
      },
      {
        tag: "Doce do dia",
        name: "Chocolatudo",
        desc: "Bolo de chocolate quente, brigadeiro e calda de baunilha.",
        price: "R$ 45",
        image: chocolateCakeSliceImg,
        kind: "dessert",
      },
      {
        tag: "After Coffee",
        name: "Croissant Gruyère",
        desc: "Queijo gruyère, presunto royale e bechamel da casa, finalizado gratinado.",
        price: "R$ 42",
        image: empanadaImg,
        kind: "meal",
      },
    ],
    [
      {
        tag: "Sábado na casa mãe",
        name: "Croissant com Ovo Poché",
        desc: "Folhado artesanal com gema cremosa e ervas frescas.",
        price: "R$ 38",
        image: croissantEggsImg,
        kind: "meal",
      },
      {
        tag: "Refrescante",
        name: "Pink Lemonade",
        desc: "Hibisco e frutas vermelhas.",
        price: "R$ 24",
        image: coffeeImg,
        kind: "drink",
      },
      {
        tag: "Doce do dia",
        name: "Waffle Apple Pie",
        desc: "Strudel de maçã com canela e sorvete.",
        price: "R$ 39",
        image: cakesImg,
        kind: "dessert",
      },
    ],
  ],
};

const praiaDaCosta: Unit = {
  slug: "praia-da-costa",
  name: "Unidade Praia da Costa",
  shortName: "Praia da Costa",
  tag: "Nossa irmã perto do mar",
  address: "Rua Rio Branco, 97, Praia da Costa",
  city: "Vila Velha, ES · CEP 29101-130",
  hours: "Segunda a sábado, das 7h30 às 20h. Domingo, das 8h às 18h.",
  petFriendly: false,
  whatsapp: "https://wa.me/5527999999998",
  maps: "https://maps.google.com/?q=Rua+Rio+Branco+97+Praia+da+Costa+Vila+Velha",
  ifood: "https://www.ifood.com.br/delivery/vila-velha-es/colher-de-pau-praia-da-costa",
  instagram: "https://instagram.com/colherdepaucafeteriabistro",
  image: praiaDaCostaStoreImg,
  menuPdf: "/cardapio-colher-de-pau-praia-da-costa-dez.pdf",
  menuLabel: "Cardápio da casa",
  wineMenuPdf: "/carta-de-drinks-e-vinhos-colher-de-pau-praia-da-costa-mar.pdf",
  wineMenuLabel: "Drinks e vinhos",
  about:
    "A casa da Praia da Costa recebe quem vive o ritmo da orla. Perto do mar, ela mantém o cuidado da casa mãe com cafés especiais, sanduíches autorais e doces para levar ou saborear na varanda.",
  highlights: [
    {
      title: "Grab & Go",
      desc: "Cafés especiais, croissants e doces para levar no caminho da praia.",
    },
    {
      title: "Sanduíches autorais",
      desc: "Toasts de fermentação natural com recheios criados por Samira.",
    },
    {
      title: "Encomendas no bairro",
      desc: "Bolos inteiros, naked cakes e cestas de café da manhã para retirar na Praia da Costa.",
    },
  ],
  menu: [
    {
      name: "Naked Cake da Casa",
      desc: "Bolo inteiro com camadas de creme e frutas da estação.",
      price: "sob consulta",
      image: deliveryImg,
      category: "confeitaria",
    },
    {
      name: "Donuts de Frutas Vermelhas",
      desc: "Massa macia, glacê delicado e geleia artesanal.",
      price: "R$ 18",
      image: chocolateCakeSliceImg,
      category: "confeitaria",
    },
    {
      name: "Cookie Recheado",
      desc: "Cookie crocante por fora, com recheio cremoso de doce de leite.",
      price: "R$ 14",
      image: cakeCoffeeImg,
      category: "confeitaria",
    },
    {
      name: "Toast Praia da Costa",
      desc: "Pão de fermentação natural com abacate cremoso e ovo poché.",
      price: "R$ 34",
      image: croissantEggsImg,
      category: "bistro",
    },
    {
      name: "Sanduíche Mediterrâneo",
      desc: "Pão rústico com brie, damasco e rúcula.",
      price: "R$ 32",
      image: empanadaImg,
      category: "bistro",
    },
    {
      name: "Empanada do Dia",
      desc: "Massa dourada com recheios autorais que mudam a cada dia.",
      price: "R$ 24",
      image: empanadaImg,
      category: "bistro",
    },
    {
      name: "Espresso Duplo",
      desc: "Grãos especiais em uma xícara encorpada para o ritmo da orla.",
      price: "R$ 12",
      image: coffeeImg,
      category: "cafeteria",
    },
    {
      name: "Frapê de Cappuccino",
      desc: "Cappuccino gelado e cremoso, com nota de cacau.",
      price: "R$ 29",
      image: icedDrinkImg,
      category: "cafeteria",
    },
    {
      name: "Café Bom Bom",
      desc: "Espresso encorpado sobre uma camada generosa de leite condensado.",
      price: "R$ 18",
      image: coffeeImg,
      category: "cafeteria",
    },
    {
      name: "Limonada Suíça",
      desc: "Refrescante para depois da praia.",
      price: "R$ 16",
      image: coffeeImg,
      category: "cafeteria",
    },
  ],
  weekly: [
    [
      {
        tag: "Domingo na orla",
        name: "Toast Praia da Costa",
        desc: "Pão de fermentação natural com abacate cremoso e ovo poché.",
        price: "R$ 34",
        image: croissantEggsImg,
        kind: "meal",
      },
      {
        tag: "Doce do dia",
        name: "Naked Cake",
        desc: "Camadas de creme e frutas da estação.",
        price: "sob consulta",
        image: deliveryImg,
        kind: "dessert",
      },
      {
        tag: "Café do dia",
        name: "Café Bom Bom",
        desc: "Espresso encorpado sobre uma camada generosa de leite condensado.",
        price: "R$ 18",
        image: coffeeImg,
        kind: "drink",
      },
    ],
    [
      {
        tag: "Grab & Go",
        name: "Espresso Duplo",
        desc: "Grãos especiais em uma xícara encorpada para o ritmo da orla.",
        price: "R$ 12",
        image: coffeeImg,
        kind: "drink",
      },
      {
        tag: "Doce do dia",
        name: "Cookie Recheado",
        desc: "Cookie crocante por fora, com recheio cremoso de doce de leite.",
        price: "R$ 14",
        image: cakeCoffeeImg,
        kind: "dessert",
      },
      {
        tag: "Salgado do dia",
        name: "Empanada do Dia",
        desc: "Massa dourada com recheios autorais que mudam a cada dia.",
        price: "R$ 24",
        image: empanadaImg,
        kind: "meal",
      },
    ],
    [
      {
        tag: "Sanduíche da semana",
        name: "Sanduíche Mediterrâneo",
        desc: "Pão rústico com brie, damasco e rúcula.",
        price: "R$ 32",
        image: empanadaImg,
        kind: "meal",
      },
      {
        tag: "Refrescante",
        name: "Limonada Suíça",
        desc: "Refrescante para depois da praia.",
        price: "R$ 16",
        image: coffeeImg,
        kind: "drink",
      },
      {
        tag: "Doce do dia",
        name: "Donuts de Frutas Vermelhas",
        desc: "Massa macia, glacê delicado e geleia artesanal.",
        price: "R$ 18",
        image: chocolateCakeSliceImg,
        kind: "dessert",
      },
    ],
    [
      {
        tag: "Brunch leve",
        name: "Toast Praia da Costa",
        desc: "Pão de fermentação natural com abacate cremoso e ovo poché.",
        price: "R$ 34",
        image: croissantEggsImg,
        kind: "meal",
      },
      {
        tag: "Café do dia",
        name: "Frapê de Cappuccino",
        desc: "Cappuccino gelado e cremoso, com nota de cacau.",
        price: "R$ 29",
        image: icedDrinkImg,
        kind: "drink",
      },
      {
        tag: "Doce do dia",
        name: "Cookie Recheado",
        desc: "Cookie crocante por fora, com recheio cremoso de doce de leite.",
        price: "R$ 14",
        image: cakeCoffeeImg,
        kind: "dessert",
      },
    ],
    [
      {
        tag: "Sugestão da Samira",
        name: "Sanduíche Mediterrâneo",
        desc: "Pão rústico com brie, damasco e rúcula.",
        price: "R$ 32",
        image: empanadaImg,
        kind: "meal",
      },
      {
        tag: "Café do dia",
        name: "Espresso Duplo",
        desc: "Grãos especiais em uma xícara encorpada para o ritmo da orla.",
        price: "R$ 12",
        image: coffeeImg,
        kind: "drink",
      },
      {
        tag: "Doce do dia",
        name: "Donuts de Frutas Vermelhas",
        desc: "Massa macia, glacê delicado e geleia artesanal.",
        price: "R$ 18",
        image: chocolateCakeSliceImg,
        kind: "dessert",
      },
    ],
    [
      {
        tag: "Sexta na orla",
        name: "Empanada do Dia",
        desc: "Massa dourada com recheios autorais que mudam a cada dia.",
        price: "R$ 24",
        image: empanadaImg,
        kind: "meal",
      },
      {
        tag: "Refrescante",
        name: "Limonada Suíça",
        desc: "Refrescante para depois da praia.",
        price: "R$ 16",
        image: coffeeImg,
        kind: "drink",
      },
      {
        tag: "Doce do dia",
        name: "Naked Cake",
        desc: "Fatia generosa do dia.",
        price: "sob consulta",
        image: deliveryImg,
        kind: "dessert",
      },
    ],
    [
      {
        tag: "Sábado na orla",
        name: "Toast Praia da Costa",
        desc: "Pão de fermentação natural com abacate cremoso e ovo poché.",
        price: "R$ 34",
        image: croissantEggsImg,
        kind: "meal",
      },
      {
        tag: "Doce do dia",
        name: "Cookie Recheado",
        desc: "Cookie crocante por fora, com recheio cremoso de doce de leite.",
        price: "R$ 14",
        image: cakeCoffeeImg,
        kind: "dessert",
      },
      {
        tag: "Café do dia",
        name: "Café Bom Bom",
        desc: "Espresso encorpado sobre uma camada generosa de leite condensado.",
        price: "R$ 18",
        image: coffeeImg,
        kind: "drink",
      },
    ],
  ],
};

export const units: Unit[] = [itaparica, praiaDaCosta];

export function getUnit(slug: Unit["slug"]): Unit {
  return units.find((u) => u.slug === slug) ?? itaparica;
}
