import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { CatalogItem } from "./CatalogItem";



export const CatalogView = () => {

    const [ products, setProducts] = useState([]);
   
    useEffect(
        () => {
            setProducts(getProducts());

        },[] );
    return(
        <>
        { products.map(prod => (

            <div className="col-4  my-2" key = { prod.id }>
               <CatalogItem 
                    name={prod.name} 
                    description={prod.description} 
                    price={prod.price}
                />
            </div>

        ))};

    </>
    )
}