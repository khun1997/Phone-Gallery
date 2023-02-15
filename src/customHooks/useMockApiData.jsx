import { faL } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function useMockApiData() {
  const url = "https://82e98200-be5c-42f0-94ed-c1d4e32c4d1a.mock.pstmn.io";

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch(error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  },[url]);
  console.log(products);

  return products;
}
export default useMockApiData;
