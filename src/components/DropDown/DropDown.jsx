import React, { useState } from 'react';
import "./DropDown.css"; 

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const options = ['Frukost', 'Lunch', 'Middag', 'Mellanmål']; 

    return (
        <div className={`dropdown ${isOpen ? 'open' : ''}`}>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {selectedOption || 'Måltidstyp  ↓'}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;