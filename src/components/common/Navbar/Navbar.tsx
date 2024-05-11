import { Nav, Logo, NavLinks, NavLink } from '@styles/NavbarStyles';

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">VIRAL</Logo>
            <NavLinks>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </NavLinks>
        </Nav>
    )
};

export default Navbar;