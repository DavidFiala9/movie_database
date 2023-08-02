import React, { useEffect, useState } from 'react';
import { Movies } from '../data/movies';
import { Plc, TileContainer } from './tile.styled';

type TileParameter = {
  text?: string;
};

interface Movie {
  name: string;
  releaseDate: number;
}

const Tile: React.FC<TileParameter> = () => {
  const plc = 'ahoj';

  useEffect(() => {
    console.log('asfqwfqwq' + { plc });
    console.log(`asfqwf ${plc}`);
  }, []);

  return (
    <div>
      <Plc>
        <TileContainer>
          {Movies.map((movie: Movie) => (
            <div className="tile">
              <div className="tileHeader">{movie.name}</div>
              <div>{movie.releaseDate}</div>
            </div>
          ))}
        </TileContainer>
      </Plc>
    </div>
  );
};

export default Tile;
