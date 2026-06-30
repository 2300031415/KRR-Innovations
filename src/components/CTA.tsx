import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Decorative colored glow spheres */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 bg-primary/20 rounded-full filter blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 bg-secondary/20 rounded-full filter blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative"
        >
          {/* Subtle neon outline */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent opacity-10 blur-[2px] -z-10" />

          <span className="text-xs uppercase tracking-widest font-extrabold text-accent mb-4 inline-block">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Ready to Build Your Success Story?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-350 leading-relaxed">
            Let's work together to transform your innovative ideas into proprietary systems, scalable digital applications, and high-impact corporate programs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="accent" size="lg" className="w-full sm:w-auto flex items-center justify-center space-x-2">
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-slate-900">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
