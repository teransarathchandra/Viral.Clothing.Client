import {
  Nav,
  Logo,
  NavLinks,
  NavLink,
  NavIcons,
  NavIcon,
} from "@styles/NavbarStyles";
import {
  faMagnifyingGlass,
  faCircleUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

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
          <NavIcon icon={faMagnifyingGlass} />
          <NavIcon icon={faCircleUser} />
          <NavIcon icon={faCartShopping} />
        </NavIcons>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
