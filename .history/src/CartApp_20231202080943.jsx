import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalagoView";

export const CartApp = () => {

    return (
        <>

        < div className="container">

        <h3>Cart App</h3>
            <div className="row">
            <CatalogView/>

               <div className="my-4 w-50">
                    <CartView/>
               </div>
            </div>
        </div>
        </>
    )
}