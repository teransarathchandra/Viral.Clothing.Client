import {
  Nav,
  Logo,
  NavLinks,
  NavLink,
  NavIcons,
  NavIcon,
} from "@styles/NavbarStyles";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
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
          <NavIcon value={{ size: '24px', style: { margin: "0 10px", cursor: "pointer" } }}>
            <CiSearch />
          </NavIcon>
          <NavIcon value={{ size: '24px', style: { margin: "0 10px", cursor: "pointer" } }}>
            <CiUser />
          </NavIcon>
          <NavIcon value={{ size: '24px', style: { margin: "0 10px", cursor: "pointer" } }}>
            <CiShoppingCart />
          </NavIcon>
        </NavIcons>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
