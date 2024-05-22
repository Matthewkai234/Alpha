import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer'; 
import Checkout from './components/checkout';
import Navbar from './components/navbar';

function App() {
  // State to store fetched file content
  const [textboxContent, setTextboxContent] = useState('');
  const [buttonContent, setButtonContent] = useState('');
  const [footerContent, setFooterContent] = useState('');

  // Fetch file content from backend when the component mounts
  useEffect(() => {
    fetchFileContent('textbox', setTextboxContent);
    fetchFileContent('button', setButtonContent);
    fetchFileContent('footer', setFooterContent);
  }, []);

  // Function to fetch file content from backend
  const fetchFileContent = async (endpoint, setContent) => {
    try {
      const response = await fetch(`http://localhost:3000/${endpoint}`); // Assuming backend is running on localhost:3000
      const content = await response.text();
      setContent(content);
    } catch (error) {
      console.error(`Error fetching ${endpoint} content:`, error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="main-content">
        <div dangerouslySetInnerHTML={{ __html: textboxContent }} />
        <div dangerouslySetInnerHTML={{ __html: buttonContent }} />
        <div dangerouslySetInnerHTML={{ __html: footerContent }} />
      </div>
      <Navbar />
      <Checkout />
      <Footer /> 
    </div>
  );
}

export default App;
