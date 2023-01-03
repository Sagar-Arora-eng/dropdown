import React from 'react'; 
import "./App.css"; 
import { DROPDOWN_OPTIONS } from './common/data/dropdown';
import Dropdown from "./components/dropdown"; 
import { useState } from 'react';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(DROPDOWN_OPTIONS[0]); 

  return (
    <div className='app'>
      <Dropdown
        options={DROPDOWN_OPTIONS}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        label={"What is your expertise field"}
      />
    </div>
  );
}

export default App; 