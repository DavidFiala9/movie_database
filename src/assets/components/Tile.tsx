import { Movies } from '../data/Movies';
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
            <TileHeader>
              <div className="tileHeader">{movie.name}</div>
            </TileHeader>
            <div>({movie.releaseDate})</div>
          </SingleTile>
        ))}
      </TileContainer>
    </TileWrapper>
  );
};

export default Tile;
