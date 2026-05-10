// Replace with the final general orders WhatsApp link when the single number is confirmed.
export const GENERAL_ORDERS_WHATSAPP = "PLACEHOLDER_WHATSAPP_ENCOMENDAS_GERAL";
export const hasGeneralOrdersWhatsapp = GENERAL_ORDERS_WHATSAPP.startsWith("https://wa.me/");
export const generalOrdersHref = hasGeneralOrdersWhatsapp ? GENERAL_ORDERS_WHATSAPP : "#encomendas";

export const brandUnitRoutes = {
  itaparica: "/itaparica",
  "praia-da-costa": "/praia-da-costa",
} as const;
