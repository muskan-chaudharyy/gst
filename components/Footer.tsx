import Link from "next/link";
import {
  Zap,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Placement", href: "/placement" },
  { label: "Success Stories", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
];

const courses = [
  { label: "Business Analyst", href: "/courses/business-analyst" },
  { label: "Web Development", href: "/courses/web-development" },
  { label: "Java Full Stack", href: "/courses/java-fullstack" },
  { label: "MERN Stack", href: "/courses/mern-stack" },
  { label: "Data Analytics", href: "/courses/data-analytics" },
  { label: "Power BI", href: "/courses/power-bi" },
  { label: "IoT Training", href: "/courses/iot-training" },
];

const socialLinks = [
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg tracking-tight">
                  GS Technology
                </span>
                <span className="text-blue-400 text-[10px] font-medium tracking-wider uppercase">
                  Training & Placement
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Empowering careers through industry-focused training and 100%
              placement assistance. Your success is our mission.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Courses
            </h3>
            <ul className="flex flex-col gap-2">
              {courses.map((course) => (
                <li key={course.href}>
                  <Link
                    href={course.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Info
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  GS Technology Center,
                  <br />
                  Pune, Maharashtra 411001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="tel:+917404051406"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  +91 74040 51406
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="mailto:info@gstechnology.in"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  info@gstechnology.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} GS Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
