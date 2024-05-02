import React, { useState } from 'react';
import './Nu1.css';

export default function NavbarWithOptions() {
  const [selectedOptions, setSelectedOptions] = useState({
    typeOfCar: [],  // Manage multiple selections for types of cars
    pieceType: [],  // Manage multiple selections for types of car pieces
    supplements: [] // Manage multiple selections for supplements
  });

  const [visibilityStates, setVisibilityStates] = useState({
    typeOfCar: false,
    pieceType: false,
    supplements: false // Adding visibility control for the new category
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleOptionChange = (category, value) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [category]: prevState[category].includes(value)
        ? prevState[category].filter(item => item !== value)
        : [...prevState[category], value]
    }));
  };

  const toggleVisibility = (category) => {
    setVisibilityStates(prevState => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <div className="navbar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search parts or vehicles..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="options-container">
        {Object.keys(visibilityStates).map(category => (
          <div key={category} className="category">
            <header onClick={() => toggleVisibility(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)} <span className="toggle-icon">{visibilityStates[category] ? '▼' : '▲'}</span>
            </header>
            {visibilityStates[category] && (
              <div className="options">
                {category === 'typeOfCar' && ['bmw', 'Mercedes', 'kia', 'ford', 'toyota', 'Hyundai'].map(car => (
                  <div key={car} className="option-item">
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => handleOptionChange(category, car)}
                        checked={selectedOptions[category].includes(car)}
                      /> {car}
                    </label>
                  </div>
                ))}
                {category === 'pieceType' && ['engine', 'turbo', 'exhaust'].map(part => (
                  <div key={part} className="option-item">
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => handleOptionChange(category, part)}
                        checked={selectedOptions[category].includes(part)}
                      /> {part}
                    </label>
                  </div>
                ))}
                {category === 'supplements' && ['GPS', 'seats', 'tires'].map(supplement => (
                  <div key={supplement} className="option-item">
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => handleOptionChange(category, supplement)}
                        checked={selectedOptions[category].includes(supplement)}
                      /> {supplement}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
