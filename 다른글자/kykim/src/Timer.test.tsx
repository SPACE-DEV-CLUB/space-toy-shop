import React from 'react';
import { render } from '@testing-library/react';
import Timer from './Timer';

describe('Timer', () => {
  it('renders timer', () => {
    const { container } = render(<Timer />);

    expect(container).toHaveTextContent('10');
  });

  it('time is reduced after timer rendering', () => {
    const { container } = render(<Timer />);
    jest.useFakeTimers();

    setTimeout(() => {
      expect(container).toHaveTextContent('5');
    }, 5000);

    jest.runAllTimers();
  });
});
