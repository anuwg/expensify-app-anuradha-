import filterReducer from '../../reducers/filterReducer'
import moment from 'moment'
test('redux initiation', ()=>{
    expect(filterReducer(undefined, {type:'@@INIT'})).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
    
        endDate:moment().endOf('month')
    })
})
// test('sortby testing', ()=>{
//     const state=filterReducer(undefined, {type:'SORTBY_AMOUNT'})
//     expect(state.sortBy).toBe(
        
//     'amount')
// })
test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORTBY_AMOUNT',sortBy:'amount' });
    expect(state.sortBy).toBe('amount');
  });
  
test('sortby testing', ()=>{
    const prevState={
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
    
        endDate:moment().endOf('month')
    }
    const state=filterReducer(prevState, {type:'SORTBY_DATE', sortBy:'date'})
    expect(state.sortBy).toBe(
        
    'date')
})
test('sortby testing', ()=>{
    const prevState={
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
    
        endDate:moment().endOf('month')
    }
    const state=filterReducer(prevState, {type:'EDIT_FILTER', updates:'anu'})
    expect(state.text).toBe('anu')
        
    
})
test('sortby testing', ()=>{
   
    const startingDate=moment(0)
    const state=filterReducer(undefined, {type:'SET_STARTDATE', date:startingDate})
    expect(state.startDate).toBe(startingDate)
        
    
})