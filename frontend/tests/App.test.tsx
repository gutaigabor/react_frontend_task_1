import React from 'react';
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('<App />', () => {
  test('App mounts properly', () => {
    const wrapper = render(<App />)
    expect(wrapper).toBeTruthy()
    const text = screen.getByText(
      'Trips'
    );
    expect(text.textContent).toBeTruthy()
  })
});