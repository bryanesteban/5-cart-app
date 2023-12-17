export const itemsReducer = (state = [], action) => {
    switch(action.type){
        case 'AddProductCart':

            return [
                ...cartItems,
                {
                    product: action.payload,
                    quantity: 1,
                }];
        case 'UpdateQuantityProductCart':

        return state.map((i) => {
            if( i.product.id === action.payload ){
                i.quantity = i.quantity + 1;
            }
            return i;
        });
        case 'DeleteProductCart':

        return;
        
        default :
            return state;

    }

}