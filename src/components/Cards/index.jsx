import UseApiFetch from "../../hooks/useApiFetch";
import React from "react";

function Cards(){
    const  CardLists = UseApiFetch();

    return(
        <div>
            
            {CardLists.map((product)=> (
                <div key={product.id} >
                    {product.name}
                </div>
            ))}
        </div>

    )

}
export default Cards;