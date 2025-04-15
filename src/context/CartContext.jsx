import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const[product,setProduct] = useState([])

    function addToCart(newProduct){
        setProduct((prev) => [...prev, newProduct]);
      };

    return(
    <CartContext.Provider value={{product,setProduct,addToCart}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider