import React from "react";

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Transform Your Business with [Your Company Name]</h1>
          <p className="text-xl mb-8">
            Innovative IT staffing solutions tailored for your success.
          </p>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">IT Staffing</h3>
                <p>
                  Providing top-tier IT professionals to drive your business forward.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Consulting</h3>
                <p>
                  Expert guidance to navigate the complexities of the tech landscape.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Project Management</h3>
                <p>
                  Ensuring timely and efficient delivery of your critical projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="italic">
                  "The team at [Your Company Name] exceeded our expectations with their professionalism and expertise."
                </p>
                <p className="mt-4 font-semibold">- Client Name</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="italic">
                  "Their IT staffing solutions helped us achieve our business goals efficiently."
                </p>
                <p className="mt-4 font-semibold">- Client Name</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Your Message"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
} 