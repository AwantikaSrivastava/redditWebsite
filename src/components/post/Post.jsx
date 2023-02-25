import React from 'react'
import PostItem from '../postitem/PostItem'
import './Post.css'
function Post() {
    const posts = [
        {
            upvote: 10,
            image: "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature-825x465.jpg",
            title: "Question about new wallet",
            user:"theindependentonline",
            subreddit: "politics",
            comment_count: 11,
        },
        {
            upvote: 20,
            image: "https://icdn.isrgrajan.com/in/2022/11/Virat-Kohli.jpg",
            title: "Question about new wallet",
            user:"theindependentonline",
            subreddit: "Sports",
            comment_count: 30,
        },
        {
            upvote: 15,
            image: "https://hips.hearstapps.com/clv.h-cdn.co/assets/18/02/1515470256-levi-guzman-268866.jpg",
            title: "Question about new wallet",
            user:"theindependentonline",
            subreddit: "politics",
            comment_count: 15,
        },
    ]
  return (
    <div className='posts'>
        {posts.map(post => (
            <PostItem post={post} />
        ))}
    </div>
  )
}

export default Post
