import styled from "@emotion/styled"
import { Link } from "gatsby"

export const Nav = styled.nav`
  background-color: ${({ active }) => (active ? "#ffffff" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 500;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: ${({ active }) =>
    active ? "0px 8px 35px 0px rgb(131 56 236 / 20%)" : "none"};
  transition: all 0.2s ease;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
`

export const NavLogo = styled(Link)`
  color: ${({ active }) => (active ? "#8338ec" : "#ffffff")};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin: 0 0.5rem 0 2rem;
`
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    color: ${({ active }) => (active ? "#8338ec" : "#ffffff")};

    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 85%);
    font-size: 2rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.4s ease;
    background-color: #ffffff;
  }
`

export const NavItem = styled.li`
  height: 80px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavLink = styled(Link)`
  color: ${({ active }) =>
    active ? "rgba(52, 58, 64, 0.8)" : "rgba(255, 255, 255, 0.6)"};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &.active {
    color: ${({ active }) => (active ? "#8338EC" : "#ffffff")};
  }

  &:hover {
    color: ${({ active }) => (active ? "#8338EC" : "#ffffff")};
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 960px) {
    color: rgba(52, 58, 64, 0.8);
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &.active {
      color: #8338ec;
      font-weight: bold;
    }
  }
`
