import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.css';

type NotFoundProps = {
    helloWorld: string;
};
const NotFound = ({ helloWorld }: NotFoundProps) => {
    console.log(`${helloWorld} ${NotFound.displayName}`);
    return (
        <div className={styles.notFound}>
            <h1>404 page</h1>
            Press <Link to="/posts">here</Link> to return to the posts page
        </div>
    );
};

NotFound.displayName = 'NotFound Component';

export { NotFound };
