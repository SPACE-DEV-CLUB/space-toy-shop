import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

describe('Board', () => {
  it('renders a word "계절"', () => {
    const { container } = render(<Board />);

    expect(container).toHaveTextContent('계절');
    expect(container).toHaveTextContent('게절');
  });

  it('The number of tiles is the square of (stage + 3)', () => {
    const { getAllByRole } = render(<Board stage={1} />);

    const tiles = getAllByRole('listitem');
    expect(tiles).toHaveLength(16);
  });

  it('There is only one tile of a different shape', () => {
    const { getAllByText } = render(<Board stage={1} />);

    const sameTiles = getAllByText('계절');
    const differentTiles = getAllByText('게절');

    expect(sameTiles).toHaveLength(15);
    expect(differentTiles).toHaveLength(1);
  });
});
