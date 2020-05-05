import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import Header from '../components/Header'
import ErrorPage from '../components/ErrorPage'
import EditExpense from '../components/EditExpense'
import AddExpense from '../components/AddExpense'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import HelpExpense from '../components/HelpExpense'
   
    const AppRouter=()=>(
        <BrowserRouter>
        <div>
        <Header/>
        <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
        <Route path="/create" component={AddExpense} ></Route>
        <Route path="/edit/:id" component={EditExpense} ></Route>
        <Route path="/help" component={HelpExpense} ></Route>
        <Route  component={ErrorPage} ></Route>
        </Switch>
        </div>
        
        </BrowserRouter>
    )

    export default AppRouter