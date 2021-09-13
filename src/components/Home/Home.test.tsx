import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Home } from './Home';
import { helloWorld } from './../../constants/constants';

test('renders Loading... and after that the Home route...', async () => {
    render(
        <MemoryRouter>
            <Home helloWorld={helloWorld} />
        </MemoryRouter>
    );
    expect(screen.getByText(/Q-Test/i));
});
