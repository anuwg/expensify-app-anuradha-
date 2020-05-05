import moment from 'moment'

const filtersDefaultState={
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),

    endDate:moment().endOf('month')
}
const filtersReducer = (state=filtersDefaultState, action)=>{
    switch(action.type){
        case 'EDIT_FILTER':
            return {...state, text:action.updates}
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

   export default filtersReducer