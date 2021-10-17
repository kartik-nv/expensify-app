import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render ExpenseSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={3600} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={5} expenseTotal={36004578924} />)
    expect(wrapper).toMatchSnapshot()
})