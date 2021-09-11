import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

jest.mock('./components/Home/Home.tsx');

test('renders Loading... placeholder', () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    const linkElement = screen.getByText(/Loading.../i);
    expect(linkElement).toBeInTheDocument();
});
