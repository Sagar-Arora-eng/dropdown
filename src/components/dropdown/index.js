import React from 'react'; 
import "./dropdown.css"; 
import { useState } from 'react';

const Dropdown = (props) => {

  const {label, selectedOption, setSelectedOption, options} = props;

  const [isOptionVisible, setisOptionVisible] = useState(false); 
  
  const handleSelected=(option)=> {
    setSelectedOption(option)
    setisOptionVisible(false)
  }
  return (
    <div className="dropdown">
      <div className="heading">Dropdown by Sagar Arora</div>
      {label && <div className="dropdown-label">{label}</div>}

      <div className="dropdown-component">
        <div className="selected-option-wrapper" onClick={() => {
          setisOptionVisible(!isOptionVisible)
        }}>
          <div>{selectedOption}</div>
          {isOptionVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-up"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#5c6dff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="6 15 12 9 18 15" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-down"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#5c6dff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="6 9 12 15 18 9" />
            </svg>
          )}
        </div>
        {isOptionVisible && <div className='dropdown-options'>
          {options.length > 0 && options.map((option) => <div className='dropdown-option' onClick={()=> {handleSelected(option)}}>{option}</div>)}
          </div>}
      </div>
    </div>
  );
}

export default Dropdown; 