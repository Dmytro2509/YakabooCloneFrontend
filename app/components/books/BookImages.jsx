import Image from 'next/image';
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import useBookImagesModalStore from '@/app/stores/BookImagesModalState'
import useLoginModalStore from '@/app/stores/LoginModalState';

export const BookImages = () => {
  
  const { setIsBookImagesModalOpen } = useBookImagesModalStore()
  const { setIsLoginModalOpen  } = useLoginModalStore()

  return (
    <div className="w-[25%] flex flex-col gap-2 mb-10 mt-12">
      <div className="sticky top-5 flex flex-col gap-2">
          <button className="rounded-full bg-gray-100 p-4 max-w-[50px]" onClick={ setIsLoginModalOpen }>
              <FaRegHeart size={20} className="text-black -ml-[1px]" />
          </button>
          <div className="relative w-full">
              <Image src="https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/2/7/276_1_2.jpg" width={250} height={250} 
              alt="11/22/63"
              className="cursor-pointer"
              onClick={ setIsBookImagesModalOpen }/>
          </div>
          <div className="flex flex-row items-center gap-1 -ml-7">
              <div className="relative w-[50px] h-[70px]">
                <Image src="https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/2/7/276_1_2.jpg"
                alt="11/22/63 smaller"
                objectFit='cover'
                className="cursor-pointer rounded-lg"
                layout="fill" />  
              </div>
              <div className="relative w-[50px] h-[70px]">
                <Image src="https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/2/7/276_2_1.jpg"
                alt="11/22/63-2"
                objectFit='cover'
                className="cursor-pointer rounded-lg" 
                layout="fill"/>  
              </div>
              <div className="relative w-[50px] h-[70px]">
                <Image src="https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/2/7/276_5_1.jpg"
                alt="11/22/63-3"
                objectFit="cover"
                className="cursor-pointer rounded-lg" 
                layout="fill"/>  
              </div>
              <div className="relative w-[50px] h-[70px]">
                <Image src="https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/2/7/276_6_1.jpg"
                alt="11/22/63-4"
                objectFit='cover'
                className="cursor-pointer rounded-lg" 
                layout="fill"/>  
              </div>
              <div className="relative w-[50px] h-[70px]">
                <Image src="https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/2/7/276_3_1.jpg"
                alt="11/22/63-5"
                objectFit='cover'
                className="cursor-pointer rounded-lg" 
                layout="fill"/>  
              </div>
              <div className="relative w-[50px] h-[70px]">
                <Image src="https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/2/7/276_4_1.jpg" 
                alt="11/22/63-6"
                objectFit='cover'
                className="cursor-pointer rounded-lg"
                layout="fill"/>  
              </div>
          </div>
      </div>  
    </div>
    
  )
}
