import React from 'react';
import { render, screen } from '@testing-library/react';

import { Comments } from './Comments';
import { helloWorld } from './../../constants/constants';

const commentsData = [
    {
        id: 0,
        postId: 0,
        body: 'lorem ipsum',
        email: 'lorem ipsum'
    }
];
test('renders Lorem ipsum on comments', async () => {
    render(<Comments comments={commentsData} helloWorld={helloWorld} />);
    expect(screen.queryAllByText(/lorem ipsum/i));
});
