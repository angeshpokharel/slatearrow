import React from "react";

export function Industries() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Industries We Serve</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Finance</h2>
              <p>Delivering IT solutions for the financial sector.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Healthcare</h2>
              <p>Innovative technology for healthcare providers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 