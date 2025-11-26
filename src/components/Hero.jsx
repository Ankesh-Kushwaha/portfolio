/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail,Code,CodeSquare} from "lucide-react";
import image from '../assets/profile1-Photoroom.png-Photoroom.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-6 gap-10 py-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl opacity-40" />

      {/* LEFT — INTRO TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-primary">Ankesh Kushwaha</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Devloper",
            1500,
            "Backend Developer",
            1500,
            "competitive Programmer",
            1500,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl mt-2 opacity-80"
        />

        <p className="mt-4 text-lg opacity-80 max-w-xl">
          I’m a passionate developer who loves crafting beautiful interfaces,
          smooth animations, and functional user experiences.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a href="/resume.pdf" download>
            <button className="btn btn-outline btn-lg">Hire Me</button>
          </a>
          <a href="https://github.com/Ankesh-Kushwaha">
            <button className="btn btn-outline btn-lg">View Projects</button>
          </a>
        </div>
      </motion.div>

      {/* RIGHT — BIG IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center relative rounded-full "
      >
        {/* Floating Animation */}
        <motion.img
          src={image}
          alt="Profile Graphic"
          className="h-full w-[400px] md:w-[450px] rounded-full shadow-xl object-cove r"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glow Behind Image */}
        <div className="absolute inset-0 bg-primary/30 blur-[120px] -z-10" />
      </motion.div>

      {/* Social Icons */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6 text-xl">
        <a
          href="https://github.com/Ankesh-Kushwaha"
          className="hover:text-primary"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/ankesh-kushwaha-6a88ab28b/"
          className="hover:text-primary"
        >
          <Linkedin />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=ankeshkush9651@gmail.com"
          target="_blank"
          className="hover:text-primary"
        >
          <Mail />
        </a>
        <a
          href="https://codeforces.com/profile/Xeron_Cadmile9648"
          className="hover:text-primary"
        >
          <Code/>
        </a>
        <a
          href="https://leetcode.com/u/01_Heisenberg/"
          className="hover:text-primary"
        >
          <CodeSquare/>
        </a>
      </div>
    </section>
  );
}
