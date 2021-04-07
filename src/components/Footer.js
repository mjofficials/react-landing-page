import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: #000;
  text-align: center;
  @media only screen and (min-width: 768px) {
    padding: 12rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const FooterLogo = styled.div`
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    text-align: start;
  }
`;
const FooterMenu = styled.div`
  position: relative;
  color: #fff;
`;
const FooterMenuItem = styled.ul`
  position: relative;
  padding: 0;
  margin: 0;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;
const FooterMenuLink = styled.li`
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  padding: 1rem 2rem;
  height: auto;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: "Josefin Sans", sans-serif;
 
  &::after {
  display: block;
  content: '';  
  border-bottom: 1px solid white; 
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}

&:hover::after{
  transform: scaleX(0.1);
}

  @media only screen and (min-width: 768px) {
    padding: 1rem 5rem 0 0;

    &:hover::after{
    transform: scaleX(1);
}
  }
`;

const FooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FooterIcon = styled.i`
  color: #fff;
  padding: 0 1rem; 

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
`;

const FooterCopyright = styled.p`
  color: hsl(0, 0%, 55%);
`;
const Footer = () => {
  return (
    <FooterDiv className="py-5">
      <div>
        <FooterLogo className="py-3">loopstudios</FooterLogo>
        <FooterMenu>
          <FooterMenuItem>
            <FooterMenuLink>About</FooterMenuLink>
            <FooterMenuLink>Careers</FooterMenuLink>
            <FooterMenuLink>Events</FooterMenuLink>
            <FooterMenuLink>Products</FooterMenuLink>
            <FooterMenuLink>Support</FooterMenuLink>
          </FooterMenuItem>
        </FooterMenu>
      </div>
      <div className='d-lg-flex flex-column align-items-end justify-content-end' >
        <FooterIcons className="py-4">
          <FooterIcon className="footer-icon fa fa-2x fa-facebook-square"></FooterIcon>
          <FooterIcon className="footer-icon fa fa-2x fa-twitter"></FooterIcon>
          <FooterIcon className="footer-icon fa fa-2x fa-pinterest-p"></FooterIcon>
          <FooterIcon className="footer-icon fa fa-2x fa-instagram"></FooterIcon>
        </FooterIcons>
        <FooterCopyright>
          ©2021 Loopstudios. All rights reserved.
        </FooterCopyright>
      </div>
    </FooterDiv>
  );
};

export default Footer;
