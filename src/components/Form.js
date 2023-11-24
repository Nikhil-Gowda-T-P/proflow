// ColorForm.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Footer from './Footer';

const Form = ({ onSubmitHeader, onSubmitFooter }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [footerColor, setFooterColor] = useState('');
  const [footerAddress, setFooterAddress] = useState('');
  const [footerYear, setFooterYear] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitHeader({ selectedColor, image1, image2 });
    onSubmitFooter({ textColor: footerColor, bgColor: selectedColor, address: footerAddress, year: footerYear });
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {submitted && <Navigate to="/header" />}
      <label>
        Select header color:
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="">Choose a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </select>
      </label>
      <label>
        Upload Image 1:
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage1(e.target.files[0])}
        />
      </label>
      <label>
        Upload Image 2:
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage2(e.target.files[0])}
        />
      </label>
      <label>
        Select footer text color:
        <select
          value={footerColor}
          onChange={(e) => setFooterColor(e.target.value)}
        >
          <option value="">Choose a color</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="gray">Gray</option>
        </select>
      </label>
      <label>
        Footer Address:
        <input
          type="text"
          value={footerAddress}
          onChange={(e) => setFooterAddress(e.target.value)}
        />
      </label>
      <label>
        Copyright Year:
        <input
          type="text"
          value={footerYear}
          onChange={(e) => setFooterYear(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
