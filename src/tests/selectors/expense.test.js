import selectSorting from '../../selectors/expense'
import moment from'moment'

const expenses= [{
    id:'1',
    expenseType:'rent',
    amount:1890,
    description:'',
    createdAt:0
},
{
    id:'2',
    expenseType:'travel',
    amount:18,
    description:'',
    createdAt:moment(0).subtract(5,'days').valueOf()
},{
    id:'3',
    expenseType:'school-expense',
    amount:180988,
    description:'',
    createdAt:moment(0).add(5,'days').valueOf()
}]


test('sortby date and dateRange',()=>{
   const  filters={
        text:'e',
        sortBy:'date',
        startDate:moment(0),
        endDate: moment(0).add(10,'days')

    }
    expect(selectSorting(expenses, filters)).toEqual(
        [expenses[2], expenses[0]]
    )
})
test('sortby date and dateRange',()=>{
    const  filters={
         text:'',
         sortBy:'amount',
         startDate:moment(0).subtract(5,'days'),
         endDate: moment(0)
 
     }
     expect(selectSorting(expenses, filters)).toEqual(
         [expenses[0], expenses[1]]
     )
 })