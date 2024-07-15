import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setinput1, setinput2, setOperator, calculateresult } from '../actions/Calculator_actions';

const Calculator = () => {
  const dispatch = useDispatch();
  const input1 = useSelector((state) => state.input1);
  const input2 = useSelector((state) => state.input2);
  const operator = useSelector((state) => state.operator);
  const result = useSelector((state) => state.result);

  const [isFirstInput, setIsFirstInput] = React.useState(true);

  const handleClick = (number) => {
    if (isFirstInput) {
      dispatch(setinput1(input1 * 10 + number));
    } else {
      dispatch(setinput2(input2 * 10 + number));
    }
  };

  const handleInputChange = (e, setInputAction) => {
    dispatch(setInputAction(Number(e.target.value)));
  };

  const handleOperatorChange = (e) => {
    setIsFirstInput(false);
    dispatch(setOperator(e.target.value));
  };

  const handleCalculateResult = () => {
    dispatch(calculateresult());
  };

  const handleClear = () => {
    dispatch(setinput1(0));
    dispatch(setinput2(0));
    dispatch(setOperator(''));
    setIsFirstInput(true);
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="container">
      <input
        type="number"
        placeholder="inputOne"
        value={input1}
        onChange={(e) => handleInputChange(e, setinput1)}
      />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        placeholder="inputTwo"
        value={input2}
        onChange={(e) => handleInputChange(e, setinput2)}
      />
      =
      <input type="number" placeholder="Result" value={result} readOnly />
      <div>
        {numbers.map((item, index) => (
          <button key={index} onClick={() => handleClick(item)}>{item}</button>
        ))}
        <button onClick={handleCalculateResult}>Result</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
