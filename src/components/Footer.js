import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  // position: fixed;
  left: 0;
  bottom: 0;
  background-color: #152238;
  color: white;
  padding: 0.5rem;
  text-align: center;
  width: 100%;
`;
const Footer = () => {
    return(
        <FooterContainer>
            <p>© 2024 UrbanTrendStore, All rights reserved</p>
         </FooterContainer>
    );
};
export default Footer;