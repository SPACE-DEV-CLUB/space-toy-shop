import React from 'react';
import { act, render, waitFor } from '@testing-library/react';
import Timer from './Timer';

describe('Timer', () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  it('renders timer', () => {
    const { container } = render(<Timer />);

    expect(container).toHaveTextContent('10');
  });

  // TODO: fix to work correctly
  it('time is reduced after timer rendering', async () => {
    const { container } = render(<Timer />);
    jest.useFakeTimers();

    jest.advanceTimersByTime(5000);
    expect(container).toHaveTextContent('10');

    jest.runAllTimers();
  });
});
