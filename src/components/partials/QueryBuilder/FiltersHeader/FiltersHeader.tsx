import { useText } from 'hooks/useText'
import { Text } from 'common/Text'
import { FiltersHeaderProps } from './FiltersHeader.types'

export const FiltersHeader = ({ className, testId = 'FiltersHeader' }: FiltersHeaderProps) => {
	const { t } = useText('queryBuilder.filters')

	return (
		<div className={className} data-testid={testId}>
			<div className='grid grid-cols-12 gap-4 items-center'>
				<div className='flex flex-col gap-3 col-span-12 md:col-span-2'>
					<Text size='xs' className='text-gray-500 font-semibold'>
						{t('filterType')}
					</Text>
				</div>
				<div className='flex flex-col gap-3 col-span-12 md:col-span-3'>
					<Text size='xs' className='text-gray-500 font-semibold'>
						{t('fields')}
					</Text>
				</div>
				<div className='flex flex-col gap-3 col-span-12 md:col-span-3'>
					<Text size='xs' className='text-gray-500 font-semibold'>
						{t('condition')}
					</Text>
				</div>
				<div className='flex flex-col gap-3 col-span-12 md:col-span-3'>
					<Text size='xs' className='text-gray-500 font-semibold'>
						{t('value')}
					</Text>
				</div>
			</div>
		</div>
	)
}
