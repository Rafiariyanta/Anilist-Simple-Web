import { useState } from "react";
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
  } from './newNavbarElements'
  import LogoImg from "../../assets/defaultImage.jpg";

  const NewNavbar = () => {
    const [extendNavbar, setExtendNavbar] = useState(false);
    return ( 
<NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> HOME</NavbarLink>
            <NavbarLink to="/Collection"> COLLECTION</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo>ANIME FIRST</Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/" onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/Collection" onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}> Collection</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
     );
  }
   
  export default NewNavbar;