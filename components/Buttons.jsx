import React from 'react'

export default function Buttons({title , handler , loading}) {
  return (
    <div>
        <button type="button"
        onClick={handler}
        className=
        {`text-white bg-purple-700 hover:bg-purple-700
        focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg
         text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700
          dark:focus:ring-purple-900`} disabled={loading}>{loading ? 'Loading':title}</button>
    </div>
  )
}
