import React from 'react';

const WorkflowSection = () => {
 return (
   <div className="mt-20 ">
     <div className="bg-violet-600 py-10">
       <div className="py-10 items-center text-center">
         <h2 className="text-3xl font-bold text-white">
           Ready to Transform Your Workflow?
         </h2>
         <p className="text-white mt-4">
           Join thousands of professionals who are already using Digitools to
           work smarter. <br />
           Start your free trial today.
         </p>
       </div>

       <div className="items-center text-center">
         <div className="gap-10">
           <button className="btn rounded-full hover:bg-violet-400">
             Explore Products
           </button>
           <button className="btn bg-violet-600 text-white rounded-full hover:bg-violet-400">
             View Pricing
           </button>
         </div>
         <div>
           <p className="mt-2 text-white">
             14-day free trial • No credit card required • Cancel anytime
           </p>
         </div>
       </div>
     </div>
   </div>
 );
};

export default WorkflowSection;