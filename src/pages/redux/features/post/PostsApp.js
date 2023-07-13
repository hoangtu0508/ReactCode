import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import { useEffect } from 'react'
import PostsExcerpt from "./PostExcerpt";

const PostsApp = () => {
    const dispatch = useDispatch()
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError)
    const posts = useSelector(selectAllPosts)
    console.log(posts)

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])
    //sắp xếp theo thời gian
    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }
    
return (
    <div>
        <h2>Posts</h2>
        {content}
    </div>
)
}

export default PostsApp