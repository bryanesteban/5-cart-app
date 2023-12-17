export const itemsReducer = (state = [], action) => {
    switch(action.type){
        case 'AddProductCart':

            return [
                ...cartItems,
                {
                    product,
                    quantity: 1,
                }];
        case 'UpdateQuantityProductCart':

        return;
        case 'DeleteProductCart':

        return;
        
        default :
            return state;

    }

}