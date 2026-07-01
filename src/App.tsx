import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Ipr from "./pages/services/Ipr";
import Technology from "./pages/services/Technology";
import Events from "./pages/services/Events";
import Training from "./pages/services/Training";

// Visual fallback skeleton spinner for lazy-loaded transitions
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-50">
    <div className="relative">
      <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-primary animate-spin" />
      <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-secondary animate-ping" />
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vision-mission" element={<VisionMission />} />
            <Route path="industries" element={<Industries />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services/ipr" element={<Ipr />} />
            <Route path="services/technology" element={<Technology />} />
            <Route path="services/events" element={<Events />} />
            <Route path="services/training" element={<Training />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
