import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
    { name: "John Doe", text: "Great service! Highly recommended." },
    { name: "Jane Smith", text: "I found the perfect tutor for my child." },
    { name: "Mark Wilson", text: "A seamless experience from start to finish." },
];

const Testimonial = () => {
    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-2xl font-bold text-center mb-6">What Our Clients Say</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg p-6 m-4 rounded-lg transform hover:scale-105 transition-transform"
                    >
                        <p className="text-gray-600 italic">
                            <FaQuoteRight className="inline text-blue-500" />{" "}
                            {testimonial.text}
                        </p>
                        <p className="text-sm font-bold text-blue-600 mt-4">{testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
