export const getProducts = () => {

    fetch ('http://localhost:8080/products')
    return products;

}

export const calculateTotal = (items) =>{
     return items.reduce(
        (accumulator, item) => accumulator + item.product.price * item.quantity,
         0);
}