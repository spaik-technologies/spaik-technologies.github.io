import React from "react";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavLogoImg,
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  DropdownLink
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import spaikLogo from "../../images/logo-spaik-green-black.svg";
import { ButtonS } from "../ButtonElement";

const NavLinksWithScroll = (props) => (
  <NavLinks
    {...props}
    smooth={true}
    duration={500}
    spy={true}
    exact="true"
    offset={-80}
  />
);

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = React.useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* <IconContext provider={{ color: '#fff' }}> */}
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          {/* <NavLogo to="/" onClick={toggleHome}>Spaik</NavLogo> */}
          <NavLogoImg
            onClick={toggleHome}
            src={spaikLogo}
            alt="Spaik Logo"
            scrollNav={scrollNav}
          />
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
        <NavMenu>
          <NavItem>
            <DropdownContainer>
              <DropdownButton>Apps</DropdownButton>
              <DropdownMenu>
                <DropdownItem>
                  <DropdownLink to="/western-blot">Western-Blot App</DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLink to="/page2">Page 2</DropdownLink>
                </DropdownItem>
              </DropdownMenu>
            </DropdownContainer>
          </NavItem>
          <NavItem>
            <NavLinksWithScroll to="anomaly-detection">
              Anomaly detection
            </NavLinksWithScroll>
          </NavItem>
          <NavItem>
            <NavLinksWithScroll to="clinical-analysis">
              Clinical analysis
            </NavLinksWithScroll>
          </NavItem>
          <NavItem>
            <NavLinksWithScroll to="synthetic-data">
              Synthetic data creation
            </NavLinksWithScroll>
          </NavItem>
          <NavItem>
            <NavLinksWithScroll to="spiking-networks">
              Spiking neural networks
            </NavLinksWithScroll>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <ButtonS
            to="footer"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact us
          </ButtonS>
        </NavBtn>
      </Nav>
      {/* </IconContext> */}
    </>
  );
};

export default Navbar;
