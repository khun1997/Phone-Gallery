import React from "react";
import styled from "styled-components";


const Text =styled.text`
    font-size:3em;
    width:100%;
    height:14em;
    display:flex;
    justify-content:center;
    align-items:center;
`;

function About(){
    return(
        
        <Text>This is About page</Text>

    )
}
export default About;