import React from "react";

import styled from "styled-components";

const CardTitle = styled.h3`
  position: absolute;
  bottom: 8%;
  left: 2rem;
  z-index: 1;
  font-family: "Josefin Sans", sans-serif;
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;
  transition: all 0.3s linear;
`;

const CardImg = styled.img`
  width: 100%;
  transition: all 0.3s linear;

  @media only screen and (max-width: 444px) {
    height: 100px;
    object-fit: cover;
    object-position: bottom;
  }
`;

const CardDiv = styled.div`
  position: relative;
  width: 25rem;
  height: auto;
  margin: 0 2rem;
  flex: 1 0 18%; 

  &:hover ${CardImg} { 
    opacity: 0.3;
  }
  &:hover ${CardTitle} {
    color: #000;
  }
`;


const CreationCard = (props) => {
  return (
    <CardDiv className="my-3 my-lg-5">
      <CardImg src={props.img} className="img-fluid" alt="" />
      <CardTitle>{props.title}</CardTitle>
    </CardDiv>
  );
};

export default CreationCard;
