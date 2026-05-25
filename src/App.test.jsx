import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App smoke', () => {
  it('renders parameter controls without crashing', () => {
    render(<App />);
    expect(screen.getByText('Select Country/Countries and Get Import/Export Charts')).toBeInTheDocument();
  });
});