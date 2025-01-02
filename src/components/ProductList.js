import React, { useContext, useRef, useState } from 'react';
import { CartContext } from '../context/CartContext';
import styled from 'styled-components';
import ProductCard from './ProductCard';

import homepageImage from '../assets/img5.jpg';
import laptopImage from '../assets/macbook_pro.webp';
import smartphoneImage from '../assets/smartphone.webp';
import headphonesImage from '../assets/headphones.webp';
import headphonesImage1 from '../assets/headphones2.webp';
import tshirtImage from '../assets/tshirt.webp';
import runningShoesImage from '../assets/running_shoes.webp';
import dell_laptop1 from '../assets/dell_laptop1.webp';
import iphone_pro_max15 from '../assets/iphone_pro_max15.webp';
import realme1 from '../assets/realme1.webp';
import realme2 from '../assets/realme2.webp';
import mackbook_air from '../assets/mackbook_air.jpeg';

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 40px; /* Height of the footer */
`;

const FullscreenContainer = styled.div`
  position: relative;
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: flex-start; /* Align content to the start (left) horizontally */
  align-items: center; /* Center content vertically */
  background-image: url(${homepageImage});
  margin-top: 69px;
  background-size: cover; /* Ensure the image covers the container */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  color: white;
  padding-left: 20px; /* Optional: Add some padding to the left */
`;
const Message = styled.div`
  position: fixed;
  top: 59px;
  right: 10px;
  background-color: green;
  color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.5s;

`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: rgba(0, 0, 0, 0.5); /* Optional: Add a dark overlay for better text visibility */
`;

const Content = styled.div`
  z-index: 1; /* Ensure content is above the overlay */
  max-width: 400px; /* Optional: Limit the width of the content */
`;

