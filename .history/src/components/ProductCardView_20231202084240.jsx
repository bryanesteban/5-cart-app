export const ProductCardView = ({name, description, price}) => {
  return (
    <>
     <div className="card">
                    <div className="card-body">
                            <h5 className="card-title"> {name}</h5>
                            <p className="card-text"> {description}</p>
                            <p className="card-text"> {price}</p>
                            <p className="btn btn-primary"
                            onClick={}> Agregar</p>
                    </div>
    </div>
    </>
  )
}
