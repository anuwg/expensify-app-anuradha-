import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'

const expenseDefaultState =[]
const filtersDefaultState={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const addExpense = ({expenseType='',description='',amount=0,createdAt=0}={})=>({
      type:'ADD_EXPENSE',
      expense:{
      id:uuid(),
      expenseType,
      description,
      amount,
      createdAt
      }


})

const removeExpense= ({id})=>({
type:'REMOVE_EXPENSE',
id
})

const sortByAmount=()=>({
    type:'SORTBY_AMOUNT',
    sortBy:'amount'
    
})
const sortByDate=()=>({
    type:'SORTBY_AMOUNT',
    sortBy:'date'
    
})
const editExpense= (id, updates)=>({
  
     type:'EDIT_EXPENSE',
     id,
     updates
 
})

const editFiler =(updates)=>({
  type:'EDIT_FILTER',
  updates
  
})

const setStartDate=(date=undefined)=>({
type:'SET_STARTDATE',
date

})

const setEndDate=(date=undefined)=>({
    type:'SET_ENDDATE',
    date
    
    })
const expenseReducer = (state=expenseDefaultState, action)=>{
 switch(action.type){
     case 'ADD_EXPENSE':
         return [...state,action.expense]
     case 'REMOVE_EXPENSE':
         return state.filter((item)=>{
             return item.id!== action.id
         })
     case 'EDIT_EXPENSE':
         return state.map((expense)=>{
        if(expense.id===action.id){
            return {
                ...expense,
                ...action.updates
            }
        }else{
            return expense
        }
         })
    
     default:return state
 }
}

const filtersReducer = (state=filtersDefaultState, action)=>{
    switch(action.type){
        case 'EDIT_FILTER':
            return {...state,...action.updates}
        case 'SORTBY_AMOUNT':
            return{...state, sortBy:action.sortBy}
        case 'SORTBY_DATE':
            return{...state, sortBy:action.sortBy}
        case 'SET_STARTDATE':
            return {...state, startDate:action.date}
        case 'SET_ENDDATE':
            return {...state, endDate:action.date}
         default:return state
    }
   }
const store = createStore(combineReducers(
  { 
      expenses:expenseReducer,
      filters:filtersReducer
   
}

))

const getVisibleState=(expenses, {text,
   sortBy,
    startDate,
    endDate
    
    
    })=>{
    return expenses.filter((expense)=>{
     const textMatch =expense.expenseType.toLowerCase().includes(text.toLowerCase())
     const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
     const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      return textMatch && startDateMatch && endDateMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt?1:-1
        }

         else if(sortBy==='amount'){
             return a.amount>b.amount?-1:1
         }
    
    })
    }
    
store.subscribe(()=>{

    const state=store.getState()
    console.log(state)
    const visibleState= getVisibleState(state.expenses, state.filters)
    console.log(visibleState)
    })


const Expense1= store.dispatch(addExpense({expenseType:'rent', amount:50000, createdAt:200}))
const Expense2=store.dispatch(addExpense({expenseType:'travel', amount:20000, createdAt:400}))
//store.dispatch(removeExpense({id:Expense1.expense.id}))
 store.dispatch(editExpense(Expense2.expense.id, {amount:4000}))

 store.dispatch(editFiler({text:'Rent'}))

 store.dispatch(sortByAmount())
 store.dispatch(sortByDate())

 store.dispatch(setStartDate(125))
store.dispatch(setStartDate())
 store.dispatch(setEndDate(650))
store.dispatch(setEndDate())



