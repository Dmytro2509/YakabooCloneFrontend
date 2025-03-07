import React from 'react'
import Link from 'next/link'
import { FaChevronRight } from "react-icons/fa";
import { AllAuthorBooks, AuthorInfoCard, Filters } from '.';

export const AuthorBySlugContainer = () => {
  return (
    <div className="w-full bg-gray-200 px-[6.5%] py-4 flex flex-col gap-5">
        <div className="flex flex-row items-center gap-1 text-[1rem] text-gray-500 font-semibold">
            <Link href="/">
                Головна
            </Link>
            <FaChevronRight size={15} />
            <Link href="#">
                Автори
            </Link>
        </div>
        <AuthorInfoCard />
        <div className="flex flex-row gap-4">
          <Filters />
          <AllAuthorBooks />
        </div>
    </div>
  )
}