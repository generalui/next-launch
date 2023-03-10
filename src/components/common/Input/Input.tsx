/* eslint-disable react/display-name */
import cn from 'classnames'
import { LegacyRef, forwardRef } from 'react'
import { Field } from 'react-final-form'
import { OnChange } from 'react-final-form-listeners'
import { InputLabel } from 'common/InputLabel'
import { TextArea } from 'common/TextArea'
import { InputProps } from './Input.types'

export const Input = forwardRef(
	(
		{
			className,
			placeholder,
			id,
			name,
			type,
			onChange,
			testId = 'Input',
			rows = 4,
			disabled,
			label,
			labelClassName
		}: InputProps,
		reference
	) => {
		return (
			<>
				<InputLabel className={labelClassName} name={name} label={label} />
				<Field name={name}>
					{({ input, meta }) => {
						const hasError = meta.error && meta.touched

						return (
							<>
								{type === 'textarea' ? (
									<TextArea
										rows={rows}
										placeholder={placeholder}
										name={input.name}
										value={input.value}
										onChange={input.onChange}
										disabled={disabled}
										error={hasError}
										className={cn(className)}
									/>
								) : (
									<input
										data-testid={testId}
										name={input.name}
										id={id || name}
										className={cn(
											'input input-bordered block w-full border border-gray-300 text-gray-600 text-sm rounded-lg p-2.5 h-12 ',
											hasError && 'border-red-500',
											disabled && 'bg-gray-100 border border-gray-100',
											className
										)}
										placeholder={placeholder}
										type={type}
										value={input.value}
										onChange={input.onChange}
										ref={reference as LegacyRef<HTMLInputElement>}
										disabled={disabled}
									/>
								)}
								{hasError && (
									<>
										<span className='text-xs text-red-500 mt-5'>
											{'*'} {meta.error}
										</span>
									</>
								)}
							</>
						)
					}}
				</Field>
				{onChange && (
					<OnChange name={name}>
						{(value, previous) => {
							onChange(value, previous)
						}}
					</OnChange>
				)}
			</>
		)
	}
)
