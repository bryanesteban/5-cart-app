import { useReducer, useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalagoView";
import { itemsReducer } from "./reducer/itemsReducer";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart'));
export const CartApp = () => {
    console.log(initialCartItems);
    
    const [ cartItems, dispatch] = useReducer (itemsReducer, initialCartItems);
    
    const handlerAddProductCart = (product) =>{

        const hasItem = cartItems.find((i) => i.product.id === product.id);

        if(hasItem)
            { 
                dispatch({
                    type:'UpdateQuantityProductCart',
                    payload: product,
                });
            
        }else{

                dispatch({
                    type:'AddProductCart',
                    payload: product,
                })
            // setCartItems([
            //     ...cartItems,
            //     {
            //         product,
            //         quantity: 1,
            //     }])
        }
        
    }

    const handlerDeleteProduct = (id) => {

        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id)
        ])
    }
    return (
        <>

        < div className="container my-4">

        <h3>Cart App</h3>
            <div className="row">
            <CatalogView handler = {product => handlerAddProductCart(product)}/>
                {cartItems?.length <= 0 || 
                    ( 

                    
                    <div className="my-4 w-50">
                    <CartView items={ cartItems}  handlerDelete={handlerDeleteProduct}/>
               </div>
                )}
            </div>
        </div>
        </>
    )
}