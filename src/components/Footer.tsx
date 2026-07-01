import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { servicesData } from "../data/servicesData";
import logoImg from "../assets/logo.jpg";

// Inline SVG social icons for reliability
const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Footer: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Brief */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-accent to-secondary p-[1px] overflow-hidden">
                <img src={logoImg} className="w-full h-full object-cover rounded-[7px]" alt="KRR Innovations Logo" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-white leading-tight tracking-tight text-base">
                  KRR Innovations
                </span>
                <span className="font-sans text-[9px] uppercase font-bold tracking-widest text-accent">
                  Pvt. Ltd.
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering innovators, startups, and established enterprises by delivering top-tier consultation, cutting-edge technology development, and strategic legal protection.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://facebook.com/profile.php?id=61576763954098" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-slate-700 transition-all duration-300">
                <FacebookIcon size={16} />
              </a>
              <a href="https://youtube.com/channel/UCFahv_DZ-sQRe21itRCNaoA" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-slate-700 transition-all duration-300">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="https://linkedin.com/in/krr-innovations-private-limited-781429396" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-slate-700 transition-all duration-300">
                <LinkedinIcon size={16} />
              </a>
              <a href="https://instagram.com/krr_innovations_pvt_ltd" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-slate-700 transition-all duration-300">
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/vision-mission" className="hover:text-accent transition-colors duration-200">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {servicesData.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="hover:text-accent transition-colors duration-200">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-base mb-2 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  KRR Innovations Pvt. Ltd., PL-402, FL-4, Sec-1, Lotus Land Mark, Ayodyanagar, Vijayawada Urban, Krishna, Andhra Pradesh - 520003
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+917842460920" className="hover:text-accent transition-colors text-slate-400">
                  +91 78424 60920
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:krrinnovations@gmail.com" className="hover:text-accent transition-colors text-slate-400">
                  krrinnovations@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Panel */}
        <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} KRR Innovations Pvt. Ltd. All rights reserved.</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showScroll && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-accent text-slate-900 hover:bg-white hover:text-primary shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-1 focus:outline-none"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
