import React from 'react'

export default function Input({value , setState , placeholder}) {
  return (
    <div>
        <input type="text" class="my-5  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={value} onChange={(e)=>setState(e.target.value)} 
            placeholder={placeholder}/>
    </div>
  )
}
