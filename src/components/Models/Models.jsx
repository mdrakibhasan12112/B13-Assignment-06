import React, { use } from 'react';

const Models = ({ modelsPromise }) => {
  const models = use(modelsPromise);
  console.log(models);
  return (
    <div className="w-[86%] mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {models.map(model => (
          <div className="shadow-lg rounded-lg border p-4 border-zinc-300">
            <div>
              <div className="flex justify-between mb-5">
                <img src={model.icon} alt="" />
                <p>{model.tag}</p>
              </div>
              <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
              <p>{model.description}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mt-2">
                ${model.price}/
                <span className="text-xl font-normal">{model.period}</span>
              </h3>
              <div className="space-y-2 mt-4">
                {model.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-green-700">✔</span>
                    <p>{feature}</p>
                  </div>
                ))}
                <button className="btn w-full bg-violet-600 border-none rounded-full text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
