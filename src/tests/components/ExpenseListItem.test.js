import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem'
import { expect } from '@jest/globals'

test('should render ExpenseListItem with expense data', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})