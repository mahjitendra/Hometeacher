import React from "react";

const CoursesPage = () => {
  const courses = [
    { id: 1, title: "Mathematics 101", description: "Master basic and advanced math concepts." },
    { id: 2, title: "Science for Beginners", description: "Explore the wonders of the natural world." },
    { id: 3, title: "Creative Writing", description: "Unleash your creativity through writing." },
  ];

  return (
    <div className="bg-white py-16 px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-gray-50 p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
