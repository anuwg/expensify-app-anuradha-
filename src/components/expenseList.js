import React from 'react'
import {connect} from 'react-redux'
import Item from './ExpenseListItem'
import SelectItems from '../selectors/expense'
 export const ExpenseList= (props)=>(
    <div>
    <h1>Expense-List</h1>
    {props.expense.length>0? props.expense.map((expense)=>{
        return <Item key={expense.id} {...expense}/>
    }) :<p>No items</p>}
   
   
    </div>
)



const connectFunction= (state)=>{
 return {
    expense:SelectItems(state.expenses, state.filters)
    
    
 }
}
const StoreDetails = connect(connectFunction)(ExpenseList)
export default StoreDetails