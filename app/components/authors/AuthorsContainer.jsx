import Link from 'next/link'
import React from 'react'

export const AuthorsContainer = () => {
  return (
    <div className="w-full bg-white rounded-md p-4 grid grid-cols-4 gap-3">
        <Link className="flex flex-row items-center justify-between text-blue-900 hover:bg-gray-100 px-1" href="#">
            <span className="font-semibold">А.Партхасарті</span>
            <span className="text-[0.8rem] text-gray-600">(15)</span>
        </Link>
        <Link className="flex flex-row items-center justify-between text-blue-900 hover:bg-gray-100 px-1" href="#">
            <span className="font-semibold">А.Партхасарті</span>
            <span className="text-[0.8rem] text-gray-600">(15)</span>
        </Link>
        <Link className="flex flex-row items-center justify-between text-blue-900 hover:bg-gray-100 px-1" href="#">
            <span className="font-semibold">А.Партхасарті</span>
            <span className="text-[0.8rem] text-gray-600">(15)</span>
        </Link>
        <Link className="flex flex-row items-center justify-between text-blue-900 hover:bg-gray-100 px-1" href="#">
            <span className="font-semibold">А.Партхасарті</span>
            <span className="text-[0.8rem] text-gray-600">(15)</span>
        </Link>
        <Link className="flex flex-row items-center justify-between text-blue-900 hover:bg-gray-100 px-1" href="#">
            <span className="font-semibold">А.Партхасарті</span>
            <span className="text-[0.8rem] text-gray-600">(15)</span>
        </Link>
    </div>
  )
}