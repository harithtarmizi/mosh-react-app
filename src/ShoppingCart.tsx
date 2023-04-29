import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

// NOTES:
// 1. treat props as immutable (read only)
// 2. Rule of thumb, the one have the state are the one need to update the state, in this case the parent component

function ShoppingCart() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default ShoppingCart;
