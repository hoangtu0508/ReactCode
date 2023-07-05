import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='hooks'>
        <h3>List Hooks-React</h3>
          <ul>
            <li><Link to="/usestate">useState</Link></li>
            <li><Link to="/useeffect">useEffect</Link></li>
            <li><Link to="/usestate">useState</Link></li>
          </ul>
      </div>
      <div className='redux'>
      <h3>List Redux-Toolkit</h3>
      </div>
    </div>
  )
}

export default SideBar