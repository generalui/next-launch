import { Session } from 'types/Session'
import { Roles } from 'types/User'

export const getUserIsAuthorized = (session: Session | undefined, role: Roles | undefined) => {
	let userIsAuthorized = false

	if (role && session) {
		userIsAuthorized = role === 'general' ? true : session.role === role
	}

	return userIsAuthorized
}
