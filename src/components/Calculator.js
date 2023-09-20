import React, { useState } from 'react';
import './Calculator.css';
import Navbar from './Navbar';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="all">
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly className='ip' />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button className='btn' onClick={() => handleButtonClick('7')}>7</button>
        <button className='btn' onClick={() => handleButtonClick('8')}>8</button>
        <button className='btn' onClick={() => handleButtonClick('9')}>9</button>
        <button className='btn' onClick={() => handleButtonClick('+')}>+</button>
        <button className='btn' onClick={() => handleButtonClick('4')}>4</button>
        <button className='btn' onClick={() => handleButtonClick('5')}>5</button>
        <button  className='btn'onClick={() => handleButtonClick('6')}>6</button>
        <button className='btn'onClick={() => handleButtonClick('-')}>-</button>
        <button className='btn' onClick={() => handleButtonClick('1')}>1</button>
        <button className='btn'onClick={() => handleButtonClick('2')}>2</button>
        <button className='btn' onClick={() => handleButtonClick('3')}>3</button>
        <button className='btn' onClick={() => handleButtonClick('*')}>*</button>
        <button className='btn' onClick={() => handleButtonClick('0')}>0</button>
        <button className='btn' onClick={() => handleButtonClick('.')}>.</button>
        <button className='btn' onClick={() => handleButtonClick('=')}>=</button>
        <button className='btn'onClick={() => handleButtonClick('/')}>/</button>
        <button  className='btn'onClick={() => handleButtonClick('C')}>C</button>
        <button className='btn' onClick={() => handleButtonClick('%')}>%</button>
      </div>
    </div>
    </div>
    </>
  );
}

export default Calculator;