const GetStartedButton = styled.button`
  background-color: #097969;
  color: white;
  font-size: 1.5rem;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

const ProductListContainer = styled.div`
  padding-top: 80px; /* Adjust based on your navbar height */
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 20px; /* Optional: Add bottom padding as needed */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  gap: 20px;
`;



const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const productSectionRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);

  const products = [
    { id: 1, title: 'Apple M3 Pro chip with 12‑core CPU, 18‑core GPU and 16‑core Neural Engine', price: '₹1,69,900', description: 'A high-performance laptop for all your needs.', image: laptopImage },
    { id: 2, title: 'Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 512GB Storage', price: '₹1,39,999', description: 'A smartphone with all the latest features.', image: smartphoneImage },
    { id: 3, title: 'JBL Live 770NC True Adaptive Noise Cancellation', price: '₹11,999', description: 'High-quality headphones with noise cancellation.', image: headphonesImage },
    { id: 4, title: 'Gucci Premium Imported Oversize T-shirt - Beige', price: '₹1499', description: 'A comfortable and stylish T-shirt.', image: tshirtImage },
    { id: 5, title: 'Asics Men\'s GT-2000 12 Black Running Shoes', price: '₹12,999', description: 'Durable running shoes for all terrains.', image: runningShoesImage },
    { id: 6, title: 'JBL Tune 770NC Wireless', price: '₹6,499', description: 'High-quality headphones with noise cancellation.', image: headphonesImage1 },
    { id: 7, title: 'Dell Inspiron 7420 2in1 Laptop, Intel Core i7-1255U Processor/16GB/512GB/14.0', price: '₹89,999', description: 'Software: Windows 11 Home + Office H&S 2021 + 15 Months McAfee Antivirus', image: dell_laptop1 },
    { id: 8, title: 'Apple iPhone 15 Pro Max 256GB Natural Titanium', price: '₹1,59,900', description: 'High-quality headphones with noise cancellation.', image: iphone_pro_max15 },
    { id: 9, title: 'Realme 12 Pro Plus 5G 12GB 256GB Beige', price: '₹29499', description: 'realme 12 Pro 5G is equipped with 32MP telephoto portrait camera, and Sony IMX882 OIS camera, which makes you a portrait master.', image: realme1 },
    { id: 10, title: 'OnePlus 12R (Cool Blue, 8GB RAM, 256GB Storage)', price: '₹42,999', description: 'Fast & Smooth for years: Snapdragon 8 Gen 2 Mobile Platform, Up to 16GB of LPDDR5X RAM with RAM-Vita - Dual Cryo-velocity VC Cooling System, TÜV SÜD 48-Month Fluency Rating A', image: realme2 },
    { id: 11, title: 'Apple M3 chip with 8‑core CPU, 10‑core GPU, 16‑core Neural Engine', price: '₹29499', description: '8GB unified memory 512GB SSD storage', image: mackbook_air },
    { id: 12, title: 'Apple M3 Pro chip with 12‑core CPU, 18‑core GPU and 16‑core Neural Engine', price: '₹1,69,900', description: 'A high-performance laptop for all your needs.', image: laptopImage },
    { id: 13, title: 'Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 512GB Storage', price: '₹1,39,999', description: 'A smartphone with all the latest features.', image: smartphoneImage },
    { id: 14, title: 'JBL Live 770NC True Adaptive Noise Cancellation', price: '₹11,999', description: 'High-quality headphones with noise cancellation.', image: headphonesImage },
    { id: 15, title: 'Gucci Premium Imported Oversize T-shirt - Beige', price: '₹1499', description: 'A comfortable and stylish T-shirt.', image: tshirtImage },
    { id: 16, title: 'JBL Tune 770NC Wireless', price: '₹6,499', description: 'High-quality headphones with noise cancellation.', image: headphonesImage1 },
    { id: 17, title: 'Dell Inspiron 7420 2in1 Laptop, Intel Core i7-1255U Processor/16GB/512GB/14.0', price: '₹89,999', description: 'Software: Windows 11 Home + Office H&S 2021 + 15 Months McAfee Antivirus', image: dell_laptop1 },
    { id: 18, title: 'Apple iPhone 15 Pro Max 256GB Natural Titanium', price: '₹1,59,900', description: 'High-quality headphones with noise cancellation.', image: iphone_pro_max15 },
    { id: 19, title: 'Realme 12 Pro Plus 5G 12GB 256GB Beige', price: '₹29499', description: 'realme 12 Pro 5G is equipped with 32MP telephoto portrait camera, and Sony IMX882 OIS camera, which makes you a portrait master.', image: realme1 },
    { id: 20, title: 'OnePlus 12R (Cool Blue, 8GB RAM, 256GB Storage)', price: '₹42,999', description: 'Fast & Smooth for years: Snapdragon 8 Gen 2 Mobile Platform, Up to 16GB of LPDDR5X RAM with RAM-Vita - Dual Cryo-velocity VC Cooling System, TÜV SÜD 48-Month Fluency Rating A', image: realme2 },
    { id: 21, title: 'Apple M3 chip with 8‑core CPU, 10‑core GPU, 16‑core Neural Engine', price: '₹29499', description: '8GB unified memory 512GB SSD storage', image: mackbook_air },
    { id: 22, title: 'Realme 12 Pro Plus 5G 12GB 256GB Beige', price: '₹29499', description: 'realme 12 Pro 5G is equipped with 32MP telephoto portrait camera, and Sony IMX882 OIS camera, which makes you a portrait master.', image: realme1 },
    { id: 23, title: 'Apple M3 Pro chip with 12‑core CPU, 18‑core GPU and 16‑core Neural Engine', price: '₹1,69,900', description: 'A high-performance laptop for all your needs.', image: laptopImage },
    { id: 24, title: 'Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 512GB Storage', price: '₹1,39,999', description: 'A smartphone with all the latest features.', image: smartphoneImage },
  ];

  const handleGetStartedClick = () => {
    productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1500); // Hide message after 3 seconds
  };
  return (
    <PageContainer>
  <FullscreenContainer>
    <Overlay />
    <Content>
      <h1>Welcome to Our Store</h1>
      <p>Discover amazing products and get started today!</p>
      <GetStartedButton onClick={handleGetStartedClick}>
        Get Started
      </GetStartedButton>
    </Content>
  </FullscreenContainer>

  <ProductListContainer ref={productSectionRef}>
    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        addToCart={() => handleAddToCart(product)}
      />
    ))}
  </ProductListContainer>

  {/* Corrected Message rendering */}
  {showMessage && <Message show={showMessage.toString()}>Added to cart</Message>}
</PageContainer>

  );
};

export default ProductList;
