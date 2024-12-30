"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "./animation";
import Stars from "./stars";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <motion.div
      id="contactUs"
      className="relative flex justify-center items-center min-h-screen p-6"
      variants={staggerContainer(0.2, 0.5)}
      initial="hidden"
      animate="show"
    >
    <Stars />
      <motion.div
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg"
        variants={slideIn("up", "spring", 0.2, 1)}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-200"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-transform"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
