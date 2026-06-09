"use client";

import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, Building2, Award } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Analyst",
    company: "TCS",
    package: "7 LPA",
    rating: 5,
    initials: "RS",
    color: "bg-blue-600",
    course: "Business Analyst",
    text: "GS Technology completely transformed my career. I was stuck in a dead-end job with no direction. The BA course was incredibly practical — from requirement gathering to Agile project management. The trainers have real industry experience and the placement team is genuinely invested in your success. I landed a job at TCS within 6 weeks of completing the program.",
  },
  {
    name: "Priya Patel",
    role: "Full Stack Developer",
    company: "Wipro",
    package: "7.5 LPA",
    rating: 5,
    initials: "PP",
    color: "bg-purple-600",
    course: "MERN Stack",
    text: "I was a complete beginner with zero coding experience. After the MERN Stack course, I'm now a Junior Developer at Wipro. The curriculum is structured brilliantly — starting from the basics and gradually building up to real-world projects. The mock interviews were especially helpful. I feel prepared for anything in my role.",
  },
  {
    name: "Amit Verma",
    role: "Data Analyst",
    company: "Capgemini",
    package: "6.5 LPA",
    rating: 5,
    initials: "AV",
    color: "bg-green-600",
    course: "Data Analytics",
    text: "The Data Analytics program gave me exactly what I needed. Python, SQL, and Power BI in one comprehensive course. The hands-on projects were directly relevant to what I do at Capgemini every day. I received 3 job offers within a month of completion and chose the best one. Worth every rupee!",
  },
  {
    name: "Sneha Kulkarni",
    role: "Java Backend Developer",
    company: "Infosys",
    package: "8 LPA",
    rating: 5,
    initials: "SK",
    color: "bg-orange-600",
    course: "Java Full Stack",
    text: "Java Full Stack training at GS Technology is top-notch. The Spring Boot content was particularly excellent — covering microservices, security, and deployment on AWS. Real projects, industry expert instructors, and a placement team that actually secures interviews. I had 5 interview calls within 2 weeks of job applications.",
  },
  {
    name: "Rohit Desai",
    role: "BI Analyst",
    company: "Mphasis",
    package: "6 LPA",
    rating: 5,
    initials: "RD",
    color: "bg-cyan-600",
    course: "Power BI",
    text: "Power BI course was concise yet incredibly comprehensive. The instructor's explanation of DAX formulas was exceptional — I could apply them from day one at my new job. The course covered real-world business scenarios that I now encounter daily. Highly recommended for anyone wanting to enter the BI space.",
  },
  {
    name: "Anjali Singh",
    role: "Frontend Developer",
    company: "HCL Technologies",
    package: "7 LPA",
    rating: 5,
    initials: "AS",
    color: "bg-pink-600",
    course: "Web Development",
    text: "As a non-CS graduate, I was worried about entering IT. GS Technology's Web Development course removed all those doubts. The structured approach, supportive mentors, and continuous practice made me confident. The placement team helped me craft a resume that actually got noticed. Now I'm a Frontend Developer at HCL!",
  },
  {
    name: "Karan Mehta",
    role: "IoT Engineer",
    company: "Tech Mahindra",
    package: "6.5 LPA",
    rating: 5,
    initials: "KM",
    color: "bg-indigo-600",
    course: "IoT Training",
    text: "The IoT training program was exactly what the market needed. Practical sessions with actual hardware — Arduino and Raspberry Pi. The cloud integration project we built during the course became a talking point in every interview. Secured a role at Tech Mahindra in their IoT division within a month.",
  },
  {
    name: "Neha Joshi",
    role: "Senior Business Analyst",
    company: "Accenture",
    package: "10 LPA",
    rating: 5,
    initials: "NJ",
    color: "bg-teal-600",
    course: "Business Analyst",
    text: "I was a working professional looking to transition from testing to BA. GS Technology's weekend batch was perfect for my schedule. The trainers understood industry dynamics and the curriculum reflected current trends. With their placement support, I made a successful transition to Accenture — with a significant salary jump.",
  },
  {
    name: "Vikram Pawar",
    role: "Data Engineer",
    company: "LTIMindtree",
    package: "9 LPA",
    rating: 5,
    initials: "VP",
    color: "bg-red-600",
    course: "Data Analytics",
    text: "GS Technology's Data Analytics program opened doors I didn't know existed. The Python and SQL depth was exceptional. The capstone project we built is still on my portfolio and impresses interviewers. Placed at LTIMindtree with the best package in my batch. Can't thank GS Technology enough.",
  },
];

export default function TestimonialsContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium mb-6">
              Student Success Stories
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
              Stories That Inspire
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Real students. Real companies. Real success. See how GS Technology
              has changed careers across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-8 text-center">
          {[
            { icon: Award, value: "95%", label: "Placement Rate" },
            { icon: Building2, value: "50+", label: "Companies" },
            { icon: TrendingUp, value: "₹6-12 LPA", label: "Average Package" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label}>
              <Icon className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-extrabold text-gray-900">{value}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <Quote className="absolute top-5 right-5 w-8 h-8 text-gray-100" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">
                      {t.role} @ {t.company}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                    {t.course}
                  </span>
                  <span className="text-sm font-bold text-green-600">
                    {t.package}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Be Our Next Success Story
          </h2>
          <p className="text-blue-100 mb-6">
            Join thousands of students who have launched their careers with GS
            Technology.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
