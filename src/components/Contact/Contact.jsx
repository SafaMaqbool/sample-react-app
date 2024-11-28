import React from "react";

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      {/* Hero Section */}
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-8 sm:space-y-0">
          {/* Image Section */}
          <div className="flex justify-center items-center w-full sm:w-1/2">
            <img
              className="w-72 sm:w-96 mx-auto object-contain"
              src="https://i.ibb.co/5BCcDYB/Remote2.png"
              alt="Contact Illustration"
            />
          </div>
          {/* Text Section */}
          <div className="relative z-10 w-full sm:w-1/2 text-center sm:text-right sm:pl-10">
            <h2 className="text-3xl font-bold sm:text-5xl">
              Get in Touch
              <span className="block sm:inline text-xl sm:text-4xl">
                {" "}
                We’d Love to Hear from You
              </span>
            </h2>
          </div>
        </div>
      </aside>

      {/* Contact Form */}
      <div className="grid place-items-center mt-10 sm:mt-20">
        <form className="bg-white shadow-lg rounded-lg px-6 py-8 w-full max-w-lg space-y-6">
          <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-800">
            Contact Us
          </h1>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 font-medium text-white bg-orange-700 rounded-lg hover:opacity-75"
          >
            Send Message
          </button>
        </form>
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Let’s Stay Connected
      </h1>
    </div>
  );
}
