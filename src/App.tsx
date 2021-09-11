import React, { useState, useEffect } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { Home, Posts, NotFound } from './components';

import { helloWorld } from './constants/constants';
import { useFetch } from './adapters/jsonplaceholder.adapter';

import { User, TParams } from './App.types';
import { Post } from './components/Posts/Posts.types';
import { Comment } from './components/Comments/Comments.types';

import styles from './App.module.css';

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = () => {
            return useFetch('https://jsonplaceholder.typicode.com/posts');
        };

        const getComments = () => {
            return useFetch('https://jsonplaceholder.typicode.com/comments');
        };
        const getUsers = () => {
            return useFetch('https://jsonplaceholder.typicode.com/users');
        };
        const getAllData = () => {
            return Promise.all([getPosts(), getComments(), getUsers()]);
        };

        getAllData().then(([posts, comments, users]) => {
            posts.forEach((post: Post) => {
                post.comments = comments.filter((comment: Comment) => comment.postId === post.id);
                post.user = users.find((user: User) => user.id === post.userId);
            });
            setPosts(posts);
            setLoading(false);
        });
    }, []);

    if (loading)
        return (
            <div className={styles.loading}>
                <h1>Loading...</h1>
            </div>
        );

    const renderPost = (routerProps: RouteComponentProps<TParams>) => {
        const postId = parseInt(routerProps.match.params.id);
        const post = posts.find((post: Post) => post.id === postId);
        return post ? (
            <Posts helloWorld={helloWorld} posts={[post]} />
        ) : (
            <NotFound helloWorld={helloWorld} />
        );
    };

    console.log(`${helloWorld} ${App.displayName}`);
    return (
        <div className={styles.app}>
            <Switch>
                <Route exact path="/" component={() => <Home helloWorld={helloWorld} />} />
                <Route
                    path="/posts"
                    component={() => <Posts helloWorld={helloWorld} posts={posts} />}
                />
                <Route path="/post/:id" render={renderPost} />
                <Route component={() => <NotFound helloWorld={helloWorld} />} />
            </Switch>
        </div>
    );
}

App.displayName = 'App component';

export default App;
