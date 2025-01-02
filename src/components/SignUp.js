import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use `useNavigate` for redirection in React Router v6
import styled from 'styled-components';
import axios from 'axios'; // Import axios to make HTTP requests

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #097969;
  color: white;
  border: none;
  cursor: pointer;
`;

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const [error, setError] = useState(null);  // To handle errors during signup
  const navigate = useNavigate();  // Correct hook for navigation in React Router v6

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the signup API endpoint
      const response = await axios.post('http://localhost:5001/api/users/signup', formData, {
        headers: { 'Content-Type': 'application/json' }, // Make sure the content type is JSON
      });

      console.log('Signup successful:', response.data);

      // Redirect user to the login page after successful signup
      navigate('/login');  // Use `navigate` to go to the login page

    } catch (err) {
      console.error('Signup failed:', err.response ? err.response.data : err.message);
      setError('An error occurred while signing up. Please try again later.');  // Set error message to display
    }
  };

  return (
    <FormContainer>
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message if signup fails */}
        <Button type="submit">Sign Up</Button>
      </Form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </FormContainer>
  );
};

export default SignUp;
