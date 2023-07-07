import React,{useContext} from 'react'
import Context from './GlobalState/Context'
const GlobalState = () => {
    const [state, dispatch] = useContext(Context)
    console.log(state)
  return (
    <div>GlobalState</div>
  )
}

export default GlobalState