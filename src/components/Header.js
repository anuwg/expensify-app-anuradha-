import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
const  Header =()=>(
    <header>
    <h1>Expensify</h1>
    <NavLink activeClassName="is-active" to="/" exact={true}> Home Pageu </NavLink>
    
    <NavLink activeClassName="is-active" to="/create"> Create</NavLink>
    <NavLink activeClassName="is-active" to="/help">  Help </NavLink>
    </header>
)

export default Header