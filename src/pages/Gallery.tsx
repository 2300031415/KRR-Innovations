import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "../components/PageBanner";
import CTA from "../components/CTA";
import BackgroundVideo from "../components/BackgroundVideo";

export const Gallery: React.FC = () => {
  const [loadImages, setLoadImages] = useState(false);

  useEffect(() => {
    // Delay loading the images slightly so the page layout mounts instantly
    const timer = setTimeout(() => {
      setLoadImages(true);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  const galleryImages = [
    { src: "/pptx_images/slide_1_img_1_1.jpg", category: "Corporate", caption: "Corporate Collaboration Session" },
    { src: "/pptx_images/slide_1_img_2_2.jpg", category: "Corporate", caption: "Leadership Meeting" },
    { src: "/pptx_images/slide_1_img_3_3.jpg", category: "Corporate", caption: "Strategic Team Building" },
    { src: "/pptx_images/slide_3_img_1_14.jpg", category: "Events", caption: "MSME Industrial Expo & Fairs" },
    { src: "/pptx_images/slide_3_img_2_15.jpg", category: "Events", caption: "Business Networking Meetup" },
    { src: "/pptx_images/slide_3_img_3_16.jpg", category: "Events", caption: "Startup Pitch & Mentoring Day" },
    { src: "/pptx_images/slide_5_img_0_34.jpg", category: "Training", caption: "Skill Development Training Bootcamp" },
    { src: "/pptx_images/slide_5_img_1_35.jpg", category: "Training", caption: "Entrepreneurship Development Program" },
    { src: "/pptx_images/slide_5_img_2_36.jpg", category: "Training", caption: "Interactive Technology Workshop" },
    { src: "/pptx_images/slide_5_img_3_37.jpg", category: "Training", caption: "Professional Leadership Development" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <PageBanner
        title="KRR Innovations in Action"
        breadcrumbs={[{ label: "Visual Showcase" }]}
        subtitle="Explore the records of our milestones, corporate meets, industrial trade fairs, and active training sessions."
      />

      {/* Gallery Grid Section */}
      <section className="py-24 bg-transparent relative overflow-hidden text-white">
        <BackgroundVideo opacity={0.9} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Image grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {galleryImages.map((img) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={img.src}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm aspect-square flex flex-col justify-between"
                >
                  <div className="w-full h-full overflow-hidden bg-white/10">
                    {loadImages ? (
                      <img 
                        src={img.src} 
                        alt={img.caption} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-100 dark:bg-slate-800 animate-pulse flex items-center justify-center">
                        <span className="text-slate-400 text-xs">Loading...</span>
                      </div>
                    )}
                  </div>
                  {/* Hover banner details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[10px] text-accent font-bold uppercase tracking-wider mb-1">
                      {img.category}
                    </span>
                    <h4 className="text-white font-heading font-bold text-sm sm:text-base leading-tight">
                      {img.caption}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Call To Action */}
      <CTA />
    </div>
  );
};

export default Gallery;
