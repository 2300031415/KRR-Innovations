import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "../data/servicesData";
import { featuresData, statsData } from "../data/companyData";
import LucideIcon from "../components/LucideIcon";
import Button from "../components/Button";
import CTA from "../components/CTA";
import AnimatedCounter from "../components/AnimatedCounter";

export const Home: React.FC = () => {
  const heroSlides = [
    "/images/hero_slide_1.png",
    "/images/hero_slide_2.png",
    "/images/hero_slide_3.png",
    "/images/hero_slide_4.png",
  ];

  const [activeSlide, setActiveSlide] = React.useState(0);
  const [slideDirection, setSlideDirection] = React.useState(1);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection(1);
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setSlideDirection(1);
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setSlideDirection(-1);
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleIndicatorClick = (idx: number) => {
    setSlideDirection(idx > activeSlide ? 1 : -1);
    setActiveSlide(idx);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0
    })
  };

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
      <section className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        {/* Slide Images as Full-screen background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <AnimatePresence initial={false} custom={slideDirection} mode="wait">
            <motion.img
              key={activeSlide}
              src={heroSlides[activeSlide]}
              custom={slideDirection}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="w-full h-full object-cover object-center animate-fade-in"
              alt={`KRR Innovations Slide ${activeSlide + 1}`}
            />
          </AnimatePresence>
          {/* Visual Dark Overlay to ensure nav bar links are highly readable */}
          <div className="absolute inset-0 bg-slate-950/20 z-10" />
        </div>

        {/* Left Control Arrow */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-slate-950/40 hover:bg-slate-950/80 text-white flex items-center justify-center border border-white/10 backdrop-blur-sm z-30 transition-all duration-300 focus:outline-none"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Right Control Arrow */}
        <button
          onClick={handleNextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-slate-950/40 hover:bg-slate-950/80 text-white flex items-center justify-center border border-white/10 backdrop-blur-sm z-30 transition-all duration-300 focus:outline-none"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Indicators Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-30 py-2.5 px-5 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleIndicatorClick(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                idx === activeSlide 
                  ? "bg-accent w-7" 
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
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
