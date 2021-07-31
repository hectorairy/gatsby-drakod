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
    changeNav()
    window.addEventListener("scroll", changeNav)
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
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={scroll} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={scroll} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={scroll} to="/">
                Home
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}
