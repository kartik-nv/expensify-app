import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters.js'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({
    description: 'Water Bill',
    note: '',
    amount: 4500,
}))

store.dispatch(addExpense({
    description: 'Gas Bill',
    note: '',
    amount: 750,
    createdAt: 1000
}))

store.dispatch(addExpense({
    description: 'Rent',
    note: '',
    amount: 109000,
}))

const state = store.getState()
// console.log(state)
console.log(getVisibleExpenses(state.expenses, state.filters))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))