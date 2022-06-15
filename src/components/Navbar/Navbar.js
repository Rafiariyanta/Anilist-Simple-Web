import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
  } from './NavbarElements';

const Navbar = () => {
    return (
        <Nav>
        <NavLink to='/'>
          <h1>ANIME FIRST</h1>
        </NavLink>
        <Bars onClick={() => console.log("clicked")}/>
        <NavMenu>
          <NavLink to='/' activeStyle>
            HOME
          </NavLink>
          <NavLink to='/collection' activeStyle>
            COLLECTION
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    );
}

export default Navbar;