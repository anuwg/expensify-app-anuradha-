import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import EditForm from '../components/addAndEditForm'
import {editExpense} from '../actions/expense'
import {removeExpense} from '../actions/expense'

export class EditExpense extends React.Component{
    onSubmit=()=>{
        (expense)=>{
            props.editExpense(expense.id, expense)
            this.props.history.push('/')
           }
    }
    onClick=()=>{
        ()=>{
            props.removeExpense({id:this.expense.id})
           
           this.props.history.push('/')
       }
    }
    render(){
        return (
        <div>
            <p>this is the {this.props.match.params.id} page</p>
               <EditForm onSubmit={this.onSubmit} expense={this.props.expense}/>
        
               <button onClick={this.onClick}>Remove</button>
        </div>)
        
            
    }
}


const mapDispatchToProps=(dispatch)=>{
    return {
        editExpense:dispatch(editExpense(props.match.params.id, expense)),
        removeExpense:dispatch(removeExpense({id:props.match.params.id}))
    }

}
const mapStateToProps = (state, props)=>{
      return{
          expense:state.expenses.find((expense)=>expense.id===props.match.params.id)
      }
     }
    export default connect(mapStateToProps, mapDispatchToProps)(EditExpense)