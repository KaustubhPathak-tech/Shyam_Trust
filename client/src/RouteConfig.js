import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import ResponsiveAppBar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import About from "./Pages/About/About.jsx";
import Partner from "./Pages/Partner/Partner.jsx";
import ScrolltoTop from "./Components/ScrolltoTop.js";

const RouteConfig = () => {
  return (
    <BrowserRouter>
    <ScrolltoTop />
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-team" element={<Partner />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteConfig;
