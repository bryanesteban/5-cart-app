import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";



export const CartView = () => {

    const [ products, setProducts] = useState([]);
   
    useEffect(
        () => {
            setProducts(getProducts());

        },[] );
    return(
        <>
        { products.map(prod => (

            <div className="col-4  my-2" key = { prod.id }>
               
            </div>

        ))};

    </>
    )
}