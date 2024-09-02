// src/components/Cart.js

import React, { useContext } from 'react';
import EmptyCart from './EmptyCart';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} style={{ width: '100px' }} />
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
