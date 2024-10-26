import React from 'react';

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => (
  <main>
    <h2>Your Cart</h2>
    {cartItems.map((item, index) => (
      <div key={index} className="cart-item">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>Unit Price: ${item.cost}</p>
        <p>Total: ${item.cost * item.quantity}</p>
        <div>
          <button onClick={() => updateQuantity(item, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item, 1)}>+</button>
        </div>
        <button onClick={() => removeFromCart(item.id)}>Delete</button>
      </div>
    ))}
    <button>Continue Shopping</button>
    <button>Checkout</button>
  </main>
);

export default Cart;
