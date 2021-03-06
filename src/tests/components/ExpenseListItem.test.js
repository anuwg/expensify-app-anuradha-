import React from 'react'
import {shallow} from 'enzyme'
//import toJSON from 'enzyme-to-json'
import Item from '../../components/ExpenseListItem'
import moment from 'moment'
const expense = [{
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

test('items  check',()=>{
    const wrapper = shallow(<Item {...expense[0]}/>)
    expect(wrapper).toMatchSnapshot()
})