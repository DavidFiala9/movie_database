import { styled } from 'styled-components';

export const TileHeader = styled.div`
  font-size: 20px;
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
`;

export const TileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
`;

export const TileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
