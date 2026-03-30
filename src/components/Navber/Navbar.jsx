import React from 'react';
import cardImg from '../../assets/shopping-cart.png';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm w-[86%] justify-between text-center mx-auto">
      <div className="">
        <p className="text-purple-600 text-4xl font-bold">DigiTools</p>
      </div>

      <div>
        <ul className="flex gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>

      <div className="flex justify-between gap-5 items-center">
        <img src={cardImg} alt="" />
        <p>Login</p>
        <button className="btn bg-violet-600 border-none rounded-full text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
