import expenseReducer  from '../../reducers/expenseReducer'
import moment from 'moment'
const expenses= [{
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


test('test remove expenses with a valid ID', ()=>{
    expect(expenseReducer(expenses, {type:'REMOVE_EXPENSE', id:expenses[0].id}))
    .toEqual([expenses[1], expenses[2]])
})

test('test remove expenses with a Invalid ID', ()=>{
    expect(expenseReducer(expenses, {type:'REMOVE_EXPENSE', id:'11145t'}))
    .toEqual(expenses)
})
test('test edit expenses with a valid ID', ()=>{
    const expenseTest= expenseReducer(expenses, {type:'EDIT_EXPENSE', id:expenses[0].id,updates:{ amount:300000}})
    expect(expenseTest[0].amount)
    .toEqual(300000)
})

test('add expense',()=>{
    const expense= {expenseType:'food',
    createdAt:moment(0).add(15,'days').valueOf(),
    description:'',
    amount:0,
    id:'19988'}
    const action= {type:'ADD_EXPENSE',expense}
  
    expect(  expenseReducer(expenses,action))
    .toEqual([...expenses,expense])
})