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
    
    const [ cartItems, setCartItems] = useState(initialCartItems);
    
    const handlerAddProductCart = (product) =>{

        const hasItem = cartItems.find((i) => i.product.id === product.id);

        if(hasItem)
            { 

                /*setCartItems([

                    ...cartItems.filter((i) => i.product.id !== product.id),
                    {
                        product,
                        quantity: hasItem.quantity + 1,
                    }
                ])*/

                setCartItems(
                    cartItems.map((i) => {
                        if( i.product.id === product.id ){
                            i.quantity = i.quantity + 1;
                        }
                        return i;
                    })
                )
            
        }else{
            setCartItems([...cartItems,
                {
                    product,
                    quantity: 1,
                }])
        }
        
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