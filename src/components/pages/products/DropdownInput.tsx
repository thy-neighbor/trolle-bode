import React, { useState } from 'react';
import './DropdownInput.css';

interface DropdownInputProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const DropdownInput: React.FC<DropdownInputProps> = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        onSelect(selectedValue);
    };

    return (
        <div className='Dropdown__container'>
            <select className="select" value={selectedOption} onChange={handleSelect}>
                {/* <option value="">Select an option</option> */}
                {options.map((option) => (
                    <option key={option} value={option}>
                    {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropdownInput;