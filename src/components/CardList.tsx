import * as React from 'react';
import Card from './Card';
import { IShips } from '../containers/App'

const CardList = ({ starships }: {starships: Array<IShips>}) => {
  return (
    <div>
      {
        starships.map((user, i) => {
          return (
            <Card
              key={i}
              name={starships[i].name}
              model={starships[i].model}
              manufacturer={starships[i].manufacturer}
              cost_in_credits={starships[i].cost_in_credits}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;