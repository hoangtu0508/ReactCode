import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={"nav"}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/hooks">Hooks</a></li>
            <li><a href="/redux">Redux</a></li>

        </ul>
    </div>
  )
}

export default Header