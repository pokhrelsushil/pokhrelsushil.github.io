import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/components/About";
import Education from "./pages/components/Education";
import Resources from "./pages/components/Resources";
import Contact from "./pages/components/Contact";
import News from "./pages/components/News";
import Experience from "./pages/components/Experience";

function App() {
  return (
    <BrowserRouter basename="/"> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
