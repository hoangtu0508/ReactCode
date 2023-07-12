import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
//sắp xếp theo thời gian
    const orderedPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPost.map((post) => {
        return (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 20)}</p>
                <p>
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>
                <ReactionButtons post={post}/>
            </article>
        )

    })
    return (
        <div>
            <h2>Posts</h2>
            {renderedPosts}
        </div>
    )
}

export default PostsList