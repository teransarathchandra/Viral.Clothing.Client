import {
  Nav,
  Logo,
  NavLinks,
  NavLink,
  NavIcons,
  NavIcon,
  HamburgerIcon,
  MobileNavLinks,
} from "@styles/NavbarStyles";
import { useState } from "react";
import { CiSearch, CiUser, CiShoppingCart, CiMenuBurger } from 'react-icons/ci';
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo to="/">VIRAL</Logo>
      <NavLinks>
        <NavLink to="/mens">Men's</NavLink>
        <NavLink to="/womens">Women's</NavLink>
        <NavLink to="/latest">Latest</NavLink>
      </NavLinks>
      <NavLinks>
        <NavIcons>
          <NavIcon value={{ size: '25px', style: { margin: '0 10px', cursor: 'pointer' } }}>
            <CiSearch />
          </NavIcon>
          <NavIcon value={{ size: '25px', style: { margin: '0 10px', cursor: 'pointer' } }}>
            <CiUser />
          </NavIcon>
          <NavIcon value={{ size: '25px', style: { margin: '0 10px', cursor: 'pointer' } }}>
            <CiShoppingCart />
          </NavIcon>
        </NavIcons>
      </NavLinks>
      <HamburgerIcon onClick={toggleMenu}>
        {isOpen ? <TfiClose size={24} style={{ position: "absolute", top: "20px", right: "30px", zIndex: 3, color: "#ffffff" }} /> : <CiMenuBurger size={24} />}
      </HamburgerIcon>
      {isOpen && (
        <MobileNavLinks
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <NavLink onClick={toggleMenu} to="/mens">Men's</NavLink>
          <NavLink onClick={toggleMenu} to="/womens">Women's</NavLink>
          <NavLink onClick={toggleMenu} to="/latest">Latest</NavLink>
          <NavIcon value={{ size: '24px', style: { margin: '10px 0', cursor: 'pointer' } }}>
            <CiSearch />
          </NavIcon>
          <NavIcon value={{ size: '24px', style: { margin: '10px 0', cursor: 'pointer' } }}>
            <CiUser />
          </NavIcon>
          <NavIcon value={{ size: '24px', style: { margin: '10px 0', cursor: 'pointer' } }}>
            <CiShoppingCart />
          </NavIcon>
        </MobileNavLinks>
      )}
    </Nav>
  );
};

export default Navbar;
