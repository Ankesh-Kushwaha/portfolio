/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="py-24 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16"
    >
      {/* Left — Text */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative inline-block mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8 }}
            className="absolute -bottom-2 left-0 h-[3px] bg-primary/70 rounded-full"
          />
        </div>

        <p className="opacity-80 text-lg leading-relaxed mb-8 max-w-xl">
          I’m a MERN stack developer passionate about building scalable,
          high-performance, and visually engaging web applications. I specialize
          in crafting intuitive user experiences using
          <span className="font-semibold text-primary">
            {" "}
            React.js, Node.js, Express.js,
          </span>
          and
          <span className="font-semibold text-primary"> MongoDB</span>.
          <br />
          <br />
          With over
          <span className="font-semibold text-primary">
            {" "}
            700+ coding problems
          </span>
          solved and a
          <span className="font-semibold text-primary">
            {" "}
            1600+ LeetCode rating
          </span>
          , I bring strong problem-solving and structured thinking to every
          project.
          <br />
          <br />I value clean architecture, consistency, and continuous
          learning. I'm open to collaborating on impactful real-world projects
          where I can contribute and grow.
        </p>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center h-full w-full"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="
          w-100 h-100 
          rounded-3xl 
          bg-linear-to-tr from-primary/20 via-blue-500/10 to-purple-500/20 
          border border-white/20 
          backdrop-blur-2xl 
          shadow-[0_0_40px_rgba(0,0,0,0.2)] 
          dark:shadow-[0_0_50px_rgba(255,255,255,0.05)]
          flex items-center justify-center
        "
        >
          <span className="text-9xl">👨‍💻</span>
        </div>
      </motion.div>
    </section>
  );
}
