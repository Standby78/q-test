import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Comments } from '../index';

import { Post } from './Posts.types';

import styles from './Posts.module.css';

type PostsTypes = {
    posts: Post[];
    helloWorld: string;
};

const Posts = ({ posts, helloWorld }: PostsTypes) => {
    const [filter, setFilter] = useState('');
    const showingAllPosts = posts.length > 1;

    const inputHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setFilter(event.currentTarget.value);
    };

    const renderPosts = posts.map((post: Post, index: number) => {
        if (!post.user?.username?.includes(filter)) return null;
        const Post = () => {
            return (
                <div className={styles.post}>
                    <p className={styles.author}>Posted by: {post.user?.username}</p>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    {post.comments?.length > 0 && (
                        <>
                            <h4>Comments:</h4>
                            <Comments helloWorld={helloWorld} comments={post.comments} />
                        </>
                    )}
                </div>
            );
        };
        return showingAllPosts ? (
            <Link key={`post-${index}`} className={styles.postLink} to={`/post/${post.id}`}>
                <Post />
            </Link>
        ) : (
            <Post key={`post-${index}`} />
        );
    });

    console.log(`${helloWorld} ${Posts.displayName}`);
    return (
        <div>
            {!showingAllPosts && (
                <Link className={styles.link} to="/posts">
                    Back to all posts
                </Link>
            )}
            <h1>Recent Posts</h1>
            {showingAllPosts && (
                <>
                    <label>Filter posts: </label>
                    <input
                        type="text"
                        name="filter"
                        value={filter}
                        placeholder="enter Username"
                        onChange={inputHandler}
                    />
                </>
            )}
            <ul className={styles.postsWrapper}>{renderPosts}</ul>
        </div>
    );
};

Posts.displayName = 'Posts Component';

export { Posts };
