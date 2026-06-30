import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  subtitle?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({ title, breadcrumbs, subtitle }) => {
  return (
    <div className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 mix-blend-multiply z-10" />
      
      {/* Animated particles background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div 
          className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent filter blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary filter blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center space-x-2 text-sm text-slate-350 mb-4"
        >
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-slate-500" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-accent transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-accent font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 max-w-xl mx-auto text-lg text-slate-300"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;
