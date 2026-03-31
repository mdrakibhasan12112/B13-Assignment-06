import React from 'react';
import cardImg from '../../assets/shopping-cart.png';

const Navbar = ({cards}) => {
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

      <div className=" relative flex justify-between gap-5 items-center">
        <img className="w-[30px]" src={cardImg} alt="" />

        {cards.length > 0 && (
          <span className="absolute -top-1 right-43  bg-red-500 text-white text-xs px-2 rounded-full">
            {cards.length}
          </span>
        )}
        <p>Login</p>
        <button className="btn bg-violet-600 border-none rounded-full text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
