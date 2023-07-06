import React, { useEffect, useRef, useState } from 'react'


const UseRef = () => {
    const timerId = useRef()
    const [time, setTime] = useState()
    const [showTime, setShowTime] = useState(false)
    
    useEffect(() => {
        if (time === 0) {
            clearInterval(timerId.current)
        }
    },[time])

    const handleButtonStart = () => {
        setShowTime(true)
        timerId.current = setInterval(() => {
            setTime(prevState => prevState - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }
    return (
        <div>
            <h3>Use Ref Hook</h3>
            <div>
                <h4>Đồng hồ đếm giờ</h4>
                <input type='number' onChange={(e) => setTime(e.target.value)}></input>
                {showTime && ( <h1 >{time}</h1>)}
                <button onClick={() => handleButtonStart()}>Start</button>
                <button onClick={() => handleStop()}>Stop</button>
            </div>
        </div>
    )
}

export default UseRef