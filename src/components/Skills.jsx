/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { skills } from '../assets/data';

export function Skills() {
  

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <div className="relative inline-block mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8 }}
          className="absolute -bottom-2 left-0 h-[3px] bg-primary/70 rounded-full"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.15, rotate: 2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 bg-base-100/70 backdrop-blur-2xl rounded-3xl shadow-xl flex flex-col items-center gap-3 border border-white/20 w-44 hover:shadow-2xl hover:bg-base-200/60 transition-all duration-300 hover:ring-2 hover:ring-primary/50 hover:-translate-y-2"
          >
            <img src={skill.logo} alt={skill.name} className="w-16 h-16" />
            <p className="font-semibold text-lg text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}