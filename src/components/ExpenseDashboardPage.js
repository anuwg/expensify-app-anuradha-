import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import ExpenseList from './expenseList'
import InputForm from '../components/ExpenseListForm'
const ExpenseDashboardPage=()=>(
    <div>
    <p>this is the dashboard page</p>
    <InputForm/>
    <ExpenseList/>
    </div>
    )
    
    

export default ExpenseDashboardPage