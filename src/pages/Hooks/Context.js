
import React, {memo} from 'react'

const Context = ({onClickButton}) => {
  return (
    <div>
        <h1>Hello Word</h1>
        <button onClick={() => onClickButton()}>Click here</button>
    </div>
  )
}

export default memo(Context)