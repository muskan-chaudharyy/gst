"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 px-8 py-16 sm:px-16 text-center"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full" />
          </div>

          <div className="relative">
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              🚀 Next Batch Starting Soon
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              Ready to Start Your
              <br />
              Tech Journey?
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-10">
              Enroll today and take the first step towards a rewarding career in
              technology. Limited seats available — don&apos;t miss out!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
