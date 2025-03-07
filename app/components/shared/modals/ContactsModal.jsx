import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { IoMailSharp } from "react-icons/io5";

export const ContactsModal = () => {
  return (
    <div className="fixed bottom-[18.5%] p-3 left-5 bg-white text-center justify-center rounded-full w-[80px] shadow-lg flex flex-col gap-3 z-1">
        <Link href="https://t.me/Yakaboo_ua_bot">
            <Image src="/social/telegram.svg" width={60} height={70} className="hover:scale-[1.1]" alt="telegram" />
        </Link>
        <Link href="viber://pa?chatURI=yakaboo_ua">
            <Image src="/social/viber.svg" width={60} height={70} className="hover:scale-[1.1] rounded-full" alt="viber" />
        </Link>
        <Link href="mailto:support@yakaboo.ua" className="w-[60px] h-[60px] rounded-full bg-[#50a8ff] px-2 py-[10px] hover:scale-[1.1]">
            <IoMailSharp size={40} className="text-white " />
        </Link>
    </div>
  )
}
