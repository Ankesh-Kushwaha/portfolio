/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Home,
  User,
  Wrench,
  Briefcase,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 py-10 bg-base-100/70 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <h2 className="text-2xl font-semibold">Ankesh Kushwaha</h2>

        {/* Quick Links */}
        <div className="flex gap-6 text-lg">
          <a href="#home" className="hover:text-primary">
            Home
          </a>
          <a href="#projects" className="hover:text-primary">
            Projects
          </a>
          <a href="#skills" className="hover:text-primary">
            Skills
          </a>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://www.linkedin.com/in/ankesh-kushwaha-6a88ab28b/"
            className="hover:text-primary"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/Ankesh-Kushwaha"
            className="hover:text-primary"
          >
            <Github />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=ankeshkush9651@gmail.com"
            target="_blank"
            className="hover:text-primary"
          >
            <Mail />
          </a>
        </div>
      </div>

      <p className="text-center mt-6 opacity-60">
        © 2025 Ankesh Kushwaha. All rights reserved.
      </p>
    </footer>
  );
}

