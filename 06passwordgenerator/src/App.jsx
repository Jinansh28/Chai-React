import React,{ useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState()


  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "!@#$%^&*"

    for (let i = 1; i <= length; i++){
      let char = str[Math.floor(Math.random() * str.length + 1)]
      pass += char
    }

    setPassword(pass)

  }, [length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },
[password])
  
  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white text-black'>
          <input 
            type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}/>
            <button onClick ={copyPasswordToClipboard}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked = {numberAllowed}
            id ="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=> !prev);
            }}
             />
          </div>
          <label htmlFor="numberInput">Numbers</label>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked = {charAllowed}
            id ="characterInput"
            onChange={()=>{
              setcharAllowed((prev)=> !prev);
            }}
             />
          </div>
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
      
    </>
  )
}

export default App
