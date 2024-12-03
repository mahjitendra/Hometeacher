import React from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />
      {/* Main Content Area */}
      <div className="flex flex-1">
        <main className="container mx-auto px-6 py-8 bg-white shadow-md rounded-lg">
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
