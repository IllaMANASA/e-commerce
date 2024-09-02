import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  padding: 16px;
  background-color: white;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  flex-grow: 1;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  margin: 10px 0;
`;

const AddToCartButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: #097969;
  color: white;
  border: none;
  cursor: pointer;
  align-self: stretch; /* Make button width 100% */
`;
const ProductCard = ({ product, addToCart }) => {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.title} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>{product.price}</ProductPrice>
      </ProductInfo>
      <AddToCartButton onClick={addToCart}>Add to Cart <FontAwesomeIcon icon={faPlus} style={{color: "white",}} /></AddToCartButton>
    </Card>
  );
};

export default ProductCard;
