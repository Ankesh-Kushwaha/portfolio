/* eslint-disable no-unused-vars */
import { Mail, Send, Phone, MapPin } from "lucide-react";
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
      <div className="relative inline-block mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Contact Me
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8 }}
          className="absolute -bottom-2 left-0 h-[3px] bg-primary/70 rounded-full"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4 p-4 bg-base-100/50 backdrop-blur-xl rounded-xl shadow border border-white/10">
            <Mail className="text-primary" />
            <p>ankeshkush9651@gmail.com</p>
          </div>

          <div className="flex items-center gap-4 p-4 bg-base-100/50 backdrop-blur-xl rounded-xl shadow border border-white/10">
            <Phone className="text-primary" />
            <p>+91 7068122578</p>
          </div>

          <div className="flex items-center gap-4 p-4 bg-base-100/50 backdrop-blur-xl rounded-xl shadow border border-white/10">
            <MapPin className="text-primary" />
            <p>Greater Noida, Uttar Pradesh,India</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 bg-base-100/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          <textarea
            className="textarea textarea-bordered w-full h-32"
            placeholder="Your Message"
          ></textarea>

          <button className="btn btn-primary w-full flex items-center gap-2">
            Send Message <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
