import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = styled.section`
  width: 100%;
  height: 6em;
  display: flex;
  justify-content: center;

`;
const Input = styled.input`
    width:40em;
    height:3em;
    display;block;
    align-item:center;
    margin-top:20px;
    border:3px solid #3f3b3b;
    border-radius:8px;
`;
const Button = styled.button`
  background: #3f3b3b;
  color: white;
  width: 45px;
  height: 3.6em;
  margin: 19px 1px;
  border: 3px solid #3f3b3b;
  border-radius: 8px;
  cursor:pointer;
`;

const SearchBar = () => {
  return (
    <div>
      <SearchBox>
        <Input placeholder="              Search"></Input>
        <Button>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </Button>
      </SearchBox>
    </div>
  );
};

export default SearchBar;
