import { Navbar } from "./components/Navbar";
import { useItemsCart } from "./hooks/useItemsCart";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
    
    const {cartItems, handlerAddProductCart, handlerDeleteProduct} = useItemsCart();

    return (
        <>
            <Navbar />
        < div className="container my-4">

        <h3>Cart App</h3>
            <div className="row"> 
            <CartRoutes 
                cartItems={cartItems} 
                handlerAddProductCart={handlerAddProductCart} 
                handlerDeleteProduct={handlerDeleteProduct} 
            />
            </div>
        </div>
        </>
    )
}