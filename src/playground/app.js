import React from 'react'
import ReactDOM from 'react-dom'
const App = (props)=>{
    return (
        <div>
        <h1> New-App</h1>
        <p>this is new data:{props.info}</p>
        </div>
    )
}

const AuthenticatedUser = (WrapperComponent)=>{
 return (props)=>(
    <div>
    { props.isAuthorized ?<WrapperComponent {...props}/>:
    <p>unauthorized</p> }
    </div>
 

   
 
 
 
 
 )
}

const NewApp=AuthenticatedUser(App)

ReactDOM.render(<NewApp isAuthorized={false} info="classified"/> , document.getElementById('app'))
