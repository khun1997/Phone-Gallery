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

function TotalAmount(){
    return(
        <Text>This is total amount page</Text>
    )
}
export default TotalAmount;