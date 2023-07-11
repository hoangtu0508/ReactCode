import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0)
    const addValue = Number(amount) || 0;

    const addAmount = (addValue) => {
        dispatch(incrementByAmount(addValue))
        setAmount(0)
    }   
    const resetAll = () => {
        setAmount(0)
        dispatch(reset())
    }
  return (
    <div>
        <h1>{count}</h1>
        <div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
        <div>
            <input value={amount} onChange={(e) => setAmount(e.target.value)}></input>
            <button onClick={() => addAmount(addValue)}>incrementAmount</button>
            <button onClick={() => resetAll()}>resetAll</button>
        </div>
    </div>
  )
}

export default Counter