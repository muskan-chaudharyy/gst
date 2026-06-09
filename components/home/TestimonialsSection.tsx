"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Analyst",
    company: "TCS",
    rating: 5,
    image: "RS",
    color: "bg-blue-500",
    text: "GS Technology completely transformed my career. The BA course was incredibly practical — I landed a job at TCS within 6 weeks of completing the program. The placement support is genuinely unmatched.",
    course: "Business Analyst",
  },
  {
    name: "Priya Patel",
    role: "Full Stack Developer",
    company: "Wipro",
    rating: 5,
    image: "PP",
    color: "bg-purple-500",
    text: "I was a complete beginner with zero coding background. After the MERN Stack course, I'm now a junior developer at Wipro earning 7 LPA. The mentors are patient and extremely knowledgeable.",
    course: "MERN Stack",
  },
  {
    name: "Amit Verma",
    role: "Data Analyst",
    company: "Capgemini",
    rating: 5,
    image: "AV",
    color: "bg-green-500",
    text: "The Data Analytics program gave me exactly what I needed — Python, SQL, and Power BI skills that employers actually want. I received 3 offers within a month of completing the course!",
    course: "Data Analytics",
  },
  {
    name: "Sneha Kulkarni",
    role: "Java Developer",
    company: "Infosys",
    rating: 5,
    image: "SK",
    color: "bg-orange-500",
    text: "Java Full Stack training here is top-notch. Real projects, industry expert instructors, and a placement team that actually gets you interviews. Highly recommend to any fresh graduate.",
    course: "Java Full Stack",
  },
  {
    name: "Rohit Desai",
    role: "Power BI Analyst",
    company: "Mphasis",
    rating: 5,
    image: "RD",
    color: "bg-cyan-500",
    text: "Power BI course was concise yet comprehensive. The instructor explained DAX formulas so well that I could apply them from day one at my new job. Best investment I've made in my career.",
    course: "Power BI",
  },
  {
    name: "Anjali Singh",
    role: "Web Developer",
    company: "HCL",
    rating: 5,
    image: "AS",
    color: "bg-pink-500",
    text: "The web development course built my confidence to apply to senior positions. GS Technology's structured curriculum and continuous support made all the difference.",
    course: "Web Development",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4">
            Student Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Stories That Inspire
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Real students, real results. See how GS Technology has changed
            careers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg hover:bg-white transition-all duration-300"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-gray-100" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                >
                  {t.image}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {t.role} at {t.company}
                  </div>
                </div>
                <span className="ml-auto px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                  {t.course}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
          >
            View All Success Stories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
