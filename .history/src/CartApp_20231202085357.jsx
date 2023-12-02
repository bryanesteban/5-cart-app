import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalagoView";

const initialCartItems = [
    /*{
        product:{},
        quantity: 0,
        total: 0
    }*/
]
export const CartApp = () => {
    
    const [ carItems, setCartItems] = useState(initialCartItems);
    
    const handlerAddProductCart = (product) =>{
        setCartItems([...carItems,
        {
            product,
            quantity: 1,
            total:  product.price*1
        }])
    }
    return (
        <>

        < div className="container">

        <h3>Cart App</h3>
            <div className="row">
            <CatalogView handler = {product => handlerAddProductCart(product)}/>

               <div className="my-4 w-50">
                    <CartView items={ carItems }/>
               </div>
            </div>
        </div>
        </>
    )
}