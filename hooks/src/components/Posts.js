import React from 'react';
import styles from './Posts.modules.css'

export const Posts = ({ posts, loading }) => {
    if(loading) {
        return <h2>Loading...</h2>


    }


    return (
        <div className="listGroup">
            {posts.map(post => (
                <div key={post.id} className="listGroupItem">
                    {post.title}
                </div>
            ))}
        </div>
    )
}
