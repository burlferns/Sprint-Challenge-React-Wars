import React from "react";
import styled from "styled-components";
import SWCard from "./SWCard";

const div_width=660;


const CardCollection = styled.div` 
    width:${div_width};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-left:10px;
    margin-right:10px;
`;


export default function SWList( {peopleAry} ) {

    return (
        <CardCollection>
            {peopleAry.map( (elem) => {
                let name=elem.name;
                let height=elem.height;
                let mass=elem.mass;
                return (<SWCard name={name} height={height} mass={mass} key={name}/>);
            })}
        </CardCollection>
    );
    
}



