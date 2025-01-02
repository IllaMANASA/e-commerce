// src/components/Product.js
import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem;
`;

const Product = ({ product }) => {
  return (
    <ProductContainer>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </ProductContainer>
  );
};

export default Product;
