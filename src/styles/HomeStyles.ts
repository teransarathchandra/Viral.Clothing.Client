import styled from "styled-components";
import { motion } from "framer-motion";

interface HomeContainerProps {
  backgroundImage: string;
}

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const BackgroundImage = styled(motion.div) <HomeContainerProps>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

export const ImageGrid = styled.div`
  display: grid;
  justify-items: center;
  margin: 5rem 5rem;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  row-gap: 60px; /* Adjust gap size as needed */
`;

export const ImageContainer = styled(motion.div)`
  overflow: hidden;
  border-radius: 8px;
  width: 600px;  // Fixed width
  height: 600px; // Fixed height

  &:hover {
    img {
      transform: scale(1.1); // Zoom on hover
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out; // Smooth transition for hover effect
`;
