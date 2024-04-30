import React, { useState } from 'react';
import './Nu1.css';

export default function OptionsList() {
  const [selectedOptions, setSelectedOptions] = useState({
    typeOfCar: null,
    pieceType: null,
    supplements: null
  });

  // This function will handle the selection of a new option within a category
  const handleOptionChange = (category, value) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [category]: value
    }));
  };

  // You can expand the visibility state and toggle function for more categories if needed
  const [visibilityStates, setVisibilityStates] = useState({
    sellExecutionOptions: true,
    typeOfCar: true,
    pieceType: true,
    supplements: true
  });

  const toggleVisibility = (category) => {
    setVisibilityStates(prevState => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <div className="options-container">
      {/* Section for 'Sell Execution Options', though not clear in the image if needed */}
      <section className="category">
        <header onClick={() => toggleVisibility('sellExecutionOptions')}>
          Sell Execution Options <span className="toggle-icon">^</span>
        </header>
        {visibilityStates.sellExecutionOptions && (
          <div className="options">
            { <section className="category">
        <header onClick={() => toggleVisibility('typeOfCar')}>
          Type of Car <span className="toggle-icon">^</span>
        </header>
        {visibilityStates.typeOfCar && (
          <div className="filter">
            <label><input type="radio" name="typeOfCar" onChange={() => handleOptionChange('typeOfCar', 'bmw')} checked={selectedOptions.typeOfCar === 'bmw'} /> bmw</label><br></br>
            <label><input type="radio" name="typeOfCar" onChange={() => handleOptionChange('typeOfCar', 'Mercedes')} checked={selectedOptions.typeOfCar === 'Mercedes'} /> Mercedes</label><br></br>
            <label><input type="radio" name="typeOfCar" onChange={() => handleOptionChange('typeOfCar', 'kia')} checked={selectedOptions.typeOfCar === 'kia'} /> kia</label><br></br>
            <label><input type="radio" name="typeOfCar" onChange={() => handleOptionChange('typeOfCar', 'ford')} checked={selectedOptions.typeOfCar === 'ford'} /> ford</label><br></br>
            <label><input type="radio" name="typeOfCar" onChange={() => handleOptionChange('typeOfCar', 'toyota')} checked={selectedOptions.typeOfCar === 'toyota'} /> toyota</label><br></br>
            <label><input type="radio" name="typeOfCar" onChange={() => handleOptionChange('typeOfCar', 'Hyundai')} checked={selectedOptions.typeOfCar === 'Hyundai'} /> Hyundai</label><br></br>
          </div>
        )}
      </section>
}

<section className="category">
        <header onClick={() => toggleVisibility('pieceType')}>
          Piece Type <span className="toggle-icon">^</span>
        </header>
        {visibilityStates.pieceType && (
          <div className="filter">
            <label><input type="checkbox" /> engine</label><br></br>
            <label><input type="checkbox" /> hurry</label><br></br>
            <label><input type="checkbox" /> Lime</label><br></br>
            <label><input type="checkbox" /> Sprayer</label><br></br>
            <label><input type="checkbox" /> Pines</label><br></br>
            <label><input type="checkbox" /> Brake oil</label><br></br>
          </div>
        )}
      </section>

      <section className="category">
        <header onClick={() => toggleVisibility('supplements')}>
          Supplements <span className="toggle-icon">^</span>
        </header>
        {visibilityStates.supplements && (
          <div className="filter">
            <label><input type="checkbox" /> Car floors</label><br></br>
            <label><input type="checkbox" /> Mirror cover</label><br></br>
            <label><input type="checkbox" /> a screen</label><br></br>
            <label><input type="checkbox" /> Brushes</label><br></br>
            <label><input type="checkbox" /> Spoiler</label><br></br>
           <label><input type="checkbox" /> Front lip</label><br></br>
          </div>
        )}
      </section>

          </div>
        )}
        
      </section>

      
      {/* Repeat sections for 'Piece Type' and 'Supplements' with the corresponding options */}
    </div>
  );
}
