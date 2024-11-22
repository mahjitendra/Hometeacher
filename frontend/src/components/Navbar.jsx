import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold font-roboto">HomeTeacher</h1>
        <ul className="flex space-x-6 text-lg">
          <li><a href="/" className="hover:text-yellow-300">Home</a></li>
          <li><a href="/about" className="hover:text-yellow-300">About</a></li>
          <li><a href="/find-tutor" className="hover:text-yellow-300">Find Tutor</a></li>
          <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
        <button className="bg-yellow-300 text-black px-4 py-2 rounded hover:scale-105 transition-transform">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
