import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postsSlice'

const AddPostForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const addPost = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content,
                })
            )
            setTitle('')
            setContent('')

        }
        console.log(title, content)
    }
    console.log(title,content)
    return (
        <div>
            <h2>Add a new Post</h2>
            <form>
                <label>Post title:</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)}></input><br />
                <label>Post content:</label>
                <textarea onChange={(e) => setContent(e.target.value)}></textarea><br />
                <button onClick={() => addPost()}>Add Post</button>
            </form>
        </div>
    )
}

export default AddPostForm