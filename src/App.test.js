// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoRotate title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoRotate/i);
    expect(titleElement).toBeInTheDocument();
});
