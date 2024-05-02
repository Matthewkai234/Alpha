import React, { useState } from 'react';
import './Showmore.css'; 

function Showmore () {
  const [buttonText, setButtonText] = useState('Show More');

  const toggleButtonText = () => {
    if (buttonText === 'Show More') {
      setButtonText('Show Less');
    } else {
      setButtonText('Show More');
    }
  };

  return (
    <div className="center-container">
      <button className="toggle-button" onClick={toggleButtonText}>{buttonText}</button>
    </div>
  );
}

export default Showmore;