import React, { useState } from 'react'
import Users from './Components/Users'
import Form from './Components/Form'

function App() {
  const [users, setusers] = useState([])
  const userhandler = (data) => {
    setusers([...users, data])
  }
  const removehandler = (cardindex)=>{
    setusers(users.filter((item,i)=>i !== cardindex))
  }
  return (
    <div className='w-full h-screen px-20 bg-zinc-300'>
      <div className='pt-20 '><Users users={users} remove={removehandler} /></div>
      <Form userhandler={userhandler} />
    </div>
  )
}

export default App