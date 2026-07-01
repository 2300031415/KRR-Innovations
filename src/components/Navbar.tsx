import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { servicesData } from "../data/servicesData";
import logoImg from "../assets/logo.jpg";
import LucideIcon from "./LucideIcon";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Close menus on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          
          {/* Left Side: Logo & Main Navigation Links */}
          <div className="flex items-center space-x-12">
            {/* Logo & Company Name */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary p-[2px] shadow-md shadow-primary/20">
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center overflow-hidden">
                  <img src={logoImg} className="w-full h-full object-cover" alt="KRR Innovations Logo" />
                </div>
                <motion.div 
                  className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary to-secondary -z-10 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg leading-tight tracking-tight text-slate-900 dark:text-white">
                  KRR Innovations
                </span>
                <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-primary dark:text-accent">
                  Pvt. Ltd.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                  isActive("/")
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                  isActive("/about")
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button
                  className={`flex items-center space-x-1 font-medium transition-colors duration-300 hover:text-primary focus:outline-none py-2 ${
                    location.pathname.startsWith("/services")
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl py-3 border border-slate-100 backdrop-blur-xl"
                    >
                      {servicesData.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-5 py-2.5 hover:bg-slate-50 transition-colors duration-200 group"
                        >
                          <div className="flex items-center space-x-3">
                            {service.imageUrl ? (
                              <img 
                                src={service.imageUrl} 
                                alt={service.title}
                                className="w-8 h-8 rounded-lg object-cover shrink-0 border border-slate-100 shadow-sm"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <LucideIcon name={service.iconName} size={16} />
                              </div>
                            )}
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors duration-150 truncate">
                                {service.title}
                              </p>
                              <p className="text-xs text-slate-550 line-clamp-1 mt-0.5">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/vision-mission"
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                  isActive("/vision-mission")
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                Vision & Mission
              </Link>

              <Link
                to="/industries"
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                  isActive("/industries")
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                Industries
              </Link>

              <Link
                to="/gallery"
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                  isActive("/gallery")
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                Gallery
              </Link>
            </div>
          </div>

          {/* Right Side: Contact Button & Mobile menu toggle */}
          <div className="flex items-center space-x-6">
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 bg-primary text-white hover:bg-primary-light shadow-sm"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg focus:outline-none text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="font-heading font-bold text-lg text-primary">KRR Innovations</span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-500 hover:text-slate-850">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col space-y-4">
                  <Link
                    to="/"
                    className={`font-semibold text-lg py-1 ${isActive("/") ? "text-primary" : "text-slate-700"}`}
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className={`font-semibold text-lg py-1 ${isActive("/about") ? "text-primary" : "text-slate-700"}`}
                  >
                    About
                  </Link>

                  {/* Accordion Services */}
                  <div className="flex flex-col">
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className={`flex items-center justify-between font-semibold text-lg py-1 w-full text-left ${
                        location.pathname.startsWith("/services") ? "text-primary" : "text-slate-700"
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 mt-2 space-y-3 border-l border-slate-100 overflow-hidden"
                        >
                           {servicesData.map((service) => (
                             <Link
                               key={service.path}
                               to={service.path}
                               className="flex items-center space-x-3 py-1.5 text-sm text-slate-600 hover:text-primary font-medium"
                             >
                               {service.imageUrl ? (
                                 <img src={service.imageUrl} className="w-6 h-6 rounded object-cover border border-slate-100" alt="" />
                               ) : (
                                 <LucideIcon name={service.iconName} className="w-5 h-5 text-slate-400" />
                               )}
                               <span>{service.title}</span>
                             </Link>
                           ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    to="/vision-mission"
                    className={`font-semibold text-lg py-1 ${isActive("/vision-mission") ? "text-primary" : "text-slate-700"}`}
                  >
                    Vision & Mission
                  </Link>

                  <Link
                    to="/industries"
                    className={`font-semibold text-lg py-1 ${isActive("/industries") ? "text-primary" : "text-slate-700"}`}
                  >
                    Industries
                  </Link>

                  <Link
                    to="/gallery"
                    className={`font-semibold text-lg py-1 ${isActive("/gallery") ? "text-primary" : "text-slate-700"}`}
                  >
                    Gallery
                  </Link>
                </div>
              </div>

              <div className="mt-8 pb-8">
                <Link
                  to="/contact"
                  className="block w-full py-3 text-center bg-primary hover:bg-primary-light text-white font-semibold rounded-lg shadow-md transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
