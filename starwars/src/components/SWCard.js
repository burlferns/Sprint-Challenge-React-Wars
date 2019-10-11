import React from "react";
import styled from "styled-components";
import './StarWars.css';

const card_width=400;
const card_margin=20;

const CardBack = styled.div`
    background: darkblue;
    width:${card_width}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;
    margin:20px 0;
    font-family: 'Poller One', cursive;
`;

const CardTitle = styled.h2`
    font-size: 30px;
    text-align: center;
    max-width:${card_width-card_margin}px;
`;

const CardInfo = styled.p`
    max-width:${card_width-card_margin}px;
    font-size: 18px;
    text-align: left;
`;



export default function SWCard({name,height,mass})  {
    return (
        <CardBack>
            <CardTitle>{name}</CardTitle>
            <CardInfo>Height: {height}cms</CardInfo>
            <CardInfo>Mass: {mass}kgs</CardInfo>
        </CardBack>
    );
}