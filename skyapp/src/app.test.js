import { render, screen, waitFor } from '@testing-library/react';
import App from './app';

test('renders app header title', async () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  await  waitFor(() => {

    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent(/cryptocurrency/i);
  });
});

test('renders app footer title', async () => {
  render(<App />);
  const footerElement = screen.getByRole('contentinfo');
  await  waitFor(() => {
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent(/copyright/i);
  });
});

