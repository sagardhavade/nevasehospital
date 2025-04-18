// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from "react";
import "./App.css";
import Header from "./components/Header"; // Adjust the path if necessary
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider";
import About from "./pages/About";
import Services from "./pages/Services"
import Pricing from "./pages/Pricing";
import Doctor from "./pages/Doctor";
import Gallary from "./pages/Gallary";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
// import PartnerSection from "./components/PartnerSection";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
       <ScrollToTop />
      <Header />
      {/* <Slider /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/gallary" element={ <Gallary />} />
        <Route path="/contact" element = { <ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
