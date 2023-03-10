import { ReactNode } from 'react'

export interface CommonProps {
	id?: string | undefined
	className?: string
	children?: ReactNode
	onClick?: (value?: unknown) => void
	key?: string
	center?: boolean
	['data-testid']?: string
	testId?: string
	disabled?: boolean
	active?: boolean
}
