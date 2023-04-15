import React from 'react'
import { 
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavLogoImg
 } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import spaikLogo from '../../images/logo_spaik_02.png'
import { ButtonS } from '../ButtonElement'

const Navbar = ({ toggle }) => {

  const [scrollNav, setScrollNav] = React.useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  return (
    <>
      {/* <IconContext provider={{ color: '#fff' }}> */}
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          {/* <NavLogo to="/" onClick={toggleHome}>Spaik</NavLogo> */}
          <NavLogoImg onClick={toggleHome} src={spaikLogo} alt="Spaik Logo" scrollNav={scrollNav}/>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
        <NavMenu>
          <NavItem>
            <NavLinks 
              to='anomaly-detection'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >Anomaly detection</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              to='clinical-analysis'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >Clinical analysis</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              to='synthetic-data'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >Synthetic data creation</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              to='spiking-networks'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >Spiking neural networks</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <ButtonS 
            to="footer"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >Contact us</ButtonS>
        </NavBtn>
      </Nav>
      {/* </IconContext> */}
    </>
  )
}

export default Navbar