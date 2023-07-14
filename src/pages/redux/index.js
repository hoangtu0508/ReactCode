import React from 'react'
import PostsList from './features/post/PostsList'
import AddPostForm from './features/post/AddPostForm'
const index = () => {
  return (
    <div>
      <div><AddPostForm/></div>
      <div><PostsList /></div>
    </div>
  )
}

export default index