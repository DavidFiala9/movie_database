import { Movies } from '../../data/MovieData';
import {
  SingleTile,
  TileContainer,
  TileHeader,
  TileWrapper,
} from './Tile.styled';

type TileParameter = {
  text?: string;
};

interface Movie {
  name: string;
  releaseDate: number;
}

const Tile: React.FC<TileParameter> = () => {
  return (
    <TileWrapper>
      <TileContainer>
        {Movies.map((movie: Movie) => (
          <SingleTile>
            <TileHeader>{movie.name}</TileHeader>
            <div>({movie.releaseDate})</div>
          </SingleTile>
        ))}
      </TileContainer>
    </TileWrapper>
  );
};

export default Tile;
