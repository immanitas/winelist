import { render, screen } from '@testing-library/react';
import React from 'react';
import WineTableHeader from '../WineTableHeader';

describe("WineListHeader component", () => {
  beforeEach(() => {
    render(<WineTableHeader />)
  })

  it("should have header container", () => {
    expect(screen.getByTestId("header")).toBeTruthy()
  })
})