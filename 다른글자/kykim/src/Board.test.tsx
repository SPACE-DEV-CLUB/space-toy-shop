import React, { useState } from 'react';
import { act, fireEvent, render, renderHook } from '@testing-library/react';
import Board from './Board';

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn(),
// }));

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

  it('If click on the correct tile, the correct function works.', () => {
    const onCorrectFunc = jest.fn();
    const { getAllByText } = render(<Board stage={1} onCorrect={onCorrectFunc} />);

    const diffrentTiles = getAllByText('게절');
    fireEvent.click(diffrentTiles[0]);

    expect(onCorrectFunc).toBeCalled();
  });

  it('If click on the correct tile, go to the next stage.', () => {
    const { result } = renderHook(() => useState(1));
    const onCorrectFunc = () => act(() => result.current[1](2));
    const { getAllByText } = render(<Board stage={result.current[0]} onCorrect={onCorrectFunc} />);

    const differentTiles = getAllByText('게절');

    expect(result.current[0]).toBe(1);
    fireEvent.click(differentTiles[0]);
    expect(result.current[0]).toBe(2);
  });
});
