import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import CTA from "../components/CTA";
import TechBackground from "../components/TechBackground";

interface ImageItem {
  src: string;
  caption: string;
}

interface EventGallery {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  images: ImageItem[];
}

export const Gallery: React.FC = () => {
  const [loadImages, setLoadImages] = useState(false);
  const [activeEventId, setActiveEventId] = useState("corporate");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadImages(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const eventsData: EventGallery[] = [
    {
      id: "awareness_prog",
      title: "Awareness Prog",
      category: "Events",
      date: "August 2026",
      description: "Awareness Prog records and gallery showcase.",
      images: [
        {
          src: "/gallery/Awareness prog/Copy of DSC_3401.JPG",
          caption: "Awareness Prog - Copy of DSC_3401"
        },
        {
          src: "/gallery/Awareness prog/Copy of DSC_3404.JPG",
          caption: "Awareness Prog - Copy of DSC_3404"
        },
        {
          src: "/gallery/Awareness prog/Copy of DSC_3413.JPG",
          caption: "Awareness Prog - Copy of DSC_3413"
        },
        {
          src: "/gallery/Awareness prog/Copy of DSC_3415.JPG",
          caption: "Awareness Prog - Copy of DSC_3415"
        },
        {
          src: "/gallery/Awareness prog/Copy of DSC_3420.JPG",
          caption: "Awareness Prog - Copy of DSC_3420"
        },
        {
          src: "/gallery/Awareness prog/WhatsApp Image 2026-06-20 at 5.42.15 PM (1).jpeg",
          caption: "Awareness Prog - WhatsApp Image 2026-06-20 at 5"
        },
        {
          src: "/gallery/Awareness prog/WhatsApp Image 2026-06-20 at 6.13.17 PM.jpeg",
          caption: "Awareness Prog - WhatsApp Image 2026-06-20 at 6"
        },
        {
          src: "/gallery/Awareness prog/WhatsApp Image 2026-06-20 at 6.13.21 PM (1).jpeg",
          caption: "Awareness Prog - WhatsApp Image 2026-06-20 at 6"
        },
        {
          src: "/gallery/Awareness prog/WhatsApp Image 2026-07-11 at 7.19.17 PM.jpeg",
          caption: "Awareness Prog - WhatsApp Image 2026-07-11 at 7"
        },
        {
          src: "/gallery/Awareness prog/WhatsApp Image 2026-07-11 at 7.19.19 PM.jpeg",
          caption: "Awareness Prog - WhatsApp Image 2026-07-11 at 7"
        },
      ]
    },
    {
      id: "gi_2026",
      title: "Gi 2026",
      category: "Events",
      date: "August 2026",
      description: "Gi 2026 records and gallery showcase.",
      images: [
        {
          src: "/gallery/gi 2026/Clip0191T01.JPG",
          caption: "Gi 2026 - Clip0191T01"
        },
        {
          src: "/gallery/gi 2026/Clip0192T01.JPG",
          caption: "Gi 2026 - Clip0192T01"
        },
        {
          src: "/gallery/gi 2026/Clip0193T01.JPG",
          caption: "Gi 2026 - Clip0193T01"
        },
        {
          src: "/gallery/gi 2026/Clip0219T01.JPG",
          caption: "Gi 2026 - Clip0219T01"
        },
        {
          src: "/gallery/gi 2026/Clip0233T01.JPG",
          caption: "Gi 2026 - Clip0233T01"
        },
        {
          src: "/gallery/gi 2026/Clip0246T01.JPG",
          caption: "Gi 2026 - Clip0246T01"
        },
        {
          src: "/gallery/gi 2026/Clip0259T01.JPG",
          caption: "Gi 2026 - Clip0259T01"
        },
        {
          src: "/gallery/gi 2026/Clip0260T01.JPG",
          caption: "Gi 2026 - Clip0260T01"
        },
        {
          src: "/gallery/gi 2026/Clip0264T01.JPG",
          caption: "Gi 2026 - Clip0264T01"
        },
        {
          src: "/gallery/gi 2026/Clip0265T01.JPG",
          caption: "Gi 2026 - Clip0265T01"
        },
        {
          src: "/gallery/gi 2026/Clip0269T01.JPG",
          caption: "Gi 2026 - Clip0269T01"
        },
        {
          src: "/gallery/gi 2026/DSC06587.JPG",
          caption: "Gi 2026 - DSC06587"
        },
        {
          src: "/gallery/gi 2026/DSC06889.JPG",
          caption: "Gi 2026 - DSC06889"
        },
        {
          src: "/gallery/gi 2026/DSC06911.JPG",
          caption: "Gi 2026 - DSC06911"
        },
        {
          src: "/gallery/gi 2026/DSC06930.JPG",
          caption: "Gi 2026 - DSC06930"
        },
        {
          src: "/gallery/gi 2026/DSC06960.JPG",
          caption: "Gi 2026 - DSC06960"
        },
        {
          src: "/gallery/gi 2026/DSC07020.JPG",
          caption: "Gi 2026 - DSC07020"
        },
        {
          src: "/gallery/gi 2026/DSC07136.JPG",
          caption: "Gi 2026 - DSC07136"
        },
      ]
    },
    {
      id: "ipr_yatra_2025",
      title: "Ipr Yatra 2025",
      category: "Events",
      date: "2025",
      description: "IPR Awareness Yatra events conducted to propagate patenting, trademark filings, and legal brand protection awareness.",
      images: [
        {
          src: "/gallery/IPR YATRA 2025/DSC_2769.JPG",
          caption: "Ipr Yatra 2025 - DSC_2769"
        },
        {
          src: "/gallery/IPR YATRA 2025/DSC_2926.JPG",
          caption: "Ipr Yatra 2025 - DSC_2926"
        },
        {
          src: "/gallery/IPR YATRA 2025/DSC_2928.JPG",
          caption: "Ipr Yatra 2025 - DSC_2928"
        },
        {
          src: "/gallery/IPR YATRA 2025/DSC_2938.JPG",
          caption: "Ipr Yatra 2025 - DSC_2938"
        },
        {
          src: "/gallery/IPR YATRA 2025/DSC_2942.JPG",
          caption: "Ipr Yatra 2025 - DSC_2942"
        },
        {
          src: "/gallery/IPR YATRA 2025/DSC_2954.JPG",
          caption: "Ipr Yatra 2025 - DSC_2954"
        },
        {
          src: "/gallery/IPR YATRA 2025/DSC_2973.JPG",
          caption: "Ipr Yatra 2025 - DSC_2973"
        },
        {
          src: "/gallery/IPR YATRA 2025/DSC_2981.JPG",
          caption: "Ipr Yatra 2025 - DSC_2981"
        },
        {
          src: "/gallery/IPR YATRA 2025/DSC_3060.JPG",
          caption: "Ipr Yatra 2025 - DSC_3060"
        },
        {
          src: "/gallery/IPR YATRA 2025/DSC_3063.JPG",
          caption: "Ipr Yatra 2025 - DSC_3063"
        },
        {
          src: "/gallery/IPR YATRA 2025/DSC_3065.JPG",
          caption: "Ipr Yatra 2025 - DSC_3065"
        },
        {
          src: "/gallery/IPR YATRA 2025/DSC_3239.JPG",
          caption: "Ipr Yatra 2025 - DSC_3239"
        },
      ]
    },
    {
      id: "pm_vishwakarma_anakapalli",
      title: "Pm Vishwakarma - Anakapalli",
      category: "Events",
      date: "August 2026",
      description: "PM Vishwakarma training and developmental initiatives conducted in Anakapalli region.",
      images: [
        {
          src: "/gallery/pm vishwakarma/Anakapalli/C0104T01 - Copy.JPG",
          caption: "Pm Vishwakarma - Anakapalli - C0104T01 - Copy"
        },
        {
          src: "/gallery/pm vishwakarma/Anakapalli/C0107T01.JPG",
          caption: "Pm Vishwakarma - Anakapalli - C0107T01"
        },
        {
          src: "/gallery/pm vishwakarma/Anakapalli/C0109T01 - Copy.JPG",
          caption: "Pm Vishwakarma - Anakapalli - C0109T01 - Copy"
        },
        {
          src: "/gallery/pm vishwakarma/Anakapalli/C0113T01 - Copy.JPG",
          caption: "Pm Vishwakarma - Anakapalli - C0113T01 - Copy"
        },
        {
          src: "/gallery/pm vishwakarma/Anakapalli/C0118T01 - Copy - Copy.JPG",
          caption: "Pm Vishwakarma - Anakapalli - C0118T01 - Copy - Copy"
        },
        {
          src: "/gallery/pm vishwakarma/Anakapalli/C0121T01.JPG",
          caption: "Pm Vishwakarma - Anakapalli - C0121T01"
        },
        {
          src: "/gallery/pm vishwakarma/Anakapalli/PYR08220.JPG",
          caption: "Pm Vishwakarma - Anakapalli - PYR08220"
        },
        {
          src: "/gallery/pm vishwakarma/Anakapalli/PYR08329.JPG",
          caption: "Pm Vishwakarma - Anakapalli - PYR08329"
        },
        {
          src: "/gallery/pm vishwakarma/Anakapalli/PYR08386.JPG",
          caption: "Pm Vishwakarma - Anakapalli - PYR08386"
        },
        {
          src: "/gallery/pm vishwakarma/Anakapalli/PYR08387.JPG",
          caption: "Pm Vishwakarma - Anakapalli - PYR08387"
        },
        {
          src: "/gallery/pm vishwakarma/Anakapalli/PYR08394.JPG",
          caption: "Pm Vishwakarma - Anakapalli - PYR08394"
        },
        {
          src: "/gallery/pm vishwakarma/Anakapalli/PYR08418.JPG",
          caption: "Pm Vishwakarma - Anakapalli - PYR08418"
        },
        {
          src: "/gallery/pm vishwakarma/Anakapalli/PYR08454.JPG",
          caption: "Pm Vishwakarma - Anakapalli - PYR08454"
        },
        {
          src: "/gallery/pm vishwakarma/Anakapalli/PYR08462.JPG",
          caption: "Pm Vishwakarma - Anakapalli - PYR08462"
        },
        {
          src: "/gallery/pm vishwakarma/Anakapalli/PYR08474.JPG",
          caption: "Pm Vishwakarma - Anakapalli - PYR08474"
        },
      ]
    },
    {
      id: "pm_vishwakarma_bapatla",
      title: "Pm Vishwakarma - Bapatla",
      category: "Events",
      date: "August 2026",
      description: "PM Vishwakarma training and developmental initiatives conducted in Bapatla region.",
      images: [
        {
          src: "/gallery/pm vishwakarma/Bapatla/Clip0151T01.JPG",
          caption: "Pm Vishwakarma - Bapatla - Clip0151T01"
        },
        {
          src: "/gallery/pm vishwakarma/Bapatla/Clip0186T01.JPG",
          caption: "Pm Vishwakarma - Bapatla - Clip0186T01"
        },
        {
          src: "/gallery/pm vishwakarma/Bapatla/Clip0194T01.JPG",
          caption: "Pm Vishwakarma - Bapatla - Clip0194T01"
        },
        {
          src: "/gallery/pm vishwakarma/Bapatla/DSC03221.JPG",
          caption: "Pm Vishwakarma - Bapatla - DSC03221"
        },
        {
          src: "/gallery/pm vishwakarma/Bapatla/DSC03387.JPG",
          caption: "Pm Vishwakarma - Bapatla - DSC03387"
        },
        {
          src: "/gallery/pm vishwakarma/Bapatla/DSC03442.JPG",
          caption: "Pm Vishwakarma - Bapatla - DSC03442"
        },
        {
          src: "/gallery/pm vishwakarma/Bapatla/DSC03459.JPG",
          caption: "Pm Vishwakarma - Bapatla - DSC03459"
        },
      ]
    },
    {
      id: "pm_vishwakarma_narasaraopeta",
      title: "Pm Vishwakarma - Narasaraopeta",
      category: "Events",
      date: "August 2026",
      description: "PM Vishwakarma training and developmental initiatives conducted in Narasaraopeta region.",
      images: [
        {
          src: "/gallery/pm vishwakarma/Narasaraopeta/Clip0210T01.JPG",
          caption: "Pm Vishwakarma - Narasaraopeta - Clip0210T01"
        },
        {
          src: "/gallery/pm vishwakarma/Narasaraopeta/DSC00014.JPG",
          caption: "Pm Vishwakarma - Narasaraopeta - DSC00014"
        },
        {
          src: "/gallery/pm vishwakarma/Narasaraopeta/DSC00015.JPG",
          caption: "Pm Vishwakarma - Narasaraopeta - DSC00015"
        },
        {
          src: "/gallery/pm vishwakarma/Narasaraopeta/DSC00017.JPG",
          caption: "Pm Vishwakarma - Narasaraopeta - DSC00017"
        },
        {
          src: "/gallery/pm vishwakarma/Narasaraopeta/DSC00085.JPG",
          caption: "Pm Vishwakarma - Narasaraopeta - DSC00085"
        },
        {
          src: "/gallery/pm vishwakarma/Narasaraopeta/DSC00136.JPG",
          caption: "Pm Vishwakarma - Narasaraopeta - DSC00136"
        },
        {
          src: "/gallery/pm vishwakarma/Narasaraopeta/DSC00193.JPG",
          caption: "Pm Vishwakarma - Narasaraopeta - DSC00193"
        },
        {
          src: "/gallery/pm vishwakarma/Narasaraopeta/DSC00236.JPG",
          caption: "Pm Vishwakarma - Narasaraopeta - DSC00236"
        },
        {
          src: "/gallery/pm vishwakarma/Narasaraopeta/DSC00423.JPG",
          caption: "Pm Vishwakarma - Narasaraopeta - DSC00423"
        },
        {
          src: "/gallery/pm vishwakarma/Narasaraopeta/DSC00424.JPG",
          caption: "Pm Vishwakarma - Narasaraopeta - DSC00424"
        },
      ]
    },
  ];

  const activeEvent = eventsData.find((e) => e.id === activeEventId) || eventsData[0];

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % activeEvent.images.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + activeEvent.images.length) % activeEvent.images.length);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, activeEventId]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <PageBanner
        title="KRR Innovations in Action"
        breadcrumbs={[{ label: "Visual Showcase" }]}
        subtitle="Explore the records of our milestones, corporate meets, industrial trade fairs, and active training sessions."
      />

      {/* Gallery Split Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <TechBackground theme="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Panel: Event List */}
            <div className="lg:col-span-5 space-y-6">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
                  Events Portfolio
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mt-2">
                  Explore Events
                </h2>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                  Click on an event below to load its corresponding visual gallery and event records.
                </p>
              </div>

              <div className="space-y-4">
                {eventsData.map((evt) => {
                  const isActive = evt.id === activeEventId;
                  return (
                    <motion.div
                      key={evt.id}
                      onClick={() => {
                        setActiveEventId(evt.id);
                        setLightboxIndex(null);
                      }}
                      className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                        isActive
                          ? "bg-slate-900 text-white border-slate-900 shadow-xl"
                          : "bg-slate-50 text-slate-850 border-slate-200 hover:bg-slate-100/75 hover:border-slate-350"
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${
                          isActive 
                            ? "bg-white/10 text-secondary" 
                            : "bg-slate-200/60 text-slate-700"
                        }`}>
                          {evt.category}
                        </span>
                        <div className="flex items-center text-xs opacity-75">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          <span>{evt.date}</span>
                        </div>
                      </div>

                      <h3 className={`text-lg font-heading font-bold ${isActive ? "text-white" : "text-slate-900"}`}>
                        {evt.title}
                      </h3>
                      
                      <p className={`text-sm mt-2 line-clamp-2 ${isActive ? "text-slate-300" : "text-slate-600"}`}>
                        {evt.description}
                      </p>

                      <div className="flex items-center justify-end mt-4 pt-3 border-t border-dashed border-slate-200/20">
                        <span className={`text-xs font-semibold flex items-center space-x-1 transition-all duration-300 ${
                          isActive 
                            ? "text-secondary group-hover:translate-x-1" 
                            : "text-primary group-hover:text-primary-light group-hover:translate-x-1"
                        }`}>
                          <span>View Gallery</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Panel: Gallery Grid for Active Event */}
            <div className="lg:col-span-7 flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEventId}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Active Event Header Info */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm">
                    <span className="text-xs uppercase tracking-wider font-extrabold text-secondary">
                      Active Event Details
                    </span>
                    <h3 className="text-xl font-heading font-extrabold text-slate-900 mt-1">
                      {activeEvent.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                      {activeEvent.description}
                    </p>
                  </div>

                  {/* Image Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {activeEvent.images.map((img, index) => (
                      <motion.div
                        key={img.src}
                        onClick={() => setLightboxIndex(index)}
                        className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm aspect-square cursor-zoom-in"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-full h-full overflow-hidden bg-slate-150 relative">
                          {loadImages ? (
                            <>
                              <img 
                                src={img.src} 
                                alt={img.caption} 
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                              />
                              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-xs font-semibold tracking-wider uppercase bg-slate-950/60 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                  Zoom Image
                                </span>
                              </div>
                            </>
                          ) : (
                            <div className="w-full h-full bg-slate-100 animate-pulse flex items-center justify-center">
                              <span className="text-slate-400 text-xs">Loading...</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 z-[120] flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 border border-white/10 shadow-lg cursor-pointer z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors duration-300 border border-white/5 shadow-lg cursor-pointer z-40 hidden md:block"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Modal Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-4xl w-full flex flex-col items-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeEvent.images[lightboxIndex].src}
                alt={activeEvent.images[lightboxIndex].caption}
                className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl border border-white/10 object-contain"
              />
              
              <div className="text-center mt-6 space-y-2">
                <p className="text-white text-lg font-semibold tracking-wide">
                  {activeEvent.images[lightboxIndex].caption}
                </p>
                <p className="text-slate-400 text-sm">
                  {activeEvent.title} — Image {lightboxIndex + 1} of {activeEvent.images.length}
                </p>
              </div>
            </motion.div>

            {/* Right Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors duration-300 border border-white/5 shadow-lg cursor-pointer z-40 hidden md:block"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call To Action */}
      <CTA />
    </div>
  );
};

export default Gallery;
