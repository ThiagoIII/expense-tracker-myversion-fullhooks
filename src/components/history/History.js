import React, { useContext} from 'react'
import  TransactionContext  from '../../context/transactionContext'
import { handleDelete } from '../../context/actions';

export const History = () => {
	const { state, dispatch } = useContext(TransactionContext)

	return (
		<>
			<h3>History</h3>
			<ul id="list" className="list">
			{	
				state.map(item => (
					<li className={item.amount >= 0 ? 'plus' : 'minus'} key={item.id}>
						{item.text}
						<span>{item.amount >= 0 ? `$${item.amount}` : `-$${Math.abs(item.amount)}`}</span>
						<button onClick={() => handleDelete(dispatch, item.id)} className="delete-btn">x</button>
					</li>
				))
			}
			</ul>
		</>
	)
}
