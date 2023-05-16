
//import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Homepage } from './Homepage';
import {useState} from "react"

function App() {
  let [state,setState]=useState();
  let [state1,setState1]=useState();
  let newQuote=()=>{
    fetch("https://type.fit/api/quotes").then((res)=>res.json()).then((data)=>{
    setState(data[0].text)
    setState1("-"+data[0].author)
    
  });
  }
  
  return (
    <>
     <div id="quote-box">
      <div id="text">
      <h1>{state}</h1>
      <h1>{state1}</h1>
      </div>
      <h4 id="author"></h4>
      <button onClick={newQuote}>NewQuote</button>
    </div>
    </>
  );
}

export default App;
