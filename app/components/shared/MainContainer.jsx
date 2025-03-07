import React from 'react'
import { AdditionalText, Banners, InterestingBooks, MainCategories, NewBooks, } from '.'

export const MainContainer = () => {
  return (
    <div className="w-[80%] flex flex-col gap-3 ">
        <MainCategories />
        <Banners />
        <NewBooks />
        <InterestingBooks />
        <AdditionalText />
    </div>
  )
}
