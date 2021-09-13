import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

test('renders Loading... and after that the Home route...', async () => {
    const { rerender } = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    rerender(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    await waitFor(() => screen.findByText(/Q-Test/i), { timeout: 3000 });
});

test('renders all posts after going to /posts route... ', async () => {
    const { rerender } = render(
        <MemoryRouter initialEntries={['/posts']}>
            <App />
        </MemoryRouter>
    );

    rerender(
        <MemoryRouter initialEntries={['/posts']}>
            <App />
        </MemoryRouter>
    );
    await waitFor(() => screen.findByText(/Recent Posts/i), { timeout: 3000 });
});

test('renders all posts after going to /posts route... ', async () => {
    const { rerender } = render(
        <MemoryRouter initialEntries={['/post/1']}>
            <App />
        </MemoryRouter>
    );

    rerender(
        <MemoryRouter initialEntries={['/posts']}>
            <App />
        </MemoryRouter>
    );
    await waitFor(() => screen.findByText(/Posted by:/i), { timeout: 3000 });
});
