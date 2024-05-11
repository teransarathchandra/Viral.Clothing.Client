import styled from 'styled-components';

interface HomeContainerProps {
    backgroundImage: string;
}

export const HomeContainer = styled.div<HomeContainerProps>`
  background-image: url(${({ backgroundImage }) => backgroundImage}); // Use prop for image
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;