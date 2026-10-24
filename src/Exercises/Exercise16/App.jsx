import { useState } from "react";
import CartContext from "./CartContext";
import CartComponent from "./CartComponent";

function App() {
  const [cart, setCart] = useState([]);

  const HandleAdd = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const HandleRemove = (indexToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((product, index) => index !== indexToRemove),
    );
  };

  const widget = { name: "Widget", price: 19.99 };
  const gadget = { name: "Gadget", price: 21.99 };

  return (
    <CartContext.Provider value={{ cart, HandleRemove }}>
      <h3>Widget</h3>
      <p>Price: $19.99</p>
      <button onClick={() => HandleAdd(widget)}>Add to Cart</button>

      <br />

      <h3>Gadget</h3>
      <p>Price: $21.99</p>
      <button onClick={() => HandleAdd(gadget)}>Add to Cart</button>

      <CartComponent />
    </CartContext.Provider>
  );
}

export default App;
