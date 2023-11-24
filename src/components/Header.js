// Header.js
import React from 'react';
import Footer from './Footer';
const Header = ({ headerData,footerData }) => (
  <>
    <h1 style={{ color: headerData.selectedColor }}>Colorful Header</h1>
    <p>This is a colorful header component.</p>
    {headerData.image1 && (
      <img
        src={URL.createObjectURL(headerData.image1)}
        alt="Image 1"
        style={{ maxWidth: '100%', marginTop: '10px' }}
      />
    )}
    {headerData.image2 && (
      <img
        src={URL.createObjectURL(headerData.image2)}
        alt="Image 2"
        style={{ maxWidth: '100%', marginTop: '10px' }}
      />
    )}
     {footerData && <Footer footerData={footerData} />}
  </>
);

export default Header;
