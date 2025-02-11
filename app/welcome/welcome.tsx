import React from "react";
import { Link } from "react-router-dom";
import { Services } from "../services";
import { Industries } from "../industries";
import { Insights } from "../insights";
import { About } from "../about";
import { Careers } from "../careers";
import { Contact } from "../contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function Welcome() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold">[SlateArrow Logo]</div>
          <ul className="flex space-x-6">
            <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
            <li><Link to="/industries" className="hover:text-blue-500">Industries</Link></li>
            <li><Link to="/insights" className="hover:text-blue-500">Insights</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            <li><Link to="/careers" className="hover:text-blue-500">Careers</Link></li>
            <li><Link to="/contact" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full">Contact Us</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Transform Your Business with SlateArrow</h1>
          <p className="text-xl mb-8">
            Innovative IT staffing solutions tailored for your success.
          </p>
          <Link
            to="/contact"
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Banner Section */}
      <section className="bg-blue-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to SlateArrow</h2>
          <p className="text-lg">
            We are a leading IT staffing company providing top-notch solutions to meet your business needs.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="flex flex-wrap -mx-4 text-center">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">500+</h3>
                <p>Clients Served</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">1000+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">2000+</h3>
                <p>IT Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
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
                  "The team at SlateArrow exceeded our expectations with their professionalism and expertise."
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