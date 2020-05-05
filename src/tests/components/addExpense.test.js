import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpense';
import moment from 'moment'
const expenses = [{
    id:'1',
    expenseType:'rent',
    amount:1890,
    description:'',
    createdAt:0
},
{
    id:'2',
    expenseType:'travel',
    amount:18,
    description:'',
    createdAt:moment(0).subtract(5,'days').valueOf()
},{
    id:'3',
    expenseType:'school-expense',
    amount:180988,
    description:'',
    createdAt:moment(0).add(5,'days').valueOf()
}]


let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// test('should handle onSubmit', () => {
//   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
// });
