import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageBanner from "../components/PageBanner";
import ContactForm from "../components/ContactForm";
import TechBackground from "../components/TechBackground";

// Inline SVG social icons for reliability
const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Contact: React.FC = () => {
  const contactDetails = [
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: "Our Head Office",
      lines: [
        "KRR Innovations Pvt. Ltd.",
        "PL-402, FL-4, Sec-1, Lotus Land Mark,",
        "Ayodyanagar, Vijayawada Urban, Krishna,",
        "Andhra Pradesh, India - 520003"
      ]
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: "Call Us",
      lines: [
        "+91 78424 60920"
      ]
    },
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      title: "Email Us",
      lines: [
        "krrinnovations@gmail.com"
      ]
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      title: "Business Hours",
      lines: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <div>
      {/* Page Banner */}
      <PageBanner
        title="Contact Us"
        subtitle="Have an inquiry? Connect with our technical consultants and legal IP specialists today."
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Contact Details & Form */}
      <section className="py-24 bg-white relative overflow-hidden">
        <TechBackground theme="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Side: Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-extrabold text-secondary">
                  Get In Touch
                </span>
                <h2 className="text-3xl font-heading font-extrabold text-slate-900 leading-tight">
                  Let's Discuss Your Next Innovation
                </h2>
                <p className="text-slate-650 leading-relaxed text-sm sm:text-base">
                  We look forward to answering your questions. Fill in the form or call us to set up an initial consultation on trademark viability, software development costs, or training programs.
                </p>
              </div>

              {/* Contact Card items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 pt-4">
                {contactDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-4 bg-slate-50 p-5 rounded-xl border border-slate-100">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base mb-1">
                        {detail.title}
                      </h4>
                      {detail.lines.map((line, lIdx) => (
                        <p key={lIdx} className="text-slate-500 text-xs sm:text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social details */}
              <div className="space-y-3 pt-4">
                <h4 className="font-heading font-bold text-slate-900 text-sm">
                  Follow Our Social Updates
                </h4>
                <div className="flex items-center space-x-3">
                  <a href="https://facebook.com/profile.php?id=61576763954098" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                    <FacebookIcon size={18} />
                  </a>
                  <a href="https://youtube.com/channel/UCFahv_DZ-sQRe21itRCNaoA" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/krr-innovations-private-limited-781429396" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                    <LinkedinIcon size={18} />
                  </a>
                  <a href="https://instagram.com/krr_innovations_pvt_ltd" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                    <InstagramIcon size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Interactive Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Styled Google Maps Placeholder */}
      <section className="h-96 w-full relative bg-slate-100 border-t border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-slate-200/60 z-10 flex flex-col items-center justify-center text-center p-6 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 shadow">
            <MapPin className="w-6 h-6 animate-bounce" />
          </div>
          <h3 className="text-lg font-heading font-extrabold text-slate-800">KRR Innovations Headquarters</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-sm">
            Lotus Land Mark, Vijayawada, Andhra Pradesh, India
          </p>
          <span className="mt-4 px-4 py-1.5 rounded-full bg-white text-xs font-semibold text-primary shadow border border-slate-100">
            Interactive map requires API Key, displaying vector layout
          </span>
        </div>
        {/* Decorative Grid vector styling mimicking a map */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:2rem_2rem] z-0" />
        <div className="absolute top-1/2 left-1/3 w-72 h-12 bg-slate-300 rounded-full blur-2xl opacity-50 z-0" />
        <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl opacity-50 z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 z-0" />
      </section>

    </div>
  );
};

export default Contact;
