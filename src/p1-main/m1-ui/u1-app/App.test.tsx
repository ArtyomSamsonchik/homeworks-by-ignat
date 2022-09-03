import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'

test('find text "react homeworks"', () => {
    render(<App/>)
    const linkElement = screen.getByText(/react homeworks/i)
    expect(linkElement).toBeInTheDocument()
})
