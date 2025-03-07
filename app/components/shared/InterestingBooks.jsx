import React from 'react'
import Link from 'next/link'
import { BookCard } from '.'

export const InterestingBooks = () => {
  return (
    <div className="flex flex-col gap-5 w-full bg-white rounded-md pl-6 pt-16 pb-14 relative mb-10">
         <div className="grid grid-cols-6 gap-6 justify-center">
            <Link className="absolute bg-pink-500 text-white text-[0.9rem] font-semibold px-4 py-2 rounded-r-full left-0 top-3 items-center" href="#">
                <span>Вас може зацікавити</span>
            </Link>
            <BookCard imageSrc="https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/c/o/cover_176_691.jpg"
            title="Чоловік на ім'я Уве" author="Фредрік Бакман" price={430} />
            <BookCard imageSrc="https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/c/o/cover_176_691.jpg"
            title="Чоловік на ім'я Уве" author="Фредрік Бакман" price={430} />
            <BookCard imageSrc="https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/c/o/cover_176_691.jpg"
            title="Чоловік на ім'я Уве" author="Фредрік Бакман" price={430} />
            <BookCard imageSrc="https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/c/o/cover_176_691.jpg"
            title="Чоловік на ім'я Уве" author="Фредрік Бакман" price={430} />
            <BookCard imageSrc="https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/c/o/cover_176_691.jpg"
            title="Чоловік на ім'я Уве" author="Фредрік Бакман" price={430} />
            <BookCard imageSrc="https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/c/o/cover_176_691.jpg"
            title="Чоловік на ім'я Уве" author="Фредрік Бакман" price={430} />
         </div>
    </div>
  )
}
