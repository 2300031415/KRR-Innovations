import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "../data/servicesData";
import { featuresData, statsData } from "../data/companyData";
import LucideIcon from "../components/LucideIcon";
import Button from "../components/Button";
import CTA from "../components/CTA";
import AnimatedCounter from "../components/AnimatedCounter";
import TechBackground from "../components/TechBackground";

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
      <section className="relative min-h-screen w-full bg-[#0b0b24] text-white overflow-hidden grid grid-cols-1 lg:grid-cols-2 pt-20 lg:pt-0">
        <TechBackground theme="dark" />
        
        {/* Left Side: Hero Text content */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-20 lg:py-0 space-y-8 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight">
              Transforming Ideas into <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Innovation, Growth & Success</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Empowering Entrepreneurs, Startups, Businesses, Students, Professionals and Institutions through Innovation, Technology, Intellectual Property, Professional Development and Strategic Consulting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link to="/services">
              <Button variant="primary" size="lg">Explore Services</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outlineWhite" size="lg">Contact Us</Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Autoplay Loop Video */}
        <div className="relative w-full h-[350px] lg:h-full overflow-hidden z-0 bg-slate-900 border-l border-white/5">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Subtle gradient overlay to blend into the left navy background on large screens */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0b24] to-transparent z-10" />
          <div className="absolute inset-0 bg-slate-950/10 z-10" />
        </div>
      </section>

      {/* 2. OUR SERVICES SECTION */}
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

      {/* 3. ABOUT PREVIEW SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <TechBackground theme="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side text info */}
            <motion.div {...fadeInUp} className="space-y-6">
              <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 leading-tight">
                Driving Next-Generation Innovation & Technology Strategies
              </h2>
              <p className="text-slate-650 leading-relaxed text-base">
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

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <TechBackground theme="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
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
