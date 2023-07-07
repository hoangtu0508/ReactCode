import React, { createContext, useState } from 'react'
import Paragraph from './Paragraph'

export const ThemeContext = createContext()

const UseContext = () => {

    const [color, setColor] = useState('dark')

    const handlleToggle = () => {
        setColor(color === 'dark' ? 'light' : 'dark')
    }
    console.log(color)
    return (
        <ThemeContext.Provider value={color}>
            <div>
                <h3>UseContext</h3>
                <Paragraph />
                <button onClick={() => handlleToggle()}>Toggle</button>
            </div>
        </ThemeContext.Provider>
    )
}

export default UseContext