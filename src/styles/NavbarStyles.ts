import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconContext, IconBaseProps } from "react-icons";
import { motion } from "framer-motion";

export const Nav = styled.nav`
  background: #121212;
  padding: 1rem 5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-family: "Ethnocentric", sans-serif;
  font-weight: bold;
  font-style: italic;
  letter-spacing: 5px;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const NavLinks = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  margin-left: 20px;
  padding: 0.5rem 0;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  font-family: "PT Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s ease-in-out;

  &:hover {
    background-size: 100% 2px;
  }
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

interface NavIconProps extends IconBaseProps {
  size?: string;
}

export const NavIcon = styled(IconContext.Provider) <NavIconProps>``;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  color: #ffffff;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNavLinks = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #121212;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;

  ${NavLink} {
    margin: 10px 0;
    font-size: 24px;
  }
`;
