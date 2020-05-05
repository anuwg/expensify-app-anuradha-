import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from'./routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import storeFunction from './store/configStore'
import getVisibleState from './selectors/expense'
import {addExpense, removeExpense, editExpense} from './actions/expense'
import {setEndDate, setStartDate, editFiler, sortByAmount, sortByDate} from './actions/filters'
import {Provider} from 'react-redux'
const store = storeFunction()


store.subscribe(()=>{

    const state=store.getState()
    console.log(state)
    const visibleState= getVisibleState(state.expenses, state.filters)
    console.log(visibleState)
    })

const jsx= (
    <Provider store={store}><AppRouter/></Provider>
    
)
store.dispatch(addExpense({expenseType:'water-bill', amount:50000, createdAt:200}))
store.dispatch(addExpense({expenseType:'light-bill', amount:20000, createdAt:400}))
store.dispatch(addExpense({expenseType:'school-bill', amount:70000, createdAt:100}))
//store.dispatch(editFiler({text:'water'}))
ReactDOM.render(jsx , document.getElementById('app'))

