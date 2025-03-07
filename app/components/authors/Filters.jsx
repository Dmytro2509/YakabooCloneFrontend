import React from 'react'
import { BookType, Categories, Existance, FiltersList, Language, Publishing, Price } from '.'

export const Filters = () => {
  return (
    <div className="bg-white rounded-md w-[20%] px-4 py-7 flex flex-col gap-5 self-start">
      <FiltersList />
      <Categories />
      <BookType />
      <Existance />
      <Publishing />
      <Language />
      <Price />
    </div>
  )
}
