import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ColorForm from './components/Form';
import Footer from './components/Footer';

function App() {
  const [headerData, setHeaderData] = useState(null);
  const [footerData, setFooterData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/header"
          element={<Header headerData={headerData} footerData={footerData} />}
        />
        <Route
          path="/"
          element={
            <ColorForm
              onSubmitHeader={(data) => setHeaderData(data)}
              onSubmitFooter={(data) => setFooterData(data)}
            />
          }
        />
        <Route path="/footer" element={<Footer footerData={footerData} />} />
      </Routes>
    </Router>
  );
}

export default App;
