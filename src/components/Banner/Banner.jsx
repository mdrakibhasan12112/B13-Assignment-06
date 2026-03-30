import React from 'react';
import BannerImage from '../../assets/banner.png'
import { IoPlayOutline } from 'react-icons/io5';

const Banner = () => {
 return (
   <div className="  ">
     <div className="w-[86%] mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
       {/* Left Content */}
       <div className="space-y-4">
         <div className="inline-flex items-center gap-2 bg-purple-100  text-purple-600 text-sm font-medium px-5 py-2 rounded-full">
           New: AI-Powered Tools Available
         </div>

         <h1 className="text-4xl lg:text-5xl font-bold">
           Supercharge Your
           <br />
           Digital Workflow.
         </h1>

         <p className="text-lg text-zinc-700 max-w-lg">
           Access premium AI tools, design assets, templates, and productivity
           software—all in one place. Start creating faster today. Explore
           Products
         </p>

         <div className="flex flex-wrap gap-4 pt-4">
           <button className="btn bg-violet-600 border-none rounded-full text-white">
             {' '}
             Explore Products
           </button>
           <button className="btn border-purple-400 rounded-full text-purple-600 hover:bg-violet-600">
             {' '}
             <IoPlayOutline />
             Watch Demo
           </button>
         </div>
       </div>

       {/* Right Image */}
       <div className="relative flex justify-center lg:justify-end">
         <div className="relative">
           <img
             className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
             src={BannerImage}
             alt=""
           />
         </div>
       </div>
     </div>
   </div>
 );
};

export default Banner;