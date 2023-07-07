import React, { useContext } from 'react'
import { ThemeContext } from './UseContext'
import './Style/style.css'

const Paragraph = () => {

    const theme = useContext(ThemeContext)
    return (
        <div><h1 className={theme}>Xin chào</h1></div>
    )
}

export default Paragraph