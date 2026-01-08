import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObje = {
    username: "JJ",
    age: 21
  }
  let newArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-6'>Tailwind test</h1>
      <Card username= "Chai aur code" someObj = {myObje} arr = {newArr}/>
      <Card username = "JJ"/>
    </>
  )
}

export default App
