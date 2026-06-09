"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'm interested in learning more about GS Technology courses and placement assistance."
);

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-7 h-7 fill-white" />
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
    </motion.a>
  );
}
