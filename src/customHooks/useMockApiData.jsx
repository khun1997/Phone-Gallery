import { useEffect, useState } from "react";

function useMockApiData() {
  const url = "https://5ff2201d-8c1b-4167-8f36-8467d2dc79a0.mock.pstmn.io";

  const [products, setProducts] = useState([]);


  useEffect(() => {

    const fetchData = async () => {

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
     
    };
    fetchData();
  },[url]);
  

  return products;
}
export default useMockApiData;
