// // import React, { useEffect, useState } from "react";
// import React from "react";
// import SearchBar from "../../components/SearchBar/index";
// import Topbar  from "../../components/TopBar/index";
// import Cards from "../../components/Cards/index";

// function Home(){

//     return(
//         <div>
//             <Topbar/>
//             <SearchBar/>
//             <Cards/>
//         </div>

//     )
// }

// export default Home;

import React from "react";
// import {ProductContext} from '../../hooks/productContext'
import Topbar from "../../components/TopBar";
import SearchBar from "../../components/SearchBar";
import Cards from "../../components/Cards/index";

const Home = () => {
  return (
    <>
      <Topbar />
      <SearchBar />
      <Cards />
    </>
  );
};

export default Home;
