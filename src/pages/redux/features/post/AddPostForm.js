import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const users = useSelector(selectAllUsers)

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const addPost = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewPost({ title, body: content, userId })).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    };
    console.log(users)
    // Kiểm tra đã điền đủ thông tin các input chưa, đủ thì hiện Button

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
    return (
        <div>
            <section>
                <h2>Add a new Post</h2>
                <form>
                    <label>Post title:</label>
                    <input
                        type="text"
                        id="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                    ></input>
                    <br />
                    <label>Author:</label>
                    <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                        <option value=""></option>
                        {usersOptions}
                    </select>
                    <label>Post content:</label>
                    <textarea
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                    ></textarea>
                    <br />
                    <button
                        type="button"
                        style={{ maxWidth: 100, marginLeft: 85, borderRadius: 5 }}
                        onClick={() => addPost()}
                        disabled={!canSave}
                    >
                        Save Post
                    </button>
                </form>
            </section>
        </div>
    );
};

export default AddPostForm;