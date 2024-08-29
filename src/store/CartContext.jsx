import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
})
function cartReducer(state, action){
    if(action.type === 'ADD_ITEM') {
        //
    }
    if(action.type === 'REMOVE_ITEM') {
        //
    }
}

export function CartContextProvider({children}) {
    useReducer(cartReducer);

    return (
        <CartContext.Provider>{children}</CartContext.Provider>
    )
}

export default CartContext