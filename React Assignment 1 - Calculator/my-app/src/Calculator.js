import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleInput1 = (e) => setNum1(e.target.value);
    const handleInput2 = (e) => setNum2(e.target.value);

    const handleCalculation = (operation) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
            setError('Please enter valid numbers');
            return;
        }

        setError('');
        let res;
        switch (operation) {
            case 'add':
                res = n1 + n2;
                break;
            case 'subtract':
                res = n1 - n2;
                break;
            case 'multiply':
                res = n1 * n2;
                break;
            case 'divide':
                res = n2 !== 0 ? n1 / n2 : 'Cannot divide by 0';
                break;
            default:
                res = 0;
        }
        setResult(res);
    };

    return (
        <div className="calculator-container">
            <h1>Calculator</h1>
            <div className="input-section">
                <input type="number" value={num1} onChange={handleInput1} placeholder="Enter first number" />
                <input type="number" value={num2} onChange={handleInput2} placeholder="Enter second number" />
            </div>
            <div className="button-section">
                <button onClick={() => handleCalculation('add')}>+</button>
                <button onClick={() => handleCalculation('subtract')}>-</button>
                <button onClick={() => handleCalculation('multiply')}>*</button>
                <button onClick={() => handleCalculation('divide')}>/</button>
            </div>
            <div className="result-section">
                {error ? <p className="error">{error}</p> : <p>Result: {result !== null ? result : '--'}</p>}
            </div>
        </div>
    );
};

export default Calculator;
