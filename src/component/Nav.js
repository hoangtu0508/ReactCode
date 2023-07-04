import React from 'react'
import './Nav.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className={"body"}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default Nav