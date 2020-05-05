import React from 'react'
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expense'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
const Item = ({dispatch, expenseType, amount, createdAt,id})=>(

     <div>
     <Link to={`/edit/${id}`}><h3>{expenseType}</h3></Link>
     
     <p>{createdAt} - {amount}</p>
     
     </div>
 
)
// const mapStateProps= (state)=>{
//      return {
//          expenses:state.expenses
//      }
//      }
export default Item