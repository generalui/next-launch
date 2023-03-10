import { GetParticipants } from 'types/ParticipantQueryBuilder'
import { prisma } from 'utils/api/prisma'
import { participantQueryInclude } from 'utils/includes/participantIncludes'

export const getParticipants: GetParticipants = async (where) => {
	// Get participants
	const [modelCount, participants] = await prisma.$transaction([
		prisma.participant.count({ ...where }),
		prisma.participant.findMany({
			...where,
			...participantQueryInclude
		})
	])

	// Get todo count
	const todoCount = await prisma.todo.count({
		where: {
			participants: {
				some: {
					participant: {
						id: {
							in: participants.map((p) => p.id)
						}
					}
				}
			}
		}
	})

	return { modelCount: modelCount ?? 0, list: participants || [], todoCount }
}
