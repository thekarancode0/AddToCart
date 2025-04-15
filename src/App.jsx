import React from "react";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContext";
export default function App() {
  return (
    <CartContextProvider>
      <div className="overflow-x-hidden">
        <Shop />
        <Cart />
      </div>
    </CartContextProvider>
  );
}
