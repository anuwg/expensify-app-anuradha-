import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
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


let editExpense, history, wrapper, removeExpense;

beforeEach(() => {
  editExpense = jest.fn();
  history = { push: jest.fn() };
  removeExpense= jest.fn()
  wrapper = shallow(<EditExpense 
    editExpense={editExpense} history={history} removeExpense={removeExpense} />);
});


test('edit', ()=>{
    expect(wrapper).toMatchSnapshot()
})

test('edit-onSubmit', ()=>{
    wrapper.find('EditExpense').prop('onSubmit')(expense[0].id, {description:'111ssa'})
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[0].id,{description:'111ssa'});
})
test('edit-onClick', ()=>{
    wrapper.find('EditExpense').prop('onClick')(expense[1].id)
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1].id);
})
