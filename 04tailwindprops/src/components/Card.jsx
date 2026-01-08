import React from 'react'

export default function Card({username = "JJ"}) {
    console.log(username);
    
  return (
    <button
        type="button"
        className="  py-2 px-4  active:scale-105 scale-125 active:transition-all duration-50 font-semibold rounded bg-gray-100 text-white-800 mr-6"
      >
        {username}
      </button>
  )
}
