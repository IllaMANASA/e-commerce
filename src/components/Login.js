import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';  // Import axios to make HTTP requests
import { useNavigate } from 'react-router-dom';  // Correct import for React Router v6

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

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);  // To show error messages
  const navigate = useNavigate();  // Corrected hook for navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the login API endpoint
      const response = await axios.post('http://localhost:5001/api/users/login', formData, { withCredentials: true });
      
      // On successful login, you can redirect to the home or dashboard page
      console.log(response.data);
      navigate('/dashboard');  // Corrected to use navigate for redirection

    } catch (err) {
      // Handle login errors, like invalid credentials
      console.error('Login failed:', err.response ? err.response.data : err.message);
      setError('Invalid email or password.');  // Set error message to display to the user
    }
  };

  return (
    <FormContainer>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
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
        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message if login fails */}
        <Button type="submit">Login</Button>
      </Form>
      <p>
        Don't have an account? <Link to="/signup">Create one</Link>
      </p>
    </FormContainer>
  );
};

export default Login;
