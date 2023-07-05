import React from 'react'
import Header from '../Header'
import Silebar from '../Sidebar'
import './DefaultLayout.css'

const DefaultLayout = ({children}) => {
  return (
    <div className='main'>
        <Header />
        <div className='container'>
            <Silebar />
            <div className='content'>{children}</div>
        </div>
    </div>
  )
}

export default DefaultLayout