import { render, screen } from '@testing-library/react';

import Footer from './Footer';

it('should render Footer component', () => {
  const { container } = render(<Footer />);
  expect(container).toBeTruthy();
});

test('renders Footer title', () => {
  render(<Footer />);
  expect(screen.getByText('copyright').toBeInTheDocument());
});
