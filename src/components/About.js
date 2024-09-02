// src/pages/AboutPage.js
import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/img1.webp'; // Import image using require or ES6 import
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.webp';
 
// Styled components for styling the About page

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 29px auto;
  padding: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: 400px;
  width: 600px;
`;

// AboutPage functional component
const AboutPage = () => {
  return (
    <AboutContainer>
      <Heading>About Our E-Commerce Store</Heading>
      <Paragraph>
        Welcome to our online store, where you can find a wide range of products
        tailored to your needs. Our mission is to provide high-quality items and
        exceptional customer service.
      </Paragraph>
      <ImageContainer>
        <Image src={img2} alt="About Us"/>
      </ImageContainer>
      <Paragraph>
        Founded in 2024, we have been dedicated to serve the best services for our 
        customers. "We strive to enhance your shopping experience with personalized 
        service and a wide selection of high-quality products tailored to your needs."
      </Paragraph>
      <ImageContainer>
        <Image src={img1} alt="About Us" />
      </ImageContainer>
      <Paragraph>
      "Whether you're looking for Electronic Devices, clothes, shoes, or other 
      essentials, we are here to serve you. Our team is committed to delivering 
      an exceptional shopping experience through personalized service and a dedication to meeting your needs."
      </Paragraph>
      <ImageContainer>
        <Image src={img3} alt="About Us" height='20px'></Image>
      </ImageContainer>
      <Paragraph>
        Feel free to reach out to us at queries@gmail.com. We look forward to
        hearing from you!
      </Paragraph>
    </AboutContainer>
  );
};

export default AboutPage;
