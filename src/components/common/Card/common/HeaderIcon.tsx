import cn from 'classnames'
import { Icon } from 'common/Icon'
import { HeaderIconProps } from '../Card.types'

export const HeaderIcon = ({
	className,
	icon,
	size,
	wrapperClass = 'bg-primary'
}: HeaderIconProps) => (
	<div className={cn('p-2 text-white rounded flex justify-center items-center', wrapperClass)}>
		<Icon className={className} icon={icon} size={size} />
	</div>
)
