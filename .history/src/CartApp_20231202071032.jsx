import { useEffect } from "react";
import { getProducts } from "./services/productService"
import { useState } from "react";

export const CartApp = () => {

    const [ products, setProducts] = useState([]);
   
    useEffect(
        () => {
            setProducts(getProducts());

        },[] );
    
    return (
        <>

        < div className="container">

        <h3>Cart App</h3>
            <div className="row">
                <div className="col-4  my-2">
                    <div className="card">
                        <div className="card-body">
                                <h5 className="card-title"> Teclado Mecanico RGB</h5>
                                <p className="card-text"> Teclado Mecanico con luces RGB switches cherry red</p>
                                <p className="card-text"> $ 1000</p>
                                <p className="btn btn-primary"> Agregar</p>
                        </div>
                    </div>
                </div>
               
               
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