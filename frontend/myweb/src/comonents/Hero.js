import React from 'react';
import HeroImg from '../assets/images/heros.jpg'

const Hero = () => {
  return (
    <div className="bg-dark text-white text-center py-5">
      <img
        src={HeroImg}
        alt=""
        className="mx-auto mb-4 rounded-circle img-fluid"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <h1 className="display-4 fw-bold">
        I'm{' '}
        <span
          className="text-gradient"
          style={{
            background: 'linear-gradient(to right, #32cd32, #1e90ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Denis Murangiri
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-3  fs-5">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-4">
        <button
          className="btn btn-primary me-2"
          style={{
            background: 'linear-gradient(to right, #32cd32, #1e90ff)',
            border: 'none',
          }}
        >
          Contact With Me
        </button>
        <button
          className="btn btn-warning"
          style={{
            background: 'linear-gradient(to right, #ff69b4, #ffd700)',
            border: 'none',
          }}
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
