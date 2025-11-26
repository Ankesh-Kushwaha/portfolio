/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "contact", label: "Contact", href: "#contact" },
    { id: "codingStats", label: "CodingStats", href: "#codingStats" },
  ];

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const mid = window.innerHeight / 2;
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (
            window.scrollY + mid >= top &&
            window.scrollY + mid <= top + height
          ) {
            setActive(item.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="
          max-w-6xl mx-auto px-4 py-4 
          backdrop-blur-xl bg-base-100/50
          border-b border-white/10 shadow-lg 
          flex items-center justify-between 
          rounded-b-2xl
        "
      >

        <motion.a
          href="#home"
          className="text-2xl font-bold tracking-wide"
          whileHover={{ scale: 1.05 }}
        >
          Let's Know About Me.
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              className={`relative text-lg transition ${
                active === item.id ? "text-primary font-semibold" : "opacity-80"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {item.label}
              {active === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded-full"
                />
              )}
            </motion.a>
          ))}
        
          <button
            className="btn btn-sm btn-ghost"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden btn btn-ghost"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </motion.div>

      {/* Mobile Drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-base-100/70 backdrop-blur-xl shadow-lg px-6 py-4 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg hover:text-primary"
            >
              {item.label}
            </a>
          ))}

          <button
            className="btn btn-sm btn-outline mt-2"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon /> : <Sun />}
            Toggle Theme
          </button>
        </motion.div>
      )}
    </header>
  );
}
