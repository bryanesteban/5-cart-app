import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalagoView";
import { useItemsCart } from "./hooks/useItemsCart";

export const CartApp = () => {
    
    const {cartItems, handlerAddProductCart, handlerDeleteProduct} = useItemsCart();

    return (
        <>

        < div className="container my-4">

        <h3>Cart App</h3>
        <Routes>
            <Route path="Catalog" element={<CatalagoView handler={handlerAddProductCart}/>}
            />
        </Routes>
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