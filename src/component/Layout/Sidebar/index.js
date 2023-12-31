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
            <li><Link to="/useref">useRef</Link></li>
            <li><Link to="/usecallback">useCallback</Link></li>
            <li><Link to="/usememo">useMemo</Link></li>
            <li><Link to="/usereducer">UseReducer</Link></li>
            <li><Link to="/usecontext">UseContext</Link></li>
            <li><Link to="/useglobalstate">Global State with Context + useReducer </Link></li>
          </ul>
      </div>
      <div>
        <h3>List Redux Toolkit</h3>
        <ul>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/postsapp">PostsApp</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar