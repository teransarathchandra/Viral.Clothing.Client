import styled from "styled-components";
import { motion } from "framer-motion";

interface HomeContainerProps {
  backgroundImage: string;
}

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
  margin: 0 3rem;
  grid-template-columns: repeat(3, 1fr); /* Two columns */
  gap: 60px; /* Adjust gap size as needed */
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  width: 400px;
  height: 600px;

  &:hover {
    img {
      transform: scale(1.1);
    }
    button {
      opacity: 1;
      /* transform: translateY(0); */
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
`;

export const QuickAddButton = styled.button`
  position: absolute;
  bottom: 50px;
  left: 50%;
  width: 60%;
  transform: translateX(-50%) translateY(20px);
  background-color: #000;
  color: #fff;
  padding: 15px 20px;
  border: none;
  border-radius: 50px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export const H1 = styled.h1`
  color: #000000;
  margin: 2rem 3rem 1rem 3rem;
  padding: 0 10px;
`;

export const ParentContainer = styled.div`
  margin: 2rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 150vh;
`;

export const LeftImageContainer = styled.div`
  flex: 2;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const RightContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: #f8f8f8;
  padding: 2rem;
  background-color: #141414;
`;

export const LatestDropHeading = styled.h1`
  color: #ffffff;
  margin: 0 2rem;
  font-size: 2.6rem;
`;

export const ShopButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin: 1rem 2rem;
  border-radius: 50px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #cccccc;
  }
`;