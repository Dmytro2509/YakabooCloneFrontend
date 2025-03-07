import React from 'react'

export const AuthorFact = ({ factText="" }) => {
  return (
    <div className="bg-gray-100 rounded-sm w-full p-5 text-[1rem] flex flex-col ">
        <p className="font-bold">
            Чи знаєте ви, що...
        </p>
        <p>
            { factText }
        </p>
    </div>
  )
}
