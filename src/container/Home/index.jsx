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
import Topbar from "../../components/TopBar";
import Intro from "../../components/Intro";

const Home = () => {
  return (
    <>
      <Topbar />
      <Intro />
    </>
  );
};

export default Home;
