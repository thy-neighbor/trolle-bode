import React, { useState } from 'react';
import './DropdownInput.css';
import Select from 'react-select';

interface DropdownInputProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const DropdownInput: React.FC<DropdownInputProps> = ({ options, onSelect }) => {

    return(
        <div className='Dropdown__container'>
            <Select
                className="basic-single"
                classNamePrefix="select"
                name="color"
                options={options}
            />

            <div
                style={{
                color: 'hsl(0, 0%, 40%)',
                //display: 'inline-block',
                fontSize: 12,
                fontStyle: 'italic',
                marginTop: '1em',
                display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}
            ></div>
        </div>
    );
};



// const DropdownInput: React.FC<DropdownInputProps> = ({ options, onSelect }) => {
//     const [selectedOption, setSelectedOption] = useState<string>('');
//     const [isOpen, setIsOpen] = useState<boolean>(false);

//     const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         const selectedValue = event.target.value;
//         setSelectedOption(selectedValue);
//         onSelect(selectedValue);
//     };

//     return (
//         <div className='Dropdown__container'>
//             <select className="select" value={selectedOption} onChange={handleSelect} onClick={()=>{setIsOpen(true)}}>
//                 {!isOpen ? <option value="">Choose Size</option> : ""}
//                 {options.map((option) => (
//                     <option key={option} value={option}>
//                     {option}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// };

export default DropdownInput;