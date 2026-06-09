"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  TrendingUp,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Goal-Oriented",
    description:
      "Every course, session, and activity is designed with one purpose: to get you hired.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Quality Education",
    description:
      "Industry veterans with hands-on experience deliver every training session.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Heart,
    title: "Student-First",
    description:
      "Your success is our success. We go above and beyond for every student.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Curriculum updated regularly to reflect the latest industry tools and trends.",
    color: "bg-yellow-100 text-yellow-600",
  },
];

const team = [
  {
    name: "Ganesh Sable",
    role: "Founder & Director",
    expertise: "15+ years in IT & Training",
    initials: "GS",
    color: "bg-blue-600",
  },
  {
    name: "Sunita Patil",
    role: "Head of Placements",
    expertise: "10+ years in HR & Recruitment",
    initials: "SP",
    color: "bg-purple-600",
  },
  {
    name: "Rajesh Kumar",
    role: "Lead Trainer – Java & Full Stack",
    expertise: "12+ years at TCS & Infosys",
    initials: "RK",
    color: "bg-green-600",
  },
  {
    name: "Meera Joshi",
    role: "Lead Trainer – Data & Analytics",
    expertise: "8+ years as Data Analyst",
    initials: "MJ",
    color: "bg-orange-600",
  },
];

export default function AboutContent() {
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
            <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-6">
              About GS Technology
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Bridging the Gap Between{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Learning & Industry
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              GS Technology was founded with a simple but powerful belief — that
              every motivated student deserves a real shot at a technology
              career, regardless of their background.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Target,
                label: "Our Mission",
                color: "from-blue-500 to-indigo-600",
                text: "To provide industry-relevant technology training and 100% placement assistance that empowers students and professionals to build meaningful, high-paying careers in the tech sector.",
              },
              {
                icon: Eye,
                label: "Our Vision",
                color: "from-green-500 to-teal-600",
                text: "To be India's most trusted training and placement partner — known for transforming careers and delivering consistent, measurable results for every student we work with.",
              },
            ].map(({ icon: Icon, label, color, text }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {label}
                </h2>
                <p className="text-gray-600 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Founded in Pune, GS Technology started with a single classroom and
              a big dream: to make quality tech education accessible and
              placement-focused. Over 4 years, we&apos;ve grown into a
              full-scale training institute serving 2,500+ students across
              Maharashtra.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What sets us apart is our uncompromising focus on outcomes. Every
              course is designed in consultation with industry professionals,
              ensuring students learn exactly what companies are hiring for today
              — not yesterday.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Our Core Values
            </h2>
            <p className="text-gray-500">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-4 mx-auto`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Meet Our Team
            </h2>
            <p className="text-gray-500">
              Industry experts dedicated to your success.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-20 h-20 rounded-full ${member.color} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}
                >
                  {member.initials}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-xs text-gray-400">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick stats bar */}
      <section className="py-14 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Users, value: "2500+", label: "Students Trained" },
            { icon: Award, value: "95%", label: "Placement Rate" },
            { icon: TrendingUp, value: "50+", label: "Hiring Partners" },
            { icon: BookOpen, value: "7+", label: "Courses Offered" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label}>
              <Icon className="w-6 h-6 text-blue-200 mx-auto mb-2" />
              <div className="text-3xl font-extrabold text-white">{value}</div>
              <div className="text-blue-200 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
