import UseApiFetch from "../../hooks/useApiFetch";
import React from "react";
import styled from "styled-components";
// import {faCircleInfo} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from "react-router-dom";


const Section =styled.section`
    display:flex;
    flex-wrap:wrap;
    margin:2em;
    
`;
const Card =styled.div`
    margin:2em;
    width:18em;
    height:23em;
    background-color:#3f3b3b;
    border:1px solid #f5eded;
    justify-content:center;
    align-content;center;
    
`;

const Image = styled.img`
    width:18em;
    height:18em;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Text = styled.text`
    width:14em;
    font-size:20px;
    color:white;
    margin-top:7px;
    display:flex;
    justify-content:center;
    align-items:center;
    
`;
const Text1 = styled.text`
    width:14em;
    color:white;
    font-size:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    
`;

function Cards(){
    const  CardLists = UseApiFetch();

    return(
        <Section >
            
            {CardLists.map((product)=> (
                <Card key={product.id}  >
                    

                    <Image src={product.img} alt=''></Image>
                    <Text>{product.name}   ({product.rom})</Text>
                    
                    <br></br>
                    <Text1>{product.price}</Text1>
                    
                </Card>
            ))}
        </Section>

    )

}
export default Cards;