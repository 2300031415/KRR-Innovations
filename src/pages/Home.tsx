import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { servicesData } from "../data/servicesData";
import { featuresData, statsData } from "../data/companyData";
import { industriesData } from "../data/industriesData";
import LucideIcon from "../components/LucideIcon";
import Button from "../components/Button";
import CTA from "../components/CTA";
import AnimatedCounter from "../components/AnimatedCounter";

export const Home: React.FC = () => {
  // Animation presets
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
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
    <div className="relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 bg-hero-gradient text-white overflow-hidden">
        {/* Floating Abstract Shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Floating Orb 1 */}
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/10 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl"
          />
          {/* Floating Orb 2 */}
          <motion.div
            animate={{ 
              y: [0, 45, 0],
              x: [0, -25, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"
          />
          {/* Floating Orb 3 */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full border border-white/5 border-dashed"
          />
        </div>

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-100 uppercase">
              Corporate Innovation & Consultancy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto"
          >
            Transforming Ideas into <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-accent via-accent-light to-secondary bg-clip-text text-transparent">
              Innovation, Growth & Success
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering Entrepreneurs, Startups, Businesses, Students, Professionals and Institutions through Innovation, Technology, Intellectual Property, Professional Development and Strategic Consulting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/about" className="w-full sm:w-auto">
              <Button variant="accent" size="lg" className="w-full sm:w-auto flex items-center justify-center space-x-2">
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-slate-900">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side text info */}
            <motion.div {...fadeInUp} className="space-y-6">
              <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 leading-tight">
                Driving Next-Generation Innovation & Technology Strategies
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                KRR Innovations Pvt. Ltd. is a premium consulting partner dedicated to nurturing commercial concepts, creating scalable software platforms, and safeguarding creative ideas. We deliver cohesive models spanning across legal IPR filings, business automation, skill training academies, and industrial meetups.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-950">Innovation Driven</h4>
                    <p className="text-xs text-slate-500">Developing solutions with modern tech & strategies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-950">Trusted Business Partner</h4>
                    <p className="text-xs text-slate-500">Providing confidentiality and ongoing compliance.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link to="/about">
                  <Button variant="primary" size="md">
                    Read More About Us
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right side stats visual */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div 
                variants={fadeInUp} 
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <LucideIcon name="Layers" size={24} />
                </div>
                <div>
                  <h3 className="text-4xl font-heading font-extrabold text-slate-900">50+</h3>
                  <p className="text-sm font-semibold text-slate-500 mt-1">Successful Projects</p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp} 
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow mt-6 lg:mt-12"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                  <LucideIcon name="Smile" size={24} />
                </div>
                <div>
                  <h3 className="text-4xl font-heading font-extrabold text-slate-900">100%</h3>
                  <p className="text-sm font-semibold text-slate-500 mt-1">Client Satisfaction</p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp} 
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow -mt-6 lg:-mt-6"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-primary mb-6">
                  <LucideIcon name="Cpu" size={24} />
                </div>
                <div>
                  <span className="text-xl font-heading font-extrabold text-slate-900 leading-none">Innovation</span>
                  <p className="text-sm font-semibold text-slate-500 mt-1">Driven Process</p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp} 
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow mt-0 lg:mt-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <LucideIcon name="Briefcase" size={24} />
                </div>
                <div>
                  <span className="text-xl font-heading font-extrabold text-slate-900 leading-none">Trusted</span>
                  <p className="text-sm font-semibold text-slate-500 mt-1">Partner Support</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION */}
      <section className="py-24 bg-slate-50 relative bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
              Core Divisions
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2">
              Our Service Offerings
            </h2>
            <p className="text-slate-650 mt-4 leading-relaxed">
              We operate across four specialized business divisions, offering seamless corporate consultancy, tech product architecture, legal IP registration, and industry networking.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {servicesData.map((service) => (
              <motion.div
                key={service.path}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Visual card header image */}
                <div className="h-44 w-full relative overflow-hidden bg-slate-50 border-b border-slate-100">
                  {service.imageUrl ? (
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400">
                      <LucideIcon name={service.iconName} size={40} className="text-primary/20" />
                    </div>
                  )}
                  {/* Category icon overlay */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-white/95 backdrop-blur-sm text-primary flex items-center justify-center shadow-md">
                    <LucideIcon name={service.iconName} size={20} />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-550 text-sm leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <Link 
                    to={service.path}
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-secondary space-x-1 hover:underline pt-2"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-secondary">
              Strategic Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2">
              Why KRR Innovations?
            </h2>
            <p className="text-slate-650 mt-4 leading-relaxed">
              We leverage an ecosystem of technological capability, legal experts, and deep mentor connections to ensure your business grows on solid parameters.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuresData.map((feat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <LucideIcon name={feat.iconName} size={20} />
                </div>
                <h4 className="font-heading font-bold text-slate-900 mb-2">
                  {feat.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE SECTION */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent">
              Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-2">
              Industries We Serve
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              Our multidisciplinary approach allows us to deliver specialized intellectual property strategy, technological systems, and corporate advisory across a wide range of industries.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {industriesData.map((ind, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 text-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <LucideIcon name={ind.iconName} size={22} />
                </div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                  {ind.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/industries">
              <Button variant="outline" size="md" className="border-white text-white hover:bg-white hover:text-slate-900">
                View Industry Details
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* 6. ACHIEVEMENTS SECTION (Animated Counter) */}
      <section className="py-20 bg-primary text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-secondary mix-blend-multiply opacity-80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            {statsData.map((stat, idx) => {
              // Parse target number from string value (e.g. 50+ -> 50, 100% -> 100, 2021 -> 2021)
              const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ""), 10);
              const suffix = stat.value.replace(/[0-9]/g, "");

              return (
                <div key={idx} className="space-y-2">
                  <div className="w-12 h-12 rounded-xl bg-white/10 mx-auto flex items-center justify-center mb-4 text-accent">
                    <LucideIcon name={stat.iconName} size={24} />
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white">
                    <AnimatedCounter target={numericValue} suffix={suffix} />
                  </div>
                  <h4 className="font-medium text-sm sm:text-base text-slate-200">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-slate-350 max-w-xs mx-auto">
                    {stat.sublabel}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION SECTION */}
      <CTA />

    </div>
  );
};

export default Home;
