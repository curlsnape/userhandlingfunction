import React from 'react'
import User from './User'

function Users({users,remove}) {
  return (
    <div className='w-full  flex-wrap gap-5 flex items-center h-80 max-h-80 px-8 py-5 overflow-y-auto'>
        {users.map((item,index)=>{
        return <User key={index} index={index} remove={remove}  user={item}/>
        })}
       
    </div>
  )
}

export default Users