import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { NotFound } from './NotFound';
import { helloWorld } from './../../constants/constants';

test('renders NotFound component...', async () => {
    render(
        <MemoryRouter>
            <NotFound helloWorld={helloWorld} />
        </MemoryRouter>
    );
    expect(screen.getByText(/404/i));
});
