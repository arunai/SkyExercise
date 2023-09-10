import { render, screen, waitFor } from '@testing-library/react';

import Pagination from './Pagination';

describe('Pagination Row', () => {

  it('should render pagination row', () => {
    render(<Pagination 
        nPages={10}
        currentPage={1}
        setCurrentPage={jest.fn()}
    />);
    expect(screen.getByText('link', { name: 'Previous' })).toBeInTheDocument();
  });
  
  it('should handle previous page', async () => {
    render(<Pagination 
        nPages={10}
        currentPage={1}
        setCurrentPage={jest.fn()}
    />);
    const currentPageButton = screen.getByRole('button', { name: 'Current' });
    await waitFor(() => {
        currentPageButton.click();
      expect(props.setCurrentPage).toHaveBeenCalled();
    });
  });
  it('should handle next page', async () => {

    render(<Pagination 
        nPages={10}
        currentPage={1}
        setCurrentPage={jest.fn()}
    />);
    expect(screen.getByText('link', { name: 'Next' })).toBeInTheDocument();
  });
});
