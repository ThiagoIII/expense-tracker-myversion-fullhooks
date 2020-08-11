import React, {useReducer} from 'react';
import './App.css';
import { Balance } from './components/balance/Balance';
import { IncomeExpense } from './components/income-expense/IncomeExpense';
import { History } from './components/history/History'
import { AddTransaction } from './components/add-transaction/AddTransaction';
import TransactionContext from './context/transactionContext'
import reducer from './context/reducers'

function App() {
  let storage = JSON.parse(localStorage.getItem('transactions'))
  let initialTransactions
  storage ? initialTransactions = storage : initialTransactions = []

  const [state, dispatch] = useReducer(reducer, initialTransactions);

  return (
    <>
      <TransactionContext.Provider value={{state, dispatch}}>
        <h2>Expense Tracker</h2>
        <div className="container">
          <Balance />
          <IncomeExpense />
          <History />
          <AddTransaction/>
        </div>
      </TransactionContext.Provider>
    </>
  );
}

export default App;
