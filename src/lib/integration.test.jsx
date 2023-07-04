// Learn more about Testing Library and queries here:
// https://testing-library.com/docs/queries/about

import * as React from 'react'
import {cleanup, render, screen} from '@testing-library/react'
import {afterEach, describe, expect, test} from 'vitest'
import HelloWorld from './index'

describe('Integration test', () => {
    afterEach(cleanup)

    test('Minimal render display expected text', () => {
        render(<HelloWorld/>)
        expect(screen.getByText('Hello, World!'))
    })

    test('Expected greetee is displayed', () => {
        const greetee = 'Universe'
        render(<HelloWorld greetee={greetee}/>)
        expect(screen.getByText(`Hello, ${greetee}!`))
    })
})
