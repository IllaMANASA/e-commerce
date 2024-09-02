import React, { useState } from 'react';
import styled from 'styled-components';

const BuyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 89px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #097969;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;

const Buy = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    alert('Purchase completed successfully!');
  };

  return (
    <BuyContainer>
      <h2>Buy Now</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="expiryDate"
          placeholder="Expiry Date (MM/YY)"
          value={formData.expiryDate}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={formData.cvv}
          onChange={handleChange}
        />
        <Button type="submit">Buy</Button>
      </Form>
    </BuyContainer>
  );
};

export default Buy;
