import 

export const CartItem = ({name, description, price}) => {
  return (
    <>
     <div className="card">
                    <div className="card-body">
                            <h5 className="card-title"> {prod.name}</h5>
                            <p className="card-text"> {prod.description}</p>
                            <p className="card-text"> {prod.price}</p>
                            <p className="btn btn-primary"> Agregar</p>
                    </div>
    </div>
    </>
  )
}
