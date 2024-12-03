import React from "react";

const TutorCard = ({ name, subject, rating, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="rounded-full w-24 h-24 mx-auto border-4 border-purple-500"
      />
      <h2 className="text-2xl font-bold mt-4 text-center font-roboto">{name}</h2>
      <p className="text-center text-gray-600">{subject}</p>
      <div className="flex justify-center mt-2">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`material-icons ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            star
          </i>
        ))}
      </div>
      <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700">
        View Profile
      </button>
    </div>
  );
};

export default TutorCard;
