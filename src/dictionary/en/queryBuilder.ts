const queryBuilder = {
	conditions: {
		equals: { label: { message: 'Equals' } },
		not: { label: { message: 'Not Equals' } },
		contains: { label: { message: 'Contains' } },
		startsWith: { label: { message: 'Starts With' } },
		lt: { label: { message: 'Before' } },
		gt: { label: { message: 'After' } },
		includes: { label: { message: 'Includes' } },
		excludes: { label: { message: 'Excludes' } }
	},

	filters: {
		title: { message: 'Filters' },
		fields: {
			message: 'Field'
		},
		condition: {
			message: 'Condition'
		},
		value: {
			message: 'Value'
		},
		filterType: {
			message: 'Filter Type'
		},
		add: {
			message: 'Add Row'
		},
		where: {
			message: 'Where'
		},
		clear: {
			message: 'Clear Filters'
		}
	},
	summary: {
		title: { message: 'Filter Summary' },
		export: {
			message: 'Export'
		}
	},
	models: {
		participant: {
			singular: { message: 'Participant' },
			plural: { message: 'Participants' }
		},
		todo: {
			singular: { message: 'Todo' },
			plural: { message: 'Todos' }
		}
	},
	filterTypes: {
		and: { message: 'And' },
		or: { message: 'Or' }
	}
}

export default queryBuilder
