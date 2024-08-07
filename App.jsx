import { useState,useCallback,useEffect } from 'react'
import './App.css'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "123456789"
    
    if (charAllowed) str += "+*/-,@$%^&#"

    for(let i = 1; i<= length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])
    

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full h-60  mx-auto rounded-lg 
    px-4 bg-slate-900 border-2 border-x-cyan-100' >
      <h1 className=' text-center my-3 text-amber-200'>Password Generator</h1>
      <br></br>
      <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'> 
        <input 
        type="text" 
        values={password} 
        className='outline-none w-full py-1 px-3 bg-slate-500 mb-10 border-2 border-black rounded-lg text-cyan-50'
        placeholder='Password'
        readOnly/>
    </div>

      <div className='flex text-sm gap-x-2'>
      <div className=' flex items-center gap-x-1'>
        <input 
        type="number"
        value={length}
        className='w-8'
        onChange={(e)=>{setlength(e.target.value)}}
        />
        <label className='bg-slate-300 rounded-lg pl-2 pr-2 mr-6'>Length: {length}</label>
        </div>

        <div className=' flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numberAllowed}
          id = 'numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=>!prev);
          }}/>

          <label htmlFor='numberInput' className='bg-slate-300 rounded-lg pl-2 pr-2 mr-8'>With Numbers</label>
        </div>

        <div className=' flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={charAllowed}
          id = "characterInput"
          onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }}
        />

        <label htmlFor='characterInput' className='bg-slate-300 rounded-lg pl-2 pr-2'>With Characters</label>
        </div>
      
    </div>
  </div>
      
      
    </>
  )
}

export default App
