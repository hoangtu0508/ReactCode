import React from 'react'
import Header from '../Header'
import Silebar from '../Sidebar'
import './DefaultLayout.css'
import GlobalState from '../../../pages/Hooks/GlobalState/index'

const DefaultLayout = ({ children }) => {
  return (
    <GlobalState>
      <div className=' main'>
        <Header />
        <div className='container'>
          <Silebar />
          <div className='content'>{children}</div>
        </div>
      </div>
    </GlobalState>

  )
}

export default DefaultLayout