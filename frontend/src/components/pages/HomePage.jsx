import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to HomeTeacher</h1>
        <p className="mt-4 text-lg">Empowering education with modern technology.</p>
      </header>

      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Interactive Courses</h3>
            <p className="text-gray-600">Learn at your own pace with personalized lessons.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
            <p className="text-gray-600">Get guidance from certified professionals.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">Fit learning into your busy lifestyle.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
