import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OSB Admin', () => {
    render(<App />);
    const h1Element = screen.getByText(/OSB Admin Panel/i);
    expect(h1Element).toBeInTheDocument();
});
