import {addExpense, editExpense, removeExpense} from '../../actions/expense'
//import uuid from 'uuid'
test ('testing removeExpense function', ()=>{
 expect(removeExpense({id:'aerrr'})).toEqual({
     type:'REMOVE_EXPENSE',
     id:'aerrr'
 })
})

test ('testing editExpense function', ()=>{
    expect(editExpense('aerrrw',{amount:123})).toEqual({
        type:'EDIT_EXPENSE',
        id:'aerrrw',
        updates:{amount:123}
        
    })
   })
test ('testing addExpense function-provided data', ()=>{
    expect(addExpense({expenseType:'rent',description:'',amount:20000,createdAt:1000})).toEqual({
    type:'ADD_EXPENSE',
    expense:{
    id:expect.any(String),
    expenseType:'rent',
    description:'',
    amount:20000,
    createdAt:1000
    }
        
    })
   })
   test ('testing addExpense function-default data', ()=>{
    expect(addExpense()).toEqual({
    type:'ADD_EXPENSE',
    expense:{
    id:expect.any(String),
    expenseType:'',
    description:'',
    amount:0,
    createdAt:0
    }
        
    })
   })



   
 