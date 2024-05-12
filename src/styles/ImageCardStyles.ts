import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
  width: 300px; /* Adjust width as needed */
  height: 400px; /* Adjust height as needed */
  margin: 20px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure image fills the card */
`;
