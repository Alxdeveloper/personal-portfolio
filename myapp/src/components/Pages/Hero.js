import React from "react";
import KROIMG from '../../assets/images/KRO.jpg'

const Hero = () => {
  return (
    <section className= "text-dark">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empowering Members
          </h1>
          <p className="text-lg mb-6">
            Manage contributions, track disbursements, and ensure transparency
            with our easy-to-use welfare management platform.
          </p>
          <div className="space-x-4">
            <a
              href="/member"
              className="px-6 py-3 text-black bg-primary rounded-md text-lg font-medium hover:bg-secondary"
            >
              Get Started
            </a>
            <a
              href="/member"
              className="px-6 py-3 border bg-primary border-white text-white rounded-md text-lg font-medium hover:bg-secondary"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src= {KROIMG}// Replace with your image URL
            alt="Hero illustration"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
