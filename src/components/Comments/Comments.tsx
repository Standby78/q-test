import React from 'react';
import { Comment } from './Comments.types';

import styles from './Comments.module.css';

type CommentsProps = {
    comments: Comment[];
    helloWorld: string;
};

const Comments = ({ comments, helloWorld }: CommentsProps) => {
    console.log(`${helloWorld} ${Comments.displayName}`);
    return (
        <ul className={styles.comment}>
            {comments.map((comment: Comment, index: number) => (
                <li key={`comment-${index}`}>
                    <p className={styles.author}>{comment.email} wrote:</p>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>
    );
};

Comments.displayName = 'Comments component';

export { Comments };
