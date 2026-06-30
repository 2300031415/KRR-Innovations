import React, { useEffect, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Inline clean page loader for subpages
const ViewportLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] bg-slate-50/50">
    <div className="relative">
      <div className="w-10 h-10 rounded-full border-4 border-slate-200 border-t-primary animate-spin" />
      <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-secondary animate-ping" />
    </div>
  </div>
);

export const RootLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 15,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -15,
    },
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.4,
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Suspense fallback={<ViewportLoader />}>
              <Outlet />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
