/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import img from '../assets/Screenshot (72).png'
import { projects } from "../assets/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <div className="relative inline-block mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8 }}
          className="absolute -bottom-2 left-0 h-[3px] bg-primary/70 rounded-full"
        />
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-primary/70 to-primary/20 transform -translate-x-1/2 " />

        <div className="space-y-24">
          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex items-center ${
                  isLeft ? "justify-start mr-5" : "justify-end ml-5"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`w-full h-full md:w-1/2 p-8 bg-base-100/70 backdrop-blur-2xl rounded-3xl shadow-xl border border-white/20 relative hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-primary/40 transition-all duration-300 ${
                    isLeft ? "mr-10" : "ml-10"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute top-6 w-6 h-6 bg-primary rounded-full border-4 border-base-100 ${
                      isLeft ? "-right-10" : "-left-10"
                    }`}
                  />

                  {/* Hero Image */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl mb-4 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="opacity-70 mb-3">{project.description}</p>
                  <p className="opacity-70 mb-3 font-semibold">{project.TechnologyUsed}</p>
                  <p className="opacity-70 mb-3">{project.year}</p>

                  <a
                    href={project.link}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
