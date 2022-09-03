import React from 'react'
import {render, screen} from '@testing-library/react'
import Message from '../Message'

test('find text "test message name"', () => {
    render((
        <Message
            avatar=""
            name="test message name"
            message=""
            time=""
        />
    ))
    const linkElement = screen.getByText(/test message name/i)
    expect(linkElement).toBeInTheDocument()
})
test('find text "test message"', () => {
    render((
        <Message
            avatar=""
            name=""
            message="test message"
            time=""
        />
    ))
    const linkElement = screen.getByText(/test message/i)
    expect(linkElement).toBeInTheDocument()
})
test('find text "test message time"', () => {
    render((
        <Message
            avatar=""
            name=""
            message=""
            time="test message time"
        />
    ))
    const linkElement = screen.getByText(/test message time/i)
    expect(linkElement).toBeInTheDocument()
})
