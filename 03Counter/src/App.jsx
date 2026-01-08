import { useState } from 'react';
import './App.css'

function App() {

  let [Counter, setCounter] = useState(5)

  function addValue(){
    if(Counter == 10) return
    setCounter(Counter+1)
    console.log("Clicked",Counter);
    
  }

  function removeValue(){
    if(Counter == 0) return
    setCounter(Counter-1)
    console.log("Clicked",Counter);
  }
  
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value : {Counter}</h2>
      <button onClick = {addValue}>Add value {Counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove button {Counter}</button>
    </>
  )
}

export default App
