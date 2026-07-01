import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { timelineData, valuesData, statsData } from "../data/companyData";
import LucideIcon from "../components/LucideIcon";
import CTA from "../components/CTA";
import TechBackground from "../components/TechBackground";

export const About: React.FC = () => {

  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    viewport: { once: true, margin: "-100px" },
  };

  return (
    <div>
      {/* Page Banner */}
      <PageBanner
        title="About KRR Innovations"
        subtitle="Empowering ideas, engineering technological solutions, and protecting business intellectual properties since 2021."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* 1. INTRODUCTION SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <TechBackground theme="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Graphic/Visual Block - Corporate Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-video lg:aspect-square bg-gradient-to-tr from-primary to-secondary rounded-2xl overflow-hidden shadow-2xl p-[1px] group"
            >
              <div className="w-full h-full bg-slate-900 rounded-[15px] overflow-hidden relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/about_profile.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Content block */}
            <motion.div {...fadeInUp} className="space-y-6">
              <span className="text-xs uppercase tracking-widest font-extrabold text-secondary">
                Company Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 leading-tight">
                Who We Are & What We Stand For
              </h2>
              <p className="text-slate-650 leading-relaxed">
                KRR Innovations Pvt. Ltd. is a multidimensional corporate advisory and software development company. We believe that modern commercial scaling requires a combination of robust legal foundations (IPR protection), advanced digital workflow architectures (Technology Consultancy), community platform strategies (Event Management), and hands-on operational leadership (Skill Development Training).
              </p>
              <p className="text-slate-650 leading-relaxed">
                Whether you are an aspiring student, a seed-stage startup, or an established manufacturing firm, our primary objective is to offer strategic end-to-end guidance. We bridge the critical gaps in product design, market deployment, legal compliances, and capital networks.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium text-sm sm:text-base">Comprehensive legal filing advisory (Patents, Trademarks)</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium text-sm sm:text-base">Full-stack software application design & digital scaling</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium text-sm sm:text-base">Robust training curricula bridging theoretical-practical splits</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-primary">
                  {stat.value}
                </h3>
                <h4 className="font-heading font-semibold text-slate-800 text-sm sm:text-base">
                  {stat.label}
                </h4>
                <p className="text-slate-500 text-xs hidden sm:block">
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <TechBackground theme="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-secondary">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2">
              Our Core Values
            </h2>
            <p className="text-slate-600 mt-4 text-sm sm:text-base">
              These six pillars govern every project discovery, technology stack evaluation, event deployment, and client collaboration we undertake.
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
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md hover:bg-white hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <LucideIcon name={val.iconName} size={24} />
                </div>
                <h3 className="text-lg font-heading font-bold text-slate-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-slate-650 text-sm leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. OUR JOURNEY (Timeline) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
              Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2">
              Our Journey So Far
            </h2>
            <p className="text-slate-600 mt-4 text-sm sm:text-base">
              From a single consulting advisory desk to a comprehensive technology development and educational bootcamp provider.
            </p>
          </div>

          {/* Interactive Timeline Layout */}
          <div className="relative">
            {/* Center Line for desktop */}
            <div className="absolute left-4 lg:left-1/2 top-0 h-full w-[2px] bg-slate-200 -translate-x-1/2 z-0" />

            <div className="space-y-12">
              {timelineData.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className={`flex flex-col lg:flex-row relative z-10 ${
                      isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Node Dot */}
                    <div className="absolute left-4 lg:left-1/2 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow -translate-x-1/2 z-25" />

                    {/* Content Panel */}
                    <div className="w-full lg:w-1/2 pl-12 lg:pl-0 lg:px-8">
                      <div className={`p-6 rounded-2xl bg-white border border-slate-100 shadow-sm relative ${
                        isLeft ? "lg:text-right" : "lg:text-left"
                      }`}>
                        <span className="inline-block text-xs font-bold text-white bg-secondary px-3 py-1 rounded-full mb-3">
                          Year {item.year}
                        </span>
                        <h4 className="text-lg font-heading font-bold text-slate-900 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-slate-550 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Empty placeholder column to align timeline */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* Call To Action */}
      <CTA />

    </div>
  );
};

export default About;
