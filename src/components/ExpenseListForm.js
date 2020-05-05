import React from 'react'
import {connect} from 'react-redux'
import {sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters'
import editFilter, { editFiler } from '../actions/filters'
import {DateRangePicker} from 'react-dates'
class InputForm extends React.Component{
    state={
        calenderFocused:null
    }

    onDatesChange=({ startDate, endDate })=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange=(focusedInput)=>{
    this.setState(()=>({  calenderFocused:focusedInput}))
    }
    render(){
        return (
            <div>
            <input type="text" value={this.props.filters.text} onChange={(e)=>{
             this.props.dispatch(editFiler({text:e.target.value}))
            }}></input>
            <select value ={this.props.filters.sortBy} onChange={(e)=>{
                //e.target.value
                
                e.target.value==='date'?this.props.dispatch(sortByDate()):this.props.dispatch(sortByAmount())
            }}>
            <option value ="date">Date</option>
            <option value = "amount">Amount</option>
            </select>

            <DateRangePicker
            startDate={this.props.filters.startDate} 
            //startDateId="your_unique_start_date_id" 
            endDate={this.props.filters.endDate} 
           // endDateId="your_unique_end_date_id" 
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={()=>
                false
            }
            
            />
            </div>
        )
    }

}


const mapStateProps= (state)=>{
return {
    filters:state.filters
}
}
export default connect(mapStateProps)(InputForm)