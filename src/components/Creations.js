import React from 'react';
import styled from 'styled-components';
import CreationCard from './CreationCard';

import CardData from "../assets/Data";

const CreationsTitle = styled.h2`  
font-family: "Josefin Sans", sans-serif;
color: #000;
font-size: 4rem;
text-transform: uppercase;  
`;

const CreationsDiv = styled.div`
    text-align: center;

    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;
        text-align: start;
    }
`;
const CreationsCardDiv = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 

    @media (min-width: 768px){
        flex-direction: row;
        flex-wrap: wrap; 
    }
`;
const CreationsBtnDesktop = styled.button`
    display: none;
    @media only screen and (min-width: 772px){
    display: block;
    border: 1px solid #000;
    padding: 1rem 3rem;
    text-transform: uppercase;
    letter-spacing: 0.8rem;
    background-color: #fff;
    transition: all 0.3s linear;
    &:hover{
        background-color: #000;
        color: #fff;
    }
}
`;
const CreationsBtnMobile = styled.button`
    display: none;
    @media only screen and (max-width: 772px){
    display: block;
    border: 1px solid #000;
    padding: 1rem 3rem;
    text-transform: uppercase;
    letter-spacing: 0.8rem;
    margin: 4rem auto; 
    background-color: #fff;
    transition: all 0.3s linear;
    &:hover{
        background-color: #000;
        color: #fff;
    }
}
`;

const Creations = () => {
    return (
        <div className='container' >
            <CreationsDiv>
                <CreationsTitle>
                    Our creations
            </CreationsTitle>
                <CreationsBtnDesktop>See all</CreationsBtnDesktop>
            </CreationsDiv>
            <CreationsCardDiv>
                {CardData.map((card, index) => (
                    <CreationCard
                        key={card.id}
                        title={card.title} img={card.img} />
                ))}
            </CreationsCardDiv>
            <CreationsBtnMobile >See all</CreationsBtnMobile>
        </div>
    )
}

export default Creations
