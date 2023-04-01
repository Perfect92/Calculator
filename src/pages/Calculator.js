
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Calculator () {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')

  const dispatch = useDispatch()

  const result = useSelector((state) => state.result)

  const num1Change = (e) => {
    setNum1(e.target.value);
    dispatch({ type: 'SET_NUM1', payload: +e.target.value }) 
  }
  const num2Change = (e) => {
    setNum2(e.target.value);
    dispatch({ type: 'SET_NUM2', payload: +e.target.value });
  }

  const handleAdd = () => {
    dispatch({ type: 'ADD' 
  })
  setNum1('')
  setNum2('')
}

  const handleSubtract = () => {
    dispatch({ type: 'SUBTRACT' })
    setNum1('')
    setNum2('')
  }

  const handleMultiply = () => {
    dispatch({ type: 'MULTIPLY' })
    setNum1('')
    setNum2('')
  }

  const handleDivide = () => {
    dispatch({ type: 'DIVIDE' })
    setNum1('')
    setNum2('')
  }

  return (
    <div>
      <input type="number" placeholder={num1.length === 0 ? "Ведите число": ''} value={num1} onChange={num1Change} />
      <input type="number" placeholder={num2.length === 0 ? "Ведите число": ''} value={num2} onChange={num2Change} />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleDivide}>/</button>
      <p>Result: {result}</p>
    </div>
  )
}

