import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

type HomeProps = {
    helloWorld: string;
};
const Home = ({ helloWorld }: HomeProps) => {
    console.log(`${helloWorld} ${Home.displayName}`);
    return (
        <div className={styles.homeWrapper}>
            <img src="https://q.agency/uploads/assets/logos/Logo-nav.svg" />
            <h1>Q-Test</h1>
            <p>
                Well, you should really test the <code>/posts</code> and <code>/post/:id</code> page
            </p>
            Please use <Link to="/posts">this link</Link> to view all test posts...
        </div>
    );
};

Home.displayName = 'Home component';

export { Home };
