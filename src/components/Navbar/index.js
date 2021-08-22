import React, { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from "./NavbarElements"

const isBrowser = typeof window !== "undefined"

export const Navbar = () => {
  const [scroll, setScroll] = useState(0)
  const [click, setClick] = useState(0)

  const handleClick = () => setClick(!click)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(1)
    } else {
      setScroll(0)
    }
  }

  useEffect(() => {
    if (isBrowser) {
      changeNav()
      window.addEventListener("scroll", changeNav)
      return () => {
        window.removeEventListener("scroll", changeNav)
      }
    }
  }, [])

  return (
    <>
      <Nav active={scroll} click={click}>
        <NavbarContainer>
          <NavLogo active={scroll} to="/">
            <h1>DrakoD</h1>
          </NavLogo>
          <MobileIcon active={scroll} onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink active={scroll} to="/" activeClassName="active">
                Inicio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={scroll} to="/history" activeClassName="active">
                Nosotros
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={scroll} to="/services" activeClassName="active">
                Servicios
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink active={scroll} to="/portfolio" activeClassName="active">
                Portafolio
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink active={scroll} to="/contact" activeClassName="active">
                Contacto
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}
