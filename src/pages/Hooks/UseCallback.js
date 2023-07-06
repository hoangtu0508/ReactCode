import React, { useCallback, useState } from 'react'
import Context from './Context'

const UseCallback = () => {
    const [count, setCount] = useState(0)
    const handleClickButton = useCallback(() => {
        setCount(prevState => prevState + 1)
    })
  return (
    <div>
        <h3>Use Callback</h3>
        <div>
            <Context onClickButton={handleClickButton}/>
            <h1>{count}</h1>
        </div>
    </div>
  )
}

export default UseCallback