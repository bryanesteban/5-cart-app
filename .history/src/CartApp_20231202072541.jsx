import { CartView } from "./components/CartView";

export const CartApp = () => {

    return (
        <>

        < div className="container">

        <h3>Cart App</h3>
            <div className="row">
            <CartView/>

                
    
               <div className="my-4 w-50">
                    <h3>Carro de compras</h3>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>nombre</td>
                                <td>precio</td>
                                <td>Cantidad</td>
                                <td>total</td>
                                <td>eliminar</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">Total</td>
                                <td colSpan="2" className="text-end fw-bold">12345</td>

                            </tr>
                        </tfoot>
                    </table>
               </div>
            </div>
        </div>
        </>
    )
}