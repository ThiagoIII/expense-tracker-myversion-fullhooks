export function handleAdd(dispatch, info) {
	let storage = JSON.parse(localStorage.getItem('transactions'))
	if(storage !== null){
		let newStorage = storage.concat(info)
		localStorage.setItem('transactions', JSON.stringify(newStorage))
	} else {
		let firstStorage = [].concat(info)
		localStorage.setItem('transactions', JSON.stringify(firstStorage))
	}
	let id = Math.random() * 100000
	info.id = id
	dispatch({
		type: 'ADD',
		payload: info
	})
}

export function handleDelete(dispatch, id) {
	let storage = JSON.parse(localStorage.getItem('transactions'))
	let newStorage = storage.filter( item => item.id !== id)
	let jsonNewStorage = JSON.stringify(newStorage)
	console.log(storage.length)
	if(storage.length === 1) {
		localStorage.clear()
	} else {
		localStorage.setItem('transactions',jsonNewStorage)
	}
	dispatch({
		type: 'DELETE',
		payload: id
	})
}