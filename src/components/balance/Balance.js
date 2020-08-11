import React, {useContext} from 'react'
import TransactionContext from '../../context/transactionContext'


export const Balance = () => {
	const { state } = useContext(TransactionContext)
	let finalAmount = 0
	let sign = null
	if(state.length > 0){
		finalAmount = state.reduce( (acc , item) => acc += parseFloat(item.amount), 0)
	} 
	if(finalAmount < 0){
		sign = '-'
	}
	return (
		<>
			<h4>Your Balance</h4>
			<h1 id="balance">{sign}${Math.abs(finalAmount)}</h1> 
		</>
	)
}
