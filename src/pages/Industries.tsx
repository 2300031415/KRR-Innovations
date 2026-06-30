import React from "react";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import { industriesData } from "../data/industriesData";
import LucideIcon from "../components/LucideIcon";
import CTA from "../components/CTA";

export const Industries: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.08
      }
    },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div>
      {/* Page Banner */}
      <PageBanner
        title="Industries We Serve"
        subtitle="Custom legal intellectual property protections, software platforms, and leadership consulting across ten active sectors."
        breadcrumbs={[{ label: "Industries" }]}
      />

      {/* Grid of Industries */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
              Industry Verticals
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2">
              Tailored Solutions For Every Sector
            </h2>
            <p className="text-slate-650 mt-4 leading-relaxed text-sm sm:text-base">
              Each industry has unique regulatory environments and software demands. KRR Innovations Pvt. Ltd. provides domain-specific technical and structural support.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industriesData.map((ind, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-355 p-8 rounded-2xl flex flex-col justify-between group hover:border-primary/20"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <LucideIcon name={ind.iconName} size={24} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {ind.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs text-slate-400 group-hover:text-secondary transition-colors font-semibold uppercase tracking-wider">
                  <span>Custom Strategic Offering</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Industries;
