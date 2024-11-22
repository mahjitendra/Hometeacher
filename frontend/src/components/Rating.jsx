import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ maxRating = 5, onRate }) => {
    const [rating, setRating] = useState(0);

    const handleRating = (index) => {
        setRating(index + 1);
        if (onRate) onRate(index + 1);
    };

    return (
        <div className="flex items-center space-x-1">
            {[...Array(maxRating)].map((_, index) => (
                <FaStar
                    key={index}
                    className={`cursor-pointer ${
                        index < rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                    onClick={() => handleRating(index)}
                />
            ))}
        </div>
    );
};

export default Rating;
