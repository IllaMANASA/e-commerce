// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { AiOutlineMenu } from 'react-icons/ai'; // Hamburger icon from react-icons
// const Nav = styled.nav`
// font-family: cursive;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   display: flex;
//   justify-content: space-between; /* Space between for left and right alignment */
//   align-items: center;
//   padding: 1rem;
//   background-color: #40826D;
//   color: white;
//   z-index: 1000; /* Ensuring navbar is above other elements */
// `;

// const CompanyName = styled.div`
//   font-size: 1.5rem; /* Adjust font size as needed */
//   font-weight: bold; /* Make the text bold */
//   margin-left: 20px; /* Optional: Adjust left margin */
//   font-family: cursive;
//   `;

// const NavLinksContainer = styled.div`
//   display: flex;
//   justify-content: flex-end; /* Align items to the right */
//   align-items: center;
//   margin-right: 29px; /* Adjust right margin */
// `;

// const NavLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   margin: 0 10px; /* Adjust margin to control spacing */
//   padding: 8px 12px; /* Optional: Add padding for better click area */
//   font-size: 21px; /* Optional: Adjust font size */
//   font-weight: bold; /* Optional: Adjust font weight */
// `;

// const HamburgerMenu = styled.div`
//   display: none; /* Initially hide on larger screens */
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block; /* Show on smaller screens */
//   }
// `;

// const NavBar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <Nav>
//        <CompanyName>UrbanTrendStore</CompanyName>
//        <NavLinksContainer>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/about">About</NavLink>
//       <NavLink to="/contact">Contact</NavLink>
//       <NavLink to="/cart">Cart</NavLink>
//       <NavLink to="/buy">Buy</NavLink>
//       <NavLink to="/login">Login</NavLink>
//       </NavLinksContainer>

//       {/* Hamburger menu icon */}
//       <HamburgerMenu onClick={toggleMenu}>
//         <AiOutlineMenu size={24} />
//       </HamburgerMenu>

//       {/* Responsive menu */}
//       {showMenu && (
//         <div>
//           <NavLink to="/" onClick={toggleMenu}>
//             Home
//           </NavLink>
//           <NavLink to="/about" onClick={toggleMenu}>
//             About
//           </NavLink>
//           <NavLink to="/contact" onClick={toggleMenu}>
//             Contact
//           </NavLink>
//           <NavLink to="/cart" onClick={toggleMenu}>
//             Cart
//           </NavLink>
//           <NavLink to="/buy" onClick={toggleMenu}>
//             Buy
//           </NavLink>
//           <NavLink to="/login" onClick={toggleMenu}>
//             Login
//           </NavLink>
//         </div>
//       )}
//     </Nav>
//   );
// };

// export default NavBar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { AiOutlineMenu } from 'react-icons/ai'; // Hamburger icon from react-icons

// const Nav = styled.nav`
//   font-family: cursive;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem;
//   background-color: #40826D;
//   color: white;
//   z-index: 1000; /* Ensuring navbar is above other elements */
// `;

// const CompanyName = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin-left: 20px;
//   font-family: cursive;
// `;

// const NavLinksContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   margin-right: 29px;

//   @media (max-width: 768px) {
//     display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')}; /* Hide/show based on state */
//     flex-direction: column;
//     position: absolute;
//     top: 60px; /* Adjust as needed for spacing below Navbar */
//     right: 10px;
//     background-color: #40826D;
//     padding: 10px;
//     border-radius: 5px;
//   }
// `;

// const NavLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   margin: 0 10px;
//   padding: 8px 12px;
//   font-size: 21px;
//   font-weight: bold;
//   transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition for hover effects */

//   &:hover,
//   &:focus {
//     background-color: white; /* Highlight background on hover */
//     color: #40826D; /* Change text color on hover */
//     border-radius: 5px; /* Rounded corners for the highlight effect */
//   }

//   /* Active link style */
//   ${({ isActive }) =>
//     isActive &&
//     `
//     background-color: white;
//     color: #40826D;
//     border-radius: 5px;
//   `}
//   @media (max-width: 768px) {
//     margin: 10px 0; /* Adjust margin for vertical list */
//     font-size: 18px;
//   }
// `;

// const HamburgerMenu = styled.div`
//   display: none;
//   cursor: pointer;
//   margin-right: 20px;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const NavBar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <Nav>
//       <CompanyName>UrbanTrendStore</CompanyName>

//       <HamburgerMenu onClick={toggleMenu}>
//         <AiOutlineMenu size={30} />
//       </HamburgerMenu>

//       <NavLinksContainer $showMenu={showMenu}>
//         <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
//         <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
//         <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
//         <NavLink to="/cart" onClick={toggleMenu}>Cart</NavLink>
//         <NavLink to="/buy" onClick={toggleMenu}>Buy</NavLink>
//         <NavLink to="/login" onClick={toggleMenu}>Login</NavLink>
//       </NavLinksContainer>
//     </Nav>
//   );
// };

// export default NavBar;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

// Styled component for the Nav container
const Nav = styled.nav`
  font-family: cursive;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #40826D;
  color: white;
  z-index: 1000;
`;

// Styled component for the company name
const CompanyName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 20px;
  font-family: cursive;
`;

// Use a transient prop `$showMenu` to conditionally style the NavLinksContainer
const NavLinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 29px;

  @media (max-width: 768px) {
    display: ${({ $showMenu }) => ($showMenu ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 10px;
    background-color: #40826D;
    padding: 10px;
    border-radius: 5px;
  }
`;

// Styled component for each NavLink
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  padding: 8px 12px;
  font-size: 21px;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover,
  &:focus {
    background-color: white;
    color: #40826D;
    border-radius: 5px;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    background-color: white;
    color: #40826D;
    border-radius: 5px;
  `}

  @media (max-width: 768px) {
    margin: 10px 0;
    font-size: 18px;
  }
`;

// Hamburger menu styled component
const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Nav>
      <CompanyName>UrbanTrendStore</CompanyName>

      <HamburgerMenu onClick={toggleMenu}>
        <AiOutlineMenu size={24} />
      </HamburgerMenu>

      {/* Use $showMenu prop here to pass to NavLinksContainer */}
      <NavLinksContainer $showMenu={showMenu}>
        <NavLink to="/" onClick={toggleMenu} $isActive={location.pathname === '/'}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={toggleMenu} $isActive={location.pathname === '/about'}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu} $isActive={location.pathname === '/contact'}>
          Contact
        </NavLink>
        <NavLink to="/cart" onClick={toggleMenu} $isActive={location.pathname === '/cart'}>
          Cart
        </NavLink>
        <NavLink to="/buy" onClick={toggleMenu} $isActive={location.pathname === '/buy'}>
          Buy
        </NavLink>
        <NavLink to="/login" onClick={toggleMenu} $isActive={location.pathname === '/login'}>
          Login
        </NavLink>
      </NavLinksContainer>
    </Nav>
  );
};

export default NavBar;
