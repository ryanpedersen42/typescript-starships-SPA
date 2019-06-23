import * as React from 'react';

interface CardStatelessProps {
  name: string,
  model: string;
  manufacturer: string;
  cost_in_credits: number;
}

const Card: React.SFC<CardStatelessProps> = ({ name, model, manufacturer, cost_in_credits }) => {
  return (
    <div className='tc grow br3 pa3 bg-white ma2 dib bw2 shadow-5'>
      <div>
        <h2>Name: {name}</h2>
        <p>Model: {model}</p>
        <p>Manufacturer: {manufacturer}</p>
        <p>Cost: {cost_in_credits}</p>
      </div>
    </div>
  );
};

export default Card;