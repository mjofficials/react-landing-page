import React from "react";
import AboutImg from "../assets/images/desktop/image-interactive.jpg";
import styled from "styled-components";

const AboutDiv = styled.div`
  padding: 8rem 2rem;
`;

const AboutContentRight = styled.div`
  height: auto;
  padding: 4rem 0;

  @media only screen and (min-width: 993px) {
    padding: 8rem 4rem  2rem;
    position: relative;
    right: 16%;
    background: white;
  }
`;
export const AboutContentTitle = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  color: #000;
  font-size: 4rem;
`;
const AboutContentPara = styled.p`
  color: hsl(0, 0%, 55%);
`;
const AboutRow = styled.div``;
const AboutCol = styled.div``;

const About = () => {
  return (
    <AboutDiv className="container">
      <AboutRow className="row">
        <AboutCol className="col-lg-6">
          <img className="img-fluid" src={AboutImg} alt="" />
        </AboutCol>
        <AboutCol className="col-lg-6 d-flex flex-column align-items-center align-items-lg-end justify-content-center justify-content-lg-end  ">
          <AboutContentRight className="text-center text-lg-start">
            <AboutContentTitle className="text-uppercase">
              The leader in interactive VR
            </AboutContentTitle>
            <AboutContentPara>
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Donec sollicitudin molestie malesuada. Pellentesque in
              ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis
              porttitor volutpat.
            </AboutContentPara>
          </AboutContentRight>
        </AboutCol>
      </AboutRow>
    </AboutDiv>
  );
};

export default About;
