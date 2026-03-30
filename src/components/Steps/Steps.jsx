import React from 'react';
import img1 from '../../assets/user.png';
import img2 from '../../assets/package.png';
import img3 from '../../assets/rocket.png';

const Steps = () => {
  return (
    <div className="w-[86%] mx-auto py-10">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-5">Get Started in 3 Steps</h3>
        <p>Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <div className="relative flex flex-col shadow-lg items-center text-center p-4 space-y-4 border rounded-lg border-zinc-200">
          <p className="absolute top-2 right-2 bg-violet-600 text-white  w-10 h-10 flex items-center justify-center rounded-full">
            01
          </p>
          <img
            className="bg-violet-200 rounded-full p-2 mt-8"
            src={img1}
            alt=""
          />
          <h5 className="text-xl font-semibold">Create Account</h5>
          <p>
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="relative flex flex-col shadow-lg items-center text-center p-4 space-y-4 border rounded-lg border-zinc-200">
          <p className="absolute top-2 right-2 bg-violet-600 text-white  w-10 h-10 flex items-center justify-center rounded-full">
            02
          </p>
          <img
            className="bg-violet-200 rounded-full p-2 mt-8"
            src={img2}
            alt=""
          />
          <h5 className="text-xl font-semibold">Choose Products</h5>
          <p>Browse our catalog and select the tools that fit your needs.</p>
        </div>

        <div className="relative flex flex-col shadow-lg items-center text-center p-4 space-y-4 border rounded-lg border-zinc-200">
          <p className="absolute top-2 right-2 bg-violet-600 text-white  w-10 h-10 flex items-center justify-center rounded-full">
            03
          </p>
          <img
            className="bg-violet-200 rounded-full p-2 mt-8"
            src={img3}
            alt=""
          />
          <h5 className="text-xl font-semibold">Start Creating</h5>
          <p>Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
