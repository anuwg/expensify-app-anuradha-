import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
const ErrorPage=()=>(
    <div>
    <p>404 error</p>
    <Link to="/"> Go To Main Page</Link>
    </div>
    ) 

export default ErrorPage