import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'

const date = moment()
console.log(date.format('MMM Do, YYYY'))
export default class FormChange extends React.Component{
    constructor(props){
        super(props)
        this.state={
        expenseType: props.expense?props.expense.expenseType:'',
        description:props.expense?props.expense.description:'',
        amount: props.expense?(props.expense.amount/100).toString():'',
        createdAt: props.expense?moment(props.expense.createdAt):moment(),
        focused:false,
    error:''}
    }
    
     valueChange=(e)=>{
        const item =e.target.value
      this.setState(()=>{
         
         return {expenseType:item}
     })
     }
     textChange=(e)=>{
         const item = e.target.value
         this.setState(()=>{
             return {description:item}
         })
     }
     amountChange=(e)=>{
      const amount = e.target.value
      if(!amount ||amount.match(/^\d{1,}(\.\d{0,2})?$/)){
          this.setState(()=>({amount}))
      }
     }
     dateChange=(createdAt)=>{
         if(createdAt){
            this.setState(()=>({createdAt}))
         }
         
     }
     changeFocus=({focused})=>{
  this.setState(()=>{
      return {focused}
  })
     }

     onSubmit=(e)=>{
 e.preventDefault()
  if(!this.state.expenseType ||!this.state.amount){
    this.setState(()=>({error:'Provide amount and type'}))
  } else{
      this.setState(()=>({error:''}))
      this.props.onSubmit({
        expenseType:this.state.expenseType,  
          amount:parseFloat(this.state.amount,10)*100,
          
          description:this.state.description,
          createdAt:this.state.createdAt.valueOf()
      })
  }
     }
 render(){
     
     return (
         <div>
         <p>{this.state.error}</p>
         <form onSubmit={this.onSubmit}>
         <input type='text' placeholder="expenseType" autoFocus value={this.state.expenseType}
          onChange={this.valueChange}
         
         />
         <input type='text' placeholder="amount" value={this.state.amount} onChange={this.amountChange} />
         
         <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.dateChange}
          focused={this.state.focused}
          onFocusChange={this.changeFocus}
          numberOfMonths={1}
          isOutsideRange={()=> false}
         />
         <textarea placeholder="optional description" value ={this.state.description} onChange={this.textChange}></textarea>
         <button>Add Expense</button>
         </form>
         </div>
     )
 }
}