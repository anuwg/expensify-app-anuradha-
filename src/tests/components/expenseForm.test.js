// import React from 'react'
// import {shallow} from 'enzyme'
// import FormChange  from '../../components/addAndEditForm'

// test('test form ',()=>{
//     const wrapper = shallow(<FormChange/>)
//     expect(wrapper).toMatchSnapshots()
// })
import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/addAndEditForm';
import { ExpenseList } from '../../components/expenseList';
import moment from 'moment'
//import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

// test('should render ExpenseForm correctly with expense data', () => {
//   const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
//   expect(wrapper).toMatchSnapshot();
// });

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

test('Form user interaction',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
})

test('Form user interaction',()=>{
    const value ='anu'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })

    
    expect(wrapper.state('expenseType')).toBe(value)
    expect(wrapper).toMatchSnapshot();
})

test('Form user interaction-amount',()=>{
    const value ='2500.1998'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })

    
    expect(wrapper.state('amount')).toBe('')
    //expect(wrapper).toMatchSnapshot();
})

// test('Form user interaction',()=>{
//     const spyFunction = jest.fn()
//     const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={spyFunction}/>)
    
//     wrapper.find('form').simulate('submit',{
//         preventDefault:()=>{}
//     })
//     expect(wrapper).toMatchSnapshot();
//     expect(spyFunction).toHaveBeenLastCalledWith({
//         expenseType:expenses[0].expenseType,
//         amount:Math.round(expenses[0].amount),
//         description:expenses[0].description,
//         createdAt:expenses[0].createdAt

//     })
//     expect(wrapper.state('error')).toBe('')
//     expect(wrapper).toMatchSnapshot();
// })

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      expenseType: expenses[0].expenseType,
      amount: 1889.9999999999998,
      description: expenses[0].description,
      createdAt: expenses[0].createdAt
    });
  });

  test('check focused ', ()=>{
      const focused = true
      const wrapper = shallow(<ExpenseForm/>)
      wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
      expect(wrapper.state('focused')).toBe(focused)
  })
//   test('should set calendar focus on change', () => {
//     const focused = true;
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
//     expect(wrapper.state('calendarFocused')).toBe(focused);
//   });
  