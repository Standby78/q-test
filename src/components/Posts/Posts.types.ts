import { User } from '../../App.types';
import { Comment } from '../Comments/Comments.types';

export type Post = {
    id: number;
    comments: Comment[];
    userId: number;
    user: User;
    title: string;
    body: string;
};
