/* eslint-disable no-unused-vars */
import { Home, User, Wrench, Briefcase,Contact,Trophy,ScatterChart} from 'lucide-react'
import { motion } from 'framer-motion';

export function SidebarNav() {
  const nav = [
    { icon: <Home />, label: "Home", href: "#home" },
    { icon: <User />, label: "About", href: "#about" },
    { icon: <ScatterChart />, label: "About", href: "#codingStats" },
    { icon: <Wrench />, label: "Skills", href: "#skills" },
    { icon: <Briefcase />, label: "Projects", href: "#projects" },
    { icon: <Contact />, label: "Contact", href: "#contact" },
    { icon: <Trophy />, label: "Contact", href: "#achievement" },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6 p-4 bg-base-100/60 backdrop-blur-xl shadow-xl rounded-2xl border border-white/10">
      {nav.map((item, i) => (
        <motion.a
          key={i}
          href={item.href}
          whileHover={{ scale: 1.2 }}
          className="text-xl p-3 rounded-xl hover:bg-primary/20 transition flex items-center justify-center"
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}
