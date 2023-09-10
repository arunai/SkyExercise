import { render, screen } from '@testing-library/react';
import Header from './Header';

it('should render Header component', () => {
  const { container } = render(<Header />);
  expect(container).toBeTruthy();
});

test('renders Header title', () => {
  render(<Header />);
  expect(screen.getByText(/Cryptocurrency/i).toBeInTheDocument());
});
