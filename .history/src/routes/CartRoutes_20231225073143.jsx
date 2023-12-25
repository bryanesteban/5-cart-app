import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalagoView"
import { CartView } from "../components/CartView"

export const CartRoutes = () => {
    <Routes>
    <Route 
        path="catalog" 
        element={<CatalogView handler = {product => handlerAddProductCart(product)}/>} 
    />
    <Route path="cart" element={(
        cartItems?.length <= 0 ?
        <div className="alert alert-warning">No hay producto en el carrito de compra</div>
        :
            ( 
            <div className="my-4 w-50">
            <CartView items={ cartItems}  handlerDelete={handlerDeleteProduct}/>
             </div>
            )
    )} />

    <Route path="/" element={ <Navigate to={'/catalog'} /> } />
</Routes>
}