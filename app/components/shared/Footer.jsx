import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ToTopBtn } from '.';

export const Footer = () => {
  return (
    <div className="w-full bg-white border-t border-gray-200 flex flex-col gap-3 px-[7%] py-[1.5%] text-[1rem]">
        <div className="flex flex-row items-center gap-5 border-b border-gray-200 pb-5">
            <div className="flex flex-col gap-0 w-[40%]">
                <h4 className="font-semibold text-[1.1rem]">
                    Міняємо email на книжкотренди
                </h4>
                <p className="text-[0.9rem]">
                    Інформація про новинки, книжкові добірки, секретні промокоди 
                </p>
            </div>
            <div className="flex flex-row items-center gap-2 w-[60%]">
                <input type="email" className="border border-gray-200 bg-gray-100 hover:bg-white px-2 rounded-md h-[45px] w-[650px]" 
                placeholder='Введіть  email'/>
                <button type="submit" disabled className="rounded-md h-[45px] px-3 text-center text-white font-semibold bg-blue-800 w-[200px]">
                    Отримувати цікавинки
                </button>
            </div>
        </div>
        <div className="flex flex-row gap-12 py-5 border-b border-gray-200 pb-5">
            <div className="flex w-[20%] flex-col gap-8">
                <div className="flex flex-col gap-0">
                    <span>Безкоштовно в Україні</span>
                    <Link href="tel:0800335425" className="text-[1.1rem]">0-800-335-425</Link>
                    <span className="text-[0.9rem]">
                        Без вихідних, з 9 до 20
                    </span>
                </div>  
                <div className="flex flex-row items-center gap-3">
                    <Link href="https://www.instagram.com/yakabooua/">
                        <Image src="/social/instagram.svg" width={35} height={30} alt="Instagram"/>
                    </Link>
                    <Link href="https://www.youtube.com/channel/UC5w2HgI3yU_t3NtB-hAxVKw">
                        <Image src="/social/youtube.svg" width={35} height={30} alt="Youtube"/>
                    </Link>
                    <Link href="https://www.facebook.com/yakabooua">
                        <Image src="/social/facebook.svg" width={35} height={30} alt="Facebook"/>
                    </Link>
                    <Link href="https://t.me/yakabooua">
                        <Image src="/social/telegram.svg" width={35} height={30} alt="Telegram"/>
                    </Link>
                </div>  
            </div>

            <div className="flex w-[20%] flex-col gap-2">
                <p className="font-semibold">Yakaboo</p>
                <ul className="list-none flex flex-col gap-2">
                    <li>
                        <Link href="#" className="text-black hover:text-gray-700 transition-all duration-150 ease-in">Про магазин</Link>
                    </li>
                    <li>
                        <Link href="/knowledge/bonus" className="text-black hover:text-gray-700 transition-all duration-150 ease-in">Програма лояльності</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-black hover:text-gray-700 transition-all duration-150 ease-in">Вакансії</Link>
                    </li>
                    <li>
                        <Link href="/knowledge/contacts" className="text-black hover:text-gray-700 transition-all duration-150 ease-in">Конакти</Link>
                    </li>
                </ul>
            </div>

            <div className="flex w-[20%] flex-col gap-2">
                <p className="font-semibold">Інформація</p>
                <ul className="list-none flex flex-col gap-2">
                    <li>
                        <Link href="/knowledge/delivery" className="text-black hover:text-gray-700 transition-all duration-150 ease-in">
                            Доставка та оплата
                        </Link>
                    </li>
                    <li>
                        <Link href="/knowledge/podarunkovi-sertyficaty" className="text-black hover:text-gray-700 transition-all duration-150 ease-in">
                            Подарункові сертифікати
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-black hover:text-gray-700 transition-all duration-150 ease-in">Повернення товару</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-black hover:text-gray-700 transition-all duration-150 ease-in">В2В співпраця</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-black hover:text-gray-700 transition-all duration-150 ease-in">Блог</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-black hover:text-gray-700 transition-all duration-150 ease-in">Часто шукають</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-black hover:text-gray-700 transition-all duration-150 ease-in">Серія книг</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-black hover:text-gray-700 transition-all duration-150 ease-in">Автори</Link>
                    </li>
                </ul>
            </div>

            <div className="flex w-[25%] flex-col gap-1">
                <p className="font-semibold">
                    Мобільний застосунок
                </p>
                <p>
                Читайте і прослуховуйте книжки у найбільшій бібліотеці електронних та аудіокниг від 
                топових українських і світових авторів 
                </p>
                <div className="flex flex-row items-center gap-2 mt-1">
                    <Link href="https://play.google.com/store/apps/details?id=ua.yakaboo&hl=uk&gl=US&pli=1">
                        <Image src="/GooglePlayApp.svg" width={150} height={100} alt="Google Play" />
                    </Link>
                    <Link href="https://apps.apple.com/ua/app/yakaboo-%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8-%D1%87%D0%B8%D1%82%D0%B0%D1%82%D0%B8-%D1%81%D0%BB%D1%83%D1%85%D0%B0%D1%82%D0%B8/id1558352848#?platform=iphone">
                        <Image src="/AppStore.svg" alt="App Store" width={150} height={150} />
                    </Link>
                </div>
            </div>
        </div>
        <div className="flex flex-row items-center w-full justify-between pt-3">
            <span>&copy; Yakaboo 2004-2025. Усі права захищено</span>
            <ToTopBtn />
        </div>
    </div>
  )
}