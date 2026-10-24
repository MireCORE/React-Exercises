import { useContext } from "react";
import CartContext from "./CartContext";

function CartComponent() {
  const { cart, HandleRemove } = useContext(CartContext);

  const totalItems = cart.length;

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map((product, index) => (
        <div key={index}>
          <p>
            Product: {product.name}-${product.price.toFixed(2)}
          </p>

          <button onClick={() => HandleRemove(index)}>Remove</button>
        </div>
      ))}

      <hr />

      <h3>Total Items: {totalItems}</h3>
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default CartComponent;
