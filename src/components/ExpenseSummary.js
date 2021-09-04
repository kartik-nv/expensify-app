import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpensesList from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpenseSummary = (props) => {
    return (
        <div>
            {props.expenseCount > 1 ? (<p>{`Viewing ${props.expenseCount} expenses totalling Rs.${numeral(props.expenseTotal).format('0.00')}`}</p>) : (<p>{`Viewing ${props.expenseCount} expense totalling Rs.${numeral(props.expenseTotal).format('0.00')}`}</p>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenseCount: selectExpensesList(state.expenses, state.filters).length,
        expenseTotal: selectExpensesTotal(selectExpensesList(state.expenses, state.filters))
    }
}

export default connect(mapStateToProps)(ExpenseSummary)