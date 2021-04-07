import React, { useState } from "react";
import styled from "styled-components";
import { BiMenu, BiX } from "react-icons/bi";

const NavbarDiv = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4rem;
  color: #fff; 
`;

const Navlogo = styled.div`
  position: absolute;
  left: 0;
  font-size: 3rem;
  padding-left: 12rem;
  cursor: pointer;
  z-index: 999;

  @media (max-width: 768px){
  padding-left: 4rem;
  }
`;

const Navmenu = styled.div`
  position: absolute;
  right: 0;
  padding-right: 4rem;
  display: flex;
  transition: all 0.2s ease;

  @media only screen and (max-width: 768px){
    width: 100%;
    height: 100vh;
    background-color: #000;
    top: 0;
    left: ${({ click }) => click ? 0 : '-100%'};
    display: flex;
    align-items: center;
    padding-left: 4rem;
  }

`;

const MenuIcon = styled.div`
    display: none;
    z-index: 999;

@media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 10%);
    font-size: 4rem;
    cursor: pointer;
}
`;
const NavMenuItem = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: start;

  @media (max-width: 768px){
    flex-direction: column;
  }
`;
const NavMenuLink = styled.li`
  text-decoration: none;
  font-weight: bold;
  font-size: 16px; 
  display: inline-block;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: auto;
  cursor: pointer;
  transition: all 0.2s ease; 
  font-family: 'Josefin Sans', sans-serif;


  &::after {
  display: block;
  content: '';  
  border-bottom: 1px solid white; 
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}

&:hover::after{
  transform: scaleX(1);
}


  @media (max-width: 768px){
    padding: 2rem 0;
  }
`;
const Navbar = () => {

  const [click, setClick] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const handleClick = () => setClick(!click);

  const changeNavbarColor = () => {
    (window.scrollY > 80) ? setColorChange(true) : setColorChange(false);
  }

  window.addEventListener('scroll', changeNavbarColor);

  return (
    <NavbarDiv className={colorChange ? 'navbar colorChange' : 'navbar'}>
      <Navlogo>loopstudios</Navlogo>
      <MenuIcon onClick={handleClick}>
        {click ? <BiX /> : <BiMenu />}
      </MenuIcon>
      <Navmenu onClick={handleClick} click={click} >
        <NavMenuItem>
          <NavMenuLink>About</NavMenuLink>
          <NavMenuLink>Careers</NavMenuLink>
          <NavMenuLink>Events</NavMenuLink>
          <NavMenuLink>Products</NavMenuLink>
          <NavMenuLink>Support</NavMenuLink>
        </NavMenuItem>
      </Navmenu>
    </NavbarDiv>
  );
};

export default Navbar;
export { Navlogo, Navmenu, NavMenuItem, NavMenuLink };