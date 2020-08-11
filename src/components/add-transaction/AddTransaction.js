import React, {useContext, useState, useEffect } from 'react'
import TransactionContext from '../../context/transactionContext';

import { handleAdd } from '../../context/actions';

export const AddTransaction = () => {
	const  { dispatch } = useContext(TransactionContext)

	const [info, setInfo] = useState({
		id: null,
		text: '',
		amount: 0
	})

	const localHandleAdd = () => {
		let inputText = document.querySelector('#text')
		let inputAmount = document.querySelector('#amount')
		let id = Math.floor(Math.random() * 10000000).toFixed(0)
		setInfo({...info, id: id, text: inputText.value, amount: inputAmount.value})
		inputText.value = ''
		inputAmount.value = ''
	}

	useEffect(() => {
		if(info.id !== null) {
			handleAdd(dispatch, info)
		}
	}, [ dispatch, info ])

	return (
		<>
			<h3>Add new transaction</h3>
			<form id="form" onSubmit={(e) => e.preventDefault()}>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input type="text" id="text" placeholder="Enter text..." />
				</div>
				<div className="form-control">
					<label htmlFor="amount">Amount <br /></label>
					<input type="number" id="amount" placeholder="Enter amount..." />
				</div>
				<button className="btn" onClick={() => localHandleAdd()}>Add transaction</button>
			</form>
		</>
	)
}
