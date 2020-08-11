export default (state, action) => {
	switch(action.type) {
		case 'ADD':
			return state.concat(action.payload)
		case 'DELETE':
			return state.filter( item => item.id !== action.payload)
		default:
			return state
	}
}