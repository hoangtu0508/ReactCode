import React from 'react'
import List from '../../component/List'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <span><a href='/hooks'>Go to Hooks</a></span>
        <span><a href='/redux'>Go to Redux</a></span>
    </div>
  )
}

export default Home