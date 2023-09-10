import { render, screen, waitFor } from '@testing-library/react';

import UserList from './UsersList';

describe('UserList', () => {

  it('should render UserList', () => {
    render(<UserList 
        search={"UAD"}
    />);
    expect(screen.getByText('td', { name: 'Symbol' })).toBeInTheDocument();
  });
});
