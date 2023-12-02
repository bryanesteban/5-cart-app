import { useEffect } from "react";
import { getProducts } from "./services/productService"

export const CartApp = () => {

    useEffect(
        () => {

        },[] 

    )
    const products = getProducts();
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
                <div className="col-4  my-2">
                    <div className="card">
                        <div className="card-body">
                                <h5 className="card-title"> Samsung Smart TV 55</h5>
                                <p className="card-text"> Teclado Mecanico con luces RGB switches cherry red</p>
                                <p className="card-text"> $ 3000</p>
                                <p className="btn btn-primary"> Agregar</p>
                        </div>
                    </div>
                </div>
                <div className="col-4  my-2">
                    <div className="card">
                        <div className="card-body">
                                <h5 className="card-title"> Audifono bluetooth Sony</h5>
                                <p className="card-text"> Teclado Mecanico con luces RGB switches cherry red</p>
                                <p className="card-text"> $ 770</p>
                                <p className="btn btn-primary"> Agregar</p>
                        </div>
                    </div>
                </div>
                <div className="col-4  my-2">
                    <div className="card">
                        <div className="card-body">
                                <h5 className="card-title"> Memoria Corsair 8GB DDR5</h5>
                                <p className="card-text"> Teclado Mecanico con luces RGB switches cherry red</p>
                                <p className="card-text"> $ 3000</p>
                                <p className="btn btn-primary"> Agregar</p>
                        </div>
                    </div>
                </div>
                <div className="col-4  my-2">
                    <div className="card">
                        <div className="card-body">
                                <h5 className="card-title"> Asus Nvidia RTX</h5>
                                <p className="card-text"> Teclado Mecanico con luces RGB switches cherry red</p>
                                <p className="card-text"> $ 5000</p>
                                <p className="btn btn-primary"> Agregar</p>
                        </div>
                    </div>
                </div>
                <div className="col-4  my-2">
                    <div className="card">
                        <div className="card-body">
                                <h5 className="card-title"> CPU Intel Core i5</h5>
                                <p className="card-text"> Teclado Mecanico con luces RGB switches cherry red</p>
                                <p className="card-text"> $ 4000</p>
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