import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

describe('App', () => {
  it('renders a word "계절"', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('계절');
    expect(container).toHaveTextContent('게절');
  });
});
