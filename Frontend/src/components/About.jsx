import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 mt-10">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-pink-500">
          About Us
        </h1>

        {/* Introduction Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-pink-400">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to our online bookStore! We are passionate about making a
            wide range of books accessible to readers everywhere. Whether you’re
            looking for timeless classics, educational resources, or
            contemporary bestsellers, we aim to provide a convenient and
            enjoyable reading experience for book lovers of all ages.
          </p>
        </section>

        {/* Mission Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-pink-400">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to connect readers with books that inspire, educate,
            and entertain. We believe that reading should be accessible to
            everyone, so we offer a range of both free and premium books,
            allowing readers to choose from a variety of genres and formats to
            suit their needs and budgets.
          </p>
        </section>

        {/* Unique Features Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-pink-400">
            What We Offer
          </h2>
          <ul className="text-gray-300 list-disc list-inside space-y-2">
            <li>Free and paid books across various genres.</li>
            <li>In-browser reading experience for easy access anywhere.</li>
            <li>Special recommendations and curated collections.</li>
            <li>
              Frequent updates to our catalog with new releases and hidden gems.
            </li>
          </ul>
        </section>

        {/* Closing Statement */}
        <section className="text-center mt-10">
          <p className="text-gray-400">
            Thank you for being a part of our reading community. We look forward
            to helping you discover your next favorite book!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
