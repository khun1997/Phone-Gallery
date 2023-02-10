import  { useEffect, useState } from "react";

function UseApiFetch(){
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://74016ba3-5ca2-4b0c-afcc-6ad6af495d7c.mock.pstmn.io')
        .then(response =>response.json())
        .then(products => setProducts(products));
    },[]);

    return products;

}
export default  UseApiFetch;