import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OffconvasContext } from "../../Context/offconvasContext";

const Top = styled.section`
  width: 100%;
  height: 5em;
  position: sticky;
  background: #3f3b3b;
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;
const Title = styled.h3`
  font-size: 25px;
  align-self: center;
  margin-left: 40px;
  cursor: pointer;
`;
const Navbar = styled.div`
  align-self: flex-end;
  margin-right: 3em;
  margin-bottom: 1em;
`;

const Button = styled.button`
  border: none;
  background: #3f3b3b;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin: 0em 1em;
  text-decoration: none;
`;

const Topbar = () => {
  const { openOffconvasHandle } = useContext(OffconvasContext);
  return (
    <div>
      <Top>
        <Title>Phone-Gallery</Title>
        <Navbar>
          <NavLink to="/">
            <Button>Home</Button>
          </NavLink>

          <NavLink to="/about">
            <Button>About</Button>
          </NavLink>

          <Button onClick={() => openOffconvasHandle()}>
            <FontAwesomeIcon icon={faCartPlus} size="2xl" />
          </Button>
        </Navbar>
      </Top>
    </div>
  );
};

export default Topbar;
