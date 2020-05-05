import {sortByAmount,setEndDate,setStartDate,sortByDate,editFiler} from '../../actions/filters'
import moment from 'moment'

test('sortbyamount', ()=>{
    expect(sortByAmount()).toEqual({
        type:'SORTBY_AMOUNT',
    sortBy:'amount'
    })
})

test('sortbydate', ()=>{
    expect(sortByDate()).toEqual({
    type:'SORTBY_AMOUNT',
    sortBy:'date'
    })
})

test('edit text', ()=>{
    expect(editFiler('water')).toEqual({
    type:'EDIT_FILTER',
    updates:'water'
    })
})
test('edit text- default',()=>{
    expect(editFiler()).toEqual({
    type:'EDIT_FILTER',
    updates:''
    })
})


test('start date', ()=>{
 expect(setStartDate(moment(123))).toEqual({
    type:'SET_STARTDATE',
  date:moment(123)
 })
})
  
test('end date', ()=>{
    expect(setEndDate(moment(1234))).toEqual({
       type:'SET_ENDDATE',
     date:moment(1234)
    })
   })
     
  
