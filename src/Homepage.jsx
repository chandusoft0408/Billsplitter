import React from 'react'
import {Navigate} from "react-router-dom"

export const Homepage = () => {
   var [state,setState]=React.useState(false);
  let handleChange=(e)=>{
        setState(true)
        console.log(state)
        if(state){
         return <Navigate to="/Signup"/>
        }
  }

  return (
    <div>
      <div className='nav-bar'>
         <button className="home-button-signin" onClick={handleChange}>Sign in</button>
         <button className="home-button-login">Log in</button>
      </div>
      <h1 className='homepage-text'>Bill splitter</h1>
      
    </div>
  )
}
