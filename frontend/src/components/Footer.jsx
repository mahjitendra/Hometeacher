import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-lg font-roboto">
          © {new Date().getFullYear()} HomeTeacher. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <i className="material-icons text-3xl">facebook</i>
          <i className="material-icons text-3xl">twitter</i>
          <i className="material-icons text-3xl">linkedin</i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
