import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchFilter = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        if (onSearch) onSearch(searchTerm);
    };

    return (
        <div className="flex items-center space-x-2 p-4">
            <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 flex-grow"
                placeholder="Search for tutors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchFilter;
