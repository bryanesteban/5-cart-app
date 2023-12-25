import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalagoView";
import { Navbar } from "./components/Navbar";
import { useItemsCart } from "./hooks/useItemsCart";
import { Navigate, Route,Routes } from 'react-router-dom'
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
    
    const {cartItems, handlerAddProductCart, handlerDeleteProduct} = useItemsCart();

    return (
        <>
            <Navbar />
        < div className="container my-4">

        <h3>Cart App</h3>
            <CartRoutes 
                cartItems={cartItems} 
                handlerAddProductCart={handlerAddProductCart} 
                handlerDeleteProduct={handlerDeleteProduct} 
            />
            <div className="row"> 
            </div>
        </div>
        </>
    )
}