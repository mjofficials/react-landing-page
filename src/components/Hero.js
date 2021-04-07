import React from "react";
import styled from "styled-components";
import HeroBg from "../assets/images/desktop/image-hero.jpg";

const HeroDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  background-image: url(${HeroBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-left: 12rem;

  @media only screen and (max-width: 425px) {
    padding: 0 2rem;
    justify-content: center;
    align-items: center;
  }
`;
const HeroText = styled.p`
  width: 50%;
  height: auto;
  text-transform: uppercase;
  font-size: 6rem;
  font-family: "Josefin Sans", sans-serif;
  border: 1px solid #fff;
  color: #fff;
  padding: 3rem;
  line-height: 6rem;
  text-align: left;

  @media (max-width: 768px) {
    width: 75%;
    font-size: 3rem;
  }
`;

const Hero = () => {
  return (
    <HeroDiv>
      <HeroText>
        Immersive <br></br> experiences <br></br> that deliver
      </HeroText>
    </HeroDiv>
  );
};

export default Hero;
