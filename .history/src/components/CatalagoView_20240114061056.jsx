import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";



export const CatalogView = ({ handler }) => {

    const [ products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const findAll = async() =>{
        const prods = await getProducts();
        setProducts(prods);
        setIsLoading(false);
    }
    useEffect(
        () => {
            findAll();
        },[] );
    return(
        <>
        <div className="row"></div>
        { products.map(prod => (
            <div className="col-4  my-2" 
                 key = { prod.id }>
               <ProductCardView 
                    handler = { handler }
                    id={prod.id}
                    name={prod.name} 
                    description={prod.description} 
                    price={prod.price}
                />
            </div>

        ))};

    </>
    )
}