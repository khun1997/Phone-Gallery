import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useMemo, useContext } from "react";
import useMockApiData from "../../customHooks/useMockApiData";
import { Link } from "react-router-dom";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Context/cartContext";
// import { CartContext } from "../../Context/cartContext";

const SearchBox = styled.form`
  width: 100%;
  height: 6em;
  display: flex;
  justify-content: center;
  text-decoration:none:
`;
const Input = styled.input`
    width:40em;
    height:3em;
    font-size:20px;
    display;block;
    align-item:center;
    margin-top:10px;
    border:3px solid #3f3b3b;
    border-radius:8px;
    text-decoration:none:

  &:focus{
    background-color:#3f3b3b;
    color:white;
    cursor-color:white;
  }
`;
const ButtonSearch = styled.button`
  background: #3f3b3b;
  color: white;
  width: 60px;
  height: 4.9em;
  margin: 10px 1px;
  border: 3px solid #3f3b3b;
  border-radius: 8px;
  cursor: pointer;
`;
const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 2em;
  height: 80vh;
  z-index: 1;
`;
const Card = styled.div`
    margin:1em;
    width:18em;
    height:23em;
    background-color:#3f3b3b;
    border:1px solid #f5eded;
    border-radius:15px;
    justify-content:center;
    align-content;center;
    position:relative;
 
&:hover{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  transform: scale(1.08);
  transition:0.8s;
}
`;

const Image = styled.img`
  width: 18em;
  height: 18em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.text`
  width: 14em;
  font-size: 20px;
  color: white;
  margin-top: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.text`
  width: 14em;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  border: none;

  color: #3f3b3b;
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  cursor: pointer;
`;
const ButtonCart = styled.button`
  width: 50px;
  height: 35px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  color: white;
  position: absolute;
  background-color: #3f3b3b;
  /* top: 0;
  right: 0; */
  margin-top: -113px;
  margin-right: 2px;

  right: 0;
  cursor: pointer;
`;
const Intro = () => {
  const products = useMockApiData();

  const [search, setSearch] = useState("");
  const { addToCart } = useContext(CartContext);

  const handleInputChange = (e) => setSearch(e.target.value);

  const memoizedValue = useMemo(
    () =>
      products.filter((product) =>
        search.toLowerCase() === ""
          ? products
          : product.name.toLowerCase().includes(search)
      ),
    [search, products]
  );

  return (
    <>
      <div>
        <SearchBox>
          <Input
            placeholder="              Search"
            type="text"
            onChange={handleInputChange}
          ></Input>
          <ButtonSearch type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </ButtonSearch>
        </SearchBox>
      </div>
      <div>
        <Section>
          {memoizedValue.map((product, id) => (
            <Card key={product.id}>
              <Image src={product.image} alt=""></Image>
              <Text>
                {product.name} ({product.rom})
              </Text>
              <br></br>
              <Text1>{product.price}</Text1>
              <Link to={`/product/${product.id}`}>
                <>
                  <Button>
                    <FontAwesomeIcon icon={faCircleInfo} size="2xl" />
                  </Button>
                </>
              </Link>
              <ButtonCart onClick={() => addToCart(product,id)}>
                <FontAwesomeIcon icon={faCartPlus} size="xl" />
              </ButtonCart>
            </Card>
          ))}
        </Section>
      </div>
    </>
  );
};

export default Intro;
