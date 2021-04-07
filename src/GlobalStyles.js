import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body{
   font-family: 'Alata', sans-serif;
  // font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem; 

}
.navbar {
  background-color: transparent;
  transition: all 0.3s linear;
}

.navbar.colorChange {
  background-color: #000;
}

`;
export default GlobalStyles;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;

  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }

  @media (min-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;

export const Button = styled.button`
border-radius: ${({ bigRadius }) => bigRadius ? '30px' : '20px'};
background-color: ${({ primary }) => primary ? '#E38B06' : '#000'};
color: ${({ primary }) => primary ? '#000' : '#fff'};
padding: ${({ big }) => big ? '18px 30px' : '10px 28px'};
font-size: ${({ bigFont }) => bigFont ? '20px' : '18px'};
outline: none;
cursor: pointer;
border: none;
transition: all .5s ease;

&:hover{
    background-color: ${({ primary }) => primary ? '#fff' : '#E38B06'};  
    transform: translateY(-.5rem) scale(1.02);
    color: #000;
}
&:active{
    transform: translateY(.5rem);
}

@media only screen and (max-width:1000px) {
    /* width: 100%; */
    padding: ${({ big }) => big ? '18px 30px' : '10px 20px'};
}
@media only screen and (max-width:375px) {
    padding: ${({ big }) => big ? '12px 20px' : '10px 20px'};
    font-size: ${({ bigFont }) => bigFont ? '16px' : '18px'};
}


`;