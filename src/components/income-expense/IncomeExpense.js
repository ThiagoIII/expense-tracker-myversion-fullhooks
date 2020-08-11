import React, {useContext} from 'react'
import TransactionContext from '../../context/transactionContext'


export const IncomeExpense = () => {
  const  { state }  = useContext(TransactionContext)
  let income 
  let expense = 0

	if(state.length > 0){
    income = state.filter(item => item.amount > 0).reduce( (acc , item) => acc += parseFloat(item.amount), 0)
    expense = state.filter(item => item.amount <= 0).reduce( (acc , item) => acc += parseFloat(item.amount), 0)
  } 
  
	return (
		<div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${expense !== 0 ? Math.abs(expense) : null}</p>
        </div>
      </div>
	)
}
