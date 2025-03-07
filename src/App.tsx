

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Testimonials from "./pages/Testimonials";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
