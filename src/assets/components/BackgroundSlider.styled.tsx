import styled from 'styled-components';

interface ContainerProps {
  backgroundImage: any;
}

export const BackgroundContainerStyled = styled.div<ContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.backgroundImage}) center/cover no-repeat;
  transition: background 1s ease; // Smooth transition effect
`;
