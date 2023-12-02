export const ProductCardView = ({id, name, description, price}) => {
  const onAddProduct = () =>{

  }
  return (
    <>
     <div className="card">
                    <div className="card-body">
                            <h5 className="card-title"> {name}</h5>
                            <p className="card-text"> {description}</p>
                            <p className="card-text"> {price}</p>
                            <p className="btn btn-primary"
                            onClick={ () => onAddProduct({id, name, description, price})}> Agregar</p>
                    </div>
    </div>
    </>
  )
}
