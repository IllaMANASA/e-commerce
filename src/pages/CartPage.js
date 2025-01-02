import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Cart from '../components/Cart';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
       <h1 style={{ margin: '89px', textAlign: 'center' }}> </h1>
      <Cart items={cartItems} />
    </div>
  );
};

export default CartPage;
