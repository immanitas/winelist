import { render, screen } from '@testing-library/react';
import React from 'react';
import WineTable from '../WineTable';
import data from '../../../../assets/data.json'

describe("WineList component", () => {
  beforeEach(() => {
    render(<WineTable items={data} />)
  })

  it("should render container", () => {
    expect(screen.getByTestId("container")).toBeTruthy()
  })

  it("should render table", () => {
    expect(screen.getByTestId("table")).toBeTruthy()
  })

  it("should have minimum size of 420px", () => {
    expect(screen.getByTestId("table")).toHaveStyle("min-width: 420px")
  })
})