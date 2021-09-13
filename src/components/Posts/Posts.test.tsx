import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Posts } from './Posts';
import { helloWorld } from './../../constants/constants';

const postData = [
    {
        id: 0,
        comments: [
            {
                id: 0,
                postId: 0,
                body: 'lorem ipsum',
                email: 'lorem ipsum'
            }
        ],
        userId: 0,
        user: {
            email: 'Sincere@april.biz',
            id: 1,
            name: 'Leanne Graham',
            phone: '1-770-736-8031 x56442',
            username: 'Bret'
        },
        title: 'lorem ipsum',
        body: 'lorem ipsum'
    }
];
test('renders user name on posts', async () => {
    render(
        <MemoryRouter>
            <Posts posts={postData} helloWorld={helloWorld} />
        </MemoryRouter>
    );
    expect(screen.queryAllByText(/Bret/i));
});
