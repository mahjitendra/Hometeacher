import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";
import CoursesPage from "../components/pages/CoursesPage";
import ContactPage from "../components/pages/ContactPage";

import Layout from "../layouts/Layout";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </Layout>
  );
};

export default AppRoutes;
