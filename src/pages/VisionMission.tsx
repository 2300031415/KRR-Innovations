import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, Sparkles } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { valuesData } from "../data/companyData";
import LucideIcon from "../components/LucideIcon";
import CTA from "../components/CTA";
import BackgroundVideo from "../components/BackgroundVideo";

export const VisionMission: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div>
      {/* Page Banner */}
      <PageBanner
        title="Vision & Mission"
        subtitle="Our core purpose, guiding statements, and values directing KRR Innovations toward future growth."
        breadcrumbs={[{ label: "Vision & Mission" }]}
      />

      {/* 1. VISION & MISSION CARDS */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <BackgroundVideo opacity={0.9} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-tr from-primary to-primary-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Subtle background graphic */}
              <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-white/5 rounded-full filter blur-xl group-hover:scale-110 transition-transform" />
              <div className="absolute top-8 right-8 text-accent/20">
                <Eye size={120} className="stroke-[1]" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-accent">Strategic Sight</span>
                <h2 className="text-3xl font-heading font-extrabold tracking-tight">Our Vision</h2>
                <p className="text-slate-200 leading-relaxed text-base sm:text-lg">
                  To become a premier global innovation incubator and consultancy, recognized for bridging the gap between imaginative ideas and sustainable commercial realities. We envision an active ecosystem where small entrepreneurs, large corporations, and talented students possess immediate, affordable access to advanced engineering capability and legally protected intellectual properties.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-tr from-secondary to-secondary-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Subtle background graphic */}
              <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-white/5 rounded-full filter blur-xl group-hover:scale-110 transition-transform" />
              <div className="absolute top-8 right-8 text-accent/10">
                <Target size={120} className="stroke-[1]" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-accent">Corporate Intent</span>
                <h2 className="text-3xl font-heading font-extrabold tracking-tight">Our Mission</h2>
                <p className="text-slate-200 leading-relaxed text-base sm:text-lg">
                  Our mission is to empower global innovators by providing high-quality, comprehensive consultation, secure legal support, and scalable digital tools. We pledge to treat every invention with absolute confidentiality, deliver enterprise-grade code architectures, host community-building industrial events, and supply practical skills training to ensure long-term business success.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CORPORATE CORE VALUES */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-secondary" />
              Organizational Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2">
              Our Core Value System
            </h2>
            <p className="text-slate-650 mt-4 leading-relaxed">
              We live and deliver by these core values. They structure our product consultation milestones and set our client standards.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {valuesData.map((val, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group hover:border-primary/20"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/10 to-secondary/10 text-primary flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300">
                  <LucideIcon name={val.iconName} size={24} />
                </div>
                <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {val.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {val.description}
                </p>
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

export default VisionMission;
