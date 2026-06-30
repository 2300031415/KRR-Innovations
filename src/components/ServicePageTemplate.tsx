import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import type { ServiceDetail } from "../data/servicesData";
import PageBanner from "./PageBanner";
import Button from "./Button";
import CTA from "./CTA";

interface ServicePageTemplateProps {
  service: ServiceDetail;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ service }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5 }
  };

  return (
    <div>
      {/* Page Banner */}
      <PageBanner
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={[
          { label: "Services", path: "/" },
          { label: service.title }
        ]}
      />

      {/* 1. OVERVIEW & DESCRIPTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs uppercase tracking-widest font-extrabold text-secondary">
                Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 leading-tight">
                {service.tagline}
              </h2>
              <p className="text-slate-650 leading-relaxed text-base sm:text-lg">
                {service.overview}
              </p>
              
              {/* Detailed narrative paragraph */}
              <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                KRR Innovations Pvt. Ltd. provides complete consultancy, technical strategy, and legal filing. We structure our delivery timelines around secure practices to ensure you have consistent access to specialists who understand your exact industry dynamics.
              </p>
            </motion.div>

            {/* Decorative Callout widget */}
            <motion.div 
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 bg-slate-50 border border-slate-100 p-8 rounded-2xl shadow-inner relative"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full filter blur-xl" />
              <h3 className="font-heading font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                Confidentiality Pledge
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                All client source code, design drafts, patent descriptions, and corporate files are managed under high security and watertight mutual NDAs. We protect your competitive advantages.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="sm" className="w-full flex items-center justify-center space-x-2">
                  <span>Request NDA Template</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. KEY FEATURES */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
              Core Specialties
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2">
              Key Service Features
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              We provide structured support modules specifically customized to address all dimensions of {service.title.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-accent/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                    {feat}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                    Delivered by active experts to align with standard industry compliance and growth parameters.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. BENEFITS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-secondary">
              Strategic Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2">
              Why Partner With Us?
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Our workflows are structured to generate maximum strategic and financial value for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden group hover:border-secondary/20 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                {/* Visual grid overlay inside card */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                
                <span className="text-4xl font-heading font-extrabold text-secondary/10 absolute top-4 right-6 group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </span>

                <div className="relative z-10 space-y-4">
                  <h4 className="font-heading font-extrabold text-slate-900 text-lg sm:text-xl">
                    Value Benefit
                  </h4>
                  <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. OUR PROCESS */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
              Work Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2">
              Our Collaboration Process
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              We employ a transparent four-stage process to transform your initial objectives into fully operational results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow"
              >
                {/* Connector line for desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-slate-200 z-10" />
                )}

                <div>
                  <span className="text-3xl font-heading font-black text-primary/10 group-hover:text-primary/30 transition-colors">
                    {step.step}
                  </span>
                  <h4 className="font-heading font-bold text-slate-900 mt-4 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-secondary flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              Information
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left font-heading font-bold text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-350 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <CTA />

    </div>
  );
};

export default ServicePageTemplate;
