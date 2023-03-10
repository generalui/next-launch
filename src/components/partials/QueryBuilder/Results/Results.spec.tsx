/**
 * Test file for Results
 */
import { render, screen } from '@testing-library/react'
import '__mocks__/index'
import React from 'react'
import { Results } from './index'

describe('Results Component', () => {
	it('renders on the page', () => {
		render(<Results columns={[]} title={'title'} />)

		const component = screen.getByTestId('Results')

		expect(component).toBeInTheDocument()
	})
})
