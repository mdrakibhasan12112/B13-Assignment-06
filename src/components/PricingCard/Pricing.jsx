import React from 'react';
import { IoCheckmark } from 'react-icons/io5';

const Pricing = () => {
  return (
    <div className="w-[86%] mx-auto">
      <div className=" items-center text-center py-8">
        <h3 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h3>
        <p>
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <div className="shadow-lg p-4 space-y-4 border rounded-lg border-zinc-200">
          <h3 className="text-xl font-semibold">Starter</h3>
          <p>Perfect for getting started</p>
          <h2 className="text-2xl font-bold">
            $0 <span className="font-normal">/Month</span>
          </h2>
          <div className="flex flex-col gap-2">
            <a className="flex items-center gap-1" href="">
              <span className="text-green-500">
                {' '}
                <IoCheckmark />
              </span>{' '}
              Access to 10 free tools
            </a>

            <a className="flex items-center gap-1" href="">
              {' '}
              <span className="text-green-500">
                {' '}
                <IoCheckmark />
              </span>{' '}
              Basic templates
            </a>

            <a className="flex items-center gap-1" href="">
              {' '}
              <span className="text-green-500">
                {' '}
                <IoCheckmark />
              </span>{' '}
              Community support
            </a>

            <a className="flex items-center gap-1" href="">
              {' '}
              <span className="text-green-500">
                {' '}
                <IoCheckmark />
              </span>{' '}
              1 project per month
            </a>
          </div>
          <button className="btn bg-violet-600 text-white w-full rounded-full">
            Get Started Free
          </button>
        </div>

        <div className=" relative shadow-lg p-4 space-y-4 border rounded-lg border-zinc-200 bg-violet-600 text-white py-12">
          <span className='absolute -top-5 right-35 bg-yellow-200 rounded-full p-2 text-red-400'>Most Popular</span>
          <h3 className="text-xl font-semibold">Pro</h3>
          <p>Best for professionals</p>
          <h2 className="text-2xl font-bold">
            $29 <span className="font-normal">/Month</span>
          </h2>
          <div className="flex flex-col gap-2">
            <a className="flex items-center gap-1" href="">
              <span className="text-white font-bold">
                {' '}
                <IoCheckmark />
              </span>{' '}
              Access to all premium tools
            </a>

            <a className="flex items-center gap-1" href="">
              {' '}
              <span className="text-white">
                {' '}
                <IoCheckmark />
              </span>{' '}
              Unlimited templates
            </a>

            <a className="flex items-center gap-1" href="">
              {' '}
              <span className="text-white">
                {' '}
                <IoCheckmark />
              </span>{' '}
              Priority support
            </a>

            <a className="flex items-center gap-1" href="">
              {' '}
              <span className="text-white">
                {' '}
                <IoCheckmark />
              </span>{' '}
              Unlimited projects
            </a>
            <a className="flex items-center gap-1" href="">
              {' '}
              <span className="text-white">
                {' '}
                <IoCheckmark />
              </span>{' '}
              Cloud sync
            </a>

            <a className="flex items-center gap-1" href="">
              {' '}
              <span className="text-white">
                {' '}
                <IoCheckmark />
              </span>{' '}
              Advanced analytics
            </a>
          </div>
          <button className="btn w-full rounded-full">Start Pro Trial</button>
        </div>

        <div className="shadow-lg p-4 space-y-4 border rounded-lg border-zinc-200">
          <h3 className="text-xl font-semibold">Enterprise</h3>
          <p>For teams and businesses</p>
          <h2 className="text-2xl font-bold">
            $99 <span className="font-normal">/Month</span>
          </h2>
          <div className="flex flex-col gap-2">
            <a className="flex items-center gap-1" href="">
              <span className="text-green-500">
                {' '}
                <IoCheckmark />
              </span>{' '}
              Everything in Pro
            </a>

            <a className="flex items-center gap-1" href="">
              {' '}
              <span className="text-green-500">
                {' '}
                <IoCheckmark />
              </span>{' '}
              Team collaboration
            </a>

            <a className="flex items-center gap-1" href="">
              {' '}
              <span className="text-green-500">
                {' '}
                <IoCheckmark />
              </span>{' '}
              Custom integrations
            </a>

            <a className="flex items-center gap-1" href="">
              {' '}
              <span className="text-green-500">
                {' '}
                <IoCheckmark />
              </span>{' '}
              Dedicated support
            </a>
            <a className="flex items-center gap-1" href="">
              {' '}
              <span className="text-green-500">
                {' '}
                <IoCheckmark />
              </span>{' '}
              SLA guarantee
            </a>
            <a className="flex items-center gap-1" href="">
              {' '}
              <span className="text-green-500">
                {' '}
                <IoCheckmark />
              </span>{' '}
              Custom branding
            </a>
          </div>
          <button className="btn bg-violet-600 text-white w-full rounded-full">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
