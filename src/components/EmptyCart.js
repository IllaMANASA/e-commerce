// src/components/EmptyCart.js
import React from 'react';
import styled from 'styled-components';
import emptyCartImg from '../assets/empty_cart.jpg'; 

const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
`;

const EmptyCartImage = styled.img`
  width: 840px; // Adjust size as needed
  max-width: 100%;
  height: auto;
`;

const EmptyCartMessage = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin-top: 20px;
`;

const EmptyCart = () => {
  return (
    <EmptyCartContainer>
      <EmptyCartImage src={emptyCartImg} alt="Empty Cart" />
      <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
    </EmptyCartContainer>
  );
};

export default EmptyCart;
