import React from "react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5527981890666";

export function WhatsAppFAB() {
  return (
    <motion.button
      type="button"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      onClick={() => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.56 2 2.1 6.45 2.1 11.93c0 1.75.46 3.46 1.32 4.97L2 22l5.26-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.47 0 9.93-4.45 9.93-9.93a9.86 9.86 0 0 0-2.91-6.99Zm-7.02 15.24h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.85 5.82 2.41a8.17 8.17 0 0 1 2.42 5.83c0 4.54-3.7 8.23-8.25 8.23Zm4.52-6.17c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.56.13-.17.25-.65.8-.8.96-.15.17-.3.19-.56.06-.25-.13-1.08-.4-2.05-1.27-.76-.68-1.27-1.51-1.42-1.76-.15-.25-.02-.38.11-.51.12-.12.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.46-.06-.13-.56-1.35-.77-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.46.06-.69.32-.24.25-.91.89-.91 2.16 0 1.27.93 2.51 1.06 2.67.13.17 1.81 2.76 4.39 3.87.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.3Z" />
      </svg>
    </motion.button>
  );
}
