/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { achievements } from "../assets/data";
import { Award, Star, Trophy } from "lucide-react";

export default function Achievement() {
  return (
    <section
      id="achievement"
      className="min-h-screen py-24 max-w-6xl mx-auto px-6"
    >
      <div className="relative inline-block mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Achievement/Certifications
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8 }}
          className="absolute -bottom-2 left-0 h-[3px] bg-primary/70 rounded-full"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-base-100/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 text-center flex flex-col items-center gap-4"
          >
            <div className="text-primary">{<Star w={60} />}</div>
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="opacity-70">{item.desc}</p>
            <span className="font-semibold text-primary mt-2">{item.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
