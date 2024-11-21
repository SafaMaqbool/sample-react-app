import React from "react";

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Get in Touch
              <span className="hidden sm:block text-4xl">
                We’d Love to Hear from You
              </span>
            </h2>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
          <img
            className="w-96"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid place-items-center sm:mt-20">
        <form className="bg-white shadow-lg rounded-lg px-8 py-8 w-full sm:w-1/2 space-y-6">
          <h1 className="text-center text-2xl sm:text-4xl font-bold text-gray-800">
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
