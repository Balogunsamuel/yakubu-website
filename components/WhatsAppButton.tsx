"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppLink } from "@/lib/utils";

export function WhatsAppButton() {
  const whatsappLink = getWhatsAppLink(
    siteConfig.whatsapp,
    "Hello, I would like to enquire about your services.",
  );

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-navy animate-pulse-glow motion-reduce:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
