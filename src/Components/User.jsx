import React from 'react'

function User({ user,index,remove }) {
    return (
        <div>
            <div key={index} className='w-52 h-64 bg-white overflow-hidden flex items-center flex-col py-2 shadow-lg rounded-xl'>
                <div className=' h-16 w-16 rounded-full'>
                    <img className='h-full w-full object-contain' src={user.image} alt="" />
                </div>
                <div className='text py-2 text-center'>
                    <h4 className='font-semibold text-lg'>{user.name}</h4>
                    <h5 className='font-semibold text-sm'>{user.email}</h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button onClick={()=>remove(index)} className='md:font-semibold font-thin text-white bg-red-600 py-1 px-3 rounded-md text-xs '>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default User