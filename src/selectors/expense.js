import moment from 'moment'

const getVisibleState=(expenses, {text,
    sortBy,
     startDate,
     endDate
     
     
     })=>{
     return expenses.filter((expense)=>{
         const createdDate= moment(expense.createdAt)
      const textMatch =expense.expenseType.toLowerCase().includes(text.toLowerCase())
      const startDateMatch = startDate? moment(startDate).isSameOrBefore(expense.createdAt,'date'):true
      const endDateMatch =  endDate? moment(endDate).isSameOrAfter(expense.createdAt,'date'):true
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
    
     
     export default getVisibleState