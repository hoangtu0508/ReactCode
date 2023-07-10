import React, { useState } from 'react'
import './Header.css'
const HeaderInfo = (props) => {
  const {setIsEdit} = props

  const handleClick = () => {
    setIsEdit(true)
  }
  
  return (
    <>
      <div className='redux-container'>
        <div className='redux-content'>
          <div className='redux-content-one' style={{ backgroundColor: '#ff9051', backgroundImage: 'linear-gradient(180deg,#ff9051 2%, #ff9051 65%, #181818 100%)', }}>
            <div className='redux-content-header'>
              <div className='redux-content-header-edit'>
                <button className='redux-content-header-edit-but' onClick={() => handleClick()}>Edit</button>
              </div>
            </div>
            <div className='redux-content-info'>
              <img
                className='redux-content-info-ava'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGBxaYdGHEpJ9001ON09kQBXAnqZaCYG3--fcJQUAIbkQAjWc-BpxmbgwJrzURi0j8gc&usqp=CAU'
              />
              <div className='redux-content-info-fullname'>Trương Hoàng Tú</div>
              <div className='redux-content-info-age'>23 years old </div>
              <div>I'm a intern TMA Solutions Bình Định</div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </>

  )
}

export default HeaderInfo