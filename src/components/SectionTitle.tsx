import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "center",
  light = false,
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const lineAlignmentClasses = {
    left: "origin-left",
    center: "mx-auto",
    right: "origin-right",
  };

  return (
    <div className={`flex flex-col mb-12 md:mb-16 ${alignmentClasses[align]}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs uppercase tracking-widest font-bold text-secondary mb-2"
      >
        KRR Innovations
      </motion.span>
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl md:text-4xl font-heading font-extrabold tracking-tight ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </motion.h2>

      {/* Decorative colored line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4 mb-5 ${lineAlignmentClasses[align]}`}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`max-w-2xl text-base md:text-lg leading-relaxed ${
            light ? "text-slate-350" : "text-slate-600"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
