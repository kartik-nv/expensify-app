import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'

test('should render ExpenseSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={3600} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={5} expenseTotal={36004578924} />)
    expect(wrapper).toMatchSnapshot()
})