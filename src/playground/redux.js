import {createStore} from 'redux'

const store = createStore((state={count:0}, action)=>{

    switch(action.type){
        case 'INCREMENT': 
          return {
                count:state.count+action.incrementBy
            }
        case'DECREMENT':
        
        return {
         count:state.count -action.decrementBy
        }
        case 'RESET' :return{
            count:0
        }
        case 'SET':
            return{count:action.count}
        default: return state    
        
    }

})

const unsubscribe =store.subscribe(()=>{
    console.log(store.getState())
})

const decrementAction = ({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
    })

const incrementAction = ({incrementBy=1}={})=>({
        type:'INCREMENT',
        incrementBy
        })

const resetCount =()=>({
     type:'RESET'
})
const setCount =({count=0}={})=>({
    type:'SET',
    count
})
store.dispatch(incrementAction({}))
store.dispatch(incrementAction())

store.dispatch(decrementAction())
store.dispatch(decrementAction({decrementBy:5}))
store.dispatch(resetCount())


store.dispatch(setCount(100))




