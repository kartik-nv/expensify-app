import moment from 'moment'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id does not exist', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '5'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: '109',
        description: 'Robotics Bill',
        amount: 1500,
        note: '',
        createdAt: moment()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense with id provided', () => {
    const description = 'Robotics'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].description).toBe(description)
})

test('should not edit expense if ID nor found', () => {
    const description = 'WEBdEV'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
})