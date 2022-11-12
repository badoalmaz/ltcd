import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import WhyUsPage from "./pages/WhyUsPage";
import WorksPage from "./pages/WorksPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/price" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/why-us" element={<WhyUsPage />} />
      <Route path="/works" element={<WorksPage />} />
    </Routes>
  );
};

export default MainRoutes;
