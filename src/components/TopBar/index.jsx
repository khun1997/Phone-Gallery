import React from 'react'
import styled from 'styled-components'
import {NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Top =styled.section`
    width:100%;
    height:5em;
    position:sticky;
    background:#3f3b3b;
    overflow:hidden;
    color:white;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-content:center;
        
`;
const Title = styled.h3`
    font-size:25px;
    align-self:center;
    margin-left:40px;
    cursor:pointer;
    
`;
const Navbar=styled.div`
    
    align-self:flex-end;
    margin-right:3em;
    margin-bottom:1em;

`;

const Button = styled.button`
    border:none;
    background:#3f3b3b; 
    color:white;
    font-size:1em;
    cursor:pointer;
    margin:0em 1em;
    text-decoration:none;

    
`;
const Topbar = () => {
  return (
        <div>
            <Top>
                <Title>
                    <h3>Phone-Gallery </h3>               
                </Title>
                <Navbar>
            
                        <NavLink to='/'>
                            <Button>Home</Button>
                        </NavLink>

                        <NavLink to='/about'>
                            <Button>About</Button>
                        </NavLink>
                        <NavLink to='/totalamount'>
                            <Button>Total Amount</Button>
                        </NavLink>
                        


                </Navbar>
                
            </Top>
        </div>  
  )
}

export default Topbar;