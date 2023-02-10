import styled from "styled-components";
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SearchBox =styled.section`
    width:100%;
    height:3em;
    display:flex;
    justify-content:center;
`;
const Input =styled.input`
    width:30em;
    height:2em;
    display;block;
    align-item:center;
    margin-top:20px;
    border:1px solid red;
    border-radius:3px;
  
`;
const Button = styled.button`
    background:red;
    width:40px;
    height:2.5em;
    margin:19px 1px;
    border:1px solid red;
    border-radius:3px;
`;

const SearchBar = ()=>{
    return(
      
            
       
            <SearchBox>
                <Input  placeholder="search"  />
                <Button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                </Button>
            </SearchBox>
            

    )
}

export default SearchBar;
