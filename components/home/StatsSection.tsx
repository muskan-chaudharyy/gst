"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Building2, Star, Trophy } from "lucide-react";

function CountUp({
  end,
  suffix = "",
  duration = 2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: Users,
    value: 2500,
    suffix: "+",
    label: "Students Trained",
    description: "Across all programs",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Building2,
    value: 50,
    suffix: "+",
    label: "Hiring Partners",
    description: "Startups to MNCs",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Star,
    value: 95,
    suffix: "%",
    label: "Placement Rate",
    description: "Within 3 months",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Trophy,
    value: 4,
    suffix: "+ Years",
    label: "Of Excellence",
    description: "Trusted institution",
    color: "from-purple-500 to-pink-600",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-300 rounded-full text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Numbers That Speak
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto">
            Years of consistent results, happy students, and successful career
            launches.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl font-extrabold text-white mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-blue-200 font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-blue-400 text-sm">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
