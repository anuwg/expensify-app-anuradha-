export const sortByAmount=()=>({
    type:'SORTBY_AMOUNT',
    sortBy:'amount'
    
})
export const sortByDate=()=>({
    type:'SORTBY_AMOUNT',
    sortBy:'date'
    
})

export const editFiler =(updates='')=>({
    type:'EDIT_FILTER',
    updates
    
  })
  
export const setStartDate=(date=undefined)=>({
  type:'SET_STARTDATE',
  date
  
  })
  
export const setEndDate=(date=undefined)=>({
      type:'SET_ENDDATE',
      date
      
      })