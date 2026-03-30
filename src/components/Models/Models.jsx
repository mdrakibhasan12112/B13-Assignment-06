import React, { use } from 'react';
import ModelCard from '../ModelCard/ModelCard';

const Models = ({ modelsPromise,cards,setCards }) => {
  const models = use(modelsPromise);

  return (
    <div className="w-[86%] mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {models.map(model => (
          <ModelCard
            key={model.id}
            model={model}
            cards={cards}
            setCards={setCards}
          ></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default Models;
