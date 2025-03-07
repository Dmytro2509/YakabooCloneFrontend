import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { BookCardPreOrder, BookCard } from '.';

export const NewBooks = () => {
  return (
    <div className="flex flex-col gap-5 w-full bg-white rounded-md pl-6 pt-16 pb-14 relative mb-10 mt-10">
      <div className="grid grid-cols-6 gap-6 justify-center">
          <Link className="absolute bg-red-500/90 text-white text-[0.9rem] font-semibold px-4 py-2 rounded-r-full left-0 top-3 
          flex flex-row gap-2 items-center" href="#">
              <span>Новинки книг</span>
              <Image src="/logo-small.svg" alt="small-logo" width={18} height={18} />
          </Link>

          <BookCardPreOrder imageSrc="https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/r/i/richka-zalotykh-kistok-2500.1800x1200w.jpg"
          title="Річка золотих кісток" author="А. К. Малфорд" date="02.05.2025" price={599} />

          <BookCardPreOrder imageSrc="https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/r/i/richka-zalotykh-kistok-2500.1800x1200w.jpg"
          title="Річка золотих кісток" author="А. К. Малфорд" date="02.05.2025" price={599} />
          
          <BookCard imageSrc="https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/r/i/richka-zalotykh-kistok-2500.1800x1200w.jpg"
          title="Річка золотих кісток" author="А. К. Малфорд" price={599} />
          
          <BookCard imageSrc="https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/r/i/richka-zalotykh-kistok-2500.1800x1200w.jpg"
          title="Річка золотих кісток" author="А. К. Малфорд" price={599} />
          
          <BookCard imageSrc="https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/r/i/richka-zalotykh-kistok-2500.1800x1200w.jpg"
          title="Річка золотих кісток" author="А. К. Малфорд" price={599} />
          
          <BookCard imageSrc="https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/r/i/richka-zalotykh-kistok-2500.1800x1200w.jpg"
          title="Річка золотих кісток" author="А. К. Малфорд" price={599} />
      </div>  
      <Link href="#" className="flex flex-row items-center gap-1 text-[0.9rem] text-gray-500 mt-5 -mb-7 bottom-5 hover:text-gray-600">
        <span className="font-semibold">Перейти до категорії</span>
        <MdOutlineChevronRight size={18} />
      </Link>
    </div>
    
  )
}
