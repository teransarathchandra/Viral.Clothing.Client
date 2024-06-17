import styled from 'styled-components';
import { motion } from "framer-motion";

export const ImageGrid = styled.div`
  display: grid;
  margin: 0 3rem;
  grid-template-columns: repeat(4, 1fr); /* Two columns */
  gap: 20px; /* Adjust gap size as needed */
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  width: 250px;
  height: 400px;

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

type FlexContainerProps = {
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    rowGap?: string;
    columnGap?: string;
    margin?: string;
    padding?: string;
    width?: string;
};

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  row-gap: ${(props) => props.rowGap};
  column-gap: ${(props) => props.columnGap};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
`;

export const H1 = styled.h1`
  color: #000000;
  font-size: 2rem;
  font-weight: 700;
`;

export const H2 = styled.h2`
  color: #000000;
  font-size: 1.5rem;
  font-weight: 700;
`;