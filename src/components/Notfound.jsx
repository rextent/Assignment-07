import React from 'react';
import { Link } from 'react-router';

const Notfound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-6">
            <div className="text-center max-w-lg">

                {/* 404 Number */}
                <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">
                    404
                </h1>

                {/* Glow effect */}
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 opacity-20 blur-2xl rounded-full"></div>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 mt-2">
                    Oops! The page you're looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="inline-block mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition duration-300"
                >
                    Go Back Home
                </Link>

            </div>
        </div>
    );
};

export default Notfound;