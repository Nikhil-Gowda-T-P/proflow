import React from 'react';

const Footer = ({ footerData }) => (
  <footer style={{ color: footerData.textColor, backgroundColor: footerData.bgColor }}>
    <p>Address: {footerData.address}</p>
    <p>Copyright © {footerData.year} Company Name. All rights reserved.</p>
  </footer>
);

export default Footer;