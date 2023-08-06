import { styled } from 'styled-components';

export const TileHeader = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const SingleTile = styled.span`
  color: #ffffff;
  font-weight: bold;
  background-color: #640026;
  margin: 15px;
  min-height: 100px;
  width: 200px;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.9;
`;

export const TileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 15px;

  & :hover {
    background-color: #9a003b;
    cursor: pointer;
  }
`;

export const TileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
