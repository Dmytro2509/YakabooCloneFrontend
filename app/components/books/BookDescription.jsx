"use client"

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaChevronRight, FaChevronDown, FaChevronUp, FaChevronLeft } from "react-icons/fa";
import { BookInfoBtn, BookType, PaginationBtn, Review } from '.';

export const BookDescription = () => {

    const [showFullDesc, setShowFullDesc] = useState(false);
    const [showFullCharacteristics, setShowFullCharacteristics] = useState(false);

  return (
    <div className="w-[50%] flex flex-col gap-1 bg-white mt-12 -ml-8 mb-10">
        <div className="flex flex-row items-center gap-1 text-gray-600 font-semibold mb-5">
            <Link href="#" className="hover:text-gray-500">
                Книжки
            </Link>
            <FaChevronRight size={12} />
            <Link href="#" className="hover:text-gray-500">
                Художня Література
            </Link>
            <FaChevronRight size={12} />
            <Link href="#" className="hover:text-gray-500">
                Книги Фентезі | Фантастика
            </Link>
            <FaChevronRight size={12} />
            <Link href="#" className="hover:text-gray-500">
                Фантастика
            </Link>
            <FaChevronRight size={12} />
            <Link href="#" className="hover:text-gray-500">
                Подорожі в Часі
            </Link>
        </div>
        <h1 className="text-[1.6rem]">
            Книга 11/22/63
        </h1>
        <p className="text-gray-600 font-semibold">
            Стівен Кінг
        </p>
        <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row items-center gap-1">
                {[...Array(5)].map((_, index) => (
                    <Image src="/review_star.svg" alt="star review" key={index} width={12} height={12} />
                ))}    
            </div>
            <span className="text-pink-500 text-[0.9rem] font-semibold">
                14 відгуків
            </span>
        </div>
        <div className="flex flex-col gap-2 mt-5">
            <p className="font-bold text-gray-600">
                Формат
            </p>    
            <div className="flex flex-row items-center gap-5">
                <BookType format="Паперова" price={ 540 } />
                <BookType format="Електронна" price={ 285 } isActive={ false } />
            </div>
        </div>

        <div className="flex flex-col gap-2 mt-5">
            <p className="font-bold text-black">
                Мова книги
            </p>
            <div className="flex flex-row items-center gap-5">
                <BookInfoBtn text='Українська' />
                <BookInfoBtn text="Англійська" isActive={false} />
            </div>
        </div>

        <div className="flex flex-col gap-2 mt-5">
            <p className="font-bold text-black">
                Видавництво
            </p>
            <div className="flex flex-row items-center gap-5">
                <BookInfoBtn text='Книжковий клуб "Клуб Сімейного Дозвілля"' />
                <BookInfoBtn text="Hodder" isActive={false} />
            </div>
        </div>

        <div className="flex flex-col gap-2 mt-5">
            <p className="font-bold text-black">
                Рік видання
            </p>
            <div className="flex flex-row items-center gap-5">
                <BookInfoBtn text='2012 рік' isActive={false} />
                <BookInfoBtn text="2021 рік" />
            </div>
        </div>
        <button className="flex flex-row items-center gap-1 text-gray-600 font-bold text[0.9rem] mt-5">
            Показати всі варіанти видань
            <FaChevronRight size={18} />
        </button>
        
        <div className="flex flex-col gap-2 mt-5">
            <p className="font-bold text-black">
                Категорія
            </p>
            <div className="flex flex-row gap-5 w-full flex-wrap">
                <BookInfoBtn text='Сучасна проза' isActive={false} />
                <BookInfoBtn text='Фантастика' isActive={false} />
                <BookInfoBtn text='Подорожі в часі' isActive={false} />
                <BookInfoBtn text='Вибір читачів' isActive={false} />
                <BookInfoBtn text='Детективи' isActive={false} />
                <BookInfoBtn text='Трилери' isActive={false} />
                <BookInfoBtn text='Михайло Федоров рекомендує' isActive={false} />
                <BookInfoBtn text='Харкове, ми з тобою' isActive={false} />
                <BookInfoBtn text='Найкращі романи про подорожі у часі' isActive={false} />
            </div>
        </div>

        <div className="flex flex-col gap-2 text-left text-[0.9rem] font-semibold mt-5">
            <p>
                22 листопада 1963 року — дата вбивства Джона Кеннеді. Пролунали три постріли — і світ змінився назавжди.
            </p>
            <p className={`${ !showFullDesc ? "border-b-2 border-white blur-border-bottom" : ""}`}>
                Сьогодення. Дізнавшись, що в барі його приятеля розташований портал до 1958 року, звичайний шкільний учитель Джейк Еппінг не 
                може опиратися спокусі почати нове життя у рок-н-рольні часи Елвіса Преслі. Хіба гостю з майбутнього важко познайомитися з відлюдником 
                Лі Гарві Освальдом і завадити йому вбити президента? Та чи варто гратися з минулим? Яким буде світ, де Кеннеді виживе?
            </p>
            { !showFullDesc ? (
                <button className="flex flex-row items-center gap-1 text-gray-800 font-semibold text-[1rem] mt-1 hover:text-blue-900
                transition duration-150 ease-out" onClick={ () => setShowFullDesc(true) }>
                    Показати ще
                    <FaChevronDown size={15} />
                </button>    
            ) : (
                <div className="flex flex-col gap-2">
                    <p className="text-black font-bold">
                        Про автора
                    </p>
                    <p>
                        Стівен Кінг — шалено популярний американський письменник, який може похизуватися тим, що майже кожен його 
                        твір стає літературною сенсацією та стовідсотковим бестселером. За понад 40 років творчої діяльності Кінга світ побачило 
                        безліч романів, наклади яких давно перетнули межу в третину мільярда примірників. Він володар численних престижних літературних 
                        нагород і має чималу армію шанувальників, яка незмінно поповнюється.
                    </p>
                    <button className="flex flex-row items-center gap-1 text-gray-800 font-semibold text-[1rem] mt-1 hover:text-blue-900
                    transition duration-150 ease-out" onClick={ () => setShowFullDesc(false) }>
                        Показати менше
                        <FaChevronUp size={15} />
                    </button>    
                </div>
            ) }
            
        </div>

        <div className="flex flex-col gap-2 text-[0.9rem] mt-5">
            <h3 className="font-bold text-black text-[1.2rem]">
                Характеристики
            </h3>
            <div className="flex flex-row justify-between w-full border-b border-gray-200 pb-5 pt-2 text-[1rem]">
                <span className="font-semibold">Формат</span>
                <span className="text-gray-600">135x205 мм</span>
            </div>
            <div className="flex flex-row justify-between w-full border-b border-gray-200 pb-5 pt-2 text-[1rem]">
                <span className="font-semibold">Автор</span>
                <Link className="text-blue-600" href="#">Стівен Кінг</Link>
            </div>
            <div className="flex flex-row justify-between w-full border-b border-gray-200 pb-5 pt-2 text-[1rem]">
                <span className="font-semibold">Тип</span>
                <span className="text-gray-600">Паперова</span>
            </div>
            { !showFullCharacteristics ? (
                <button className="flex flex-row items-center gap-1 text-gray-500 font-bold text-[1rem] mt-1 hover:text-blue-500
                transition duration-150 ease-out" onClick={ () => setShowFullCharacteristics(true) }>
                    Показати всі характеристики
                    <FaChevronDown size={15} />
                </button>    
            ): (
                <><div className="flex flex-row justify-between w-full border-b border-gray-200 pb-5 pt-2 text-[1rem]">
                <span className="font-semibold">Ілюстрації</span>
                <span className="text-gray-600">Немає ілюстрацій</span>
            </div>
            <div className="flex flex-row justify-between w-full border-b border-gray-200 pb-5 pt-2 text-[1rem]">
                <span className="font-semibold">Видавництво</span>
                <Link className="text-blue-600" href="#">Книжковий клуб "Клуб Сімейного Дозвілля"</Link>
            </div>
            <div className="flex flex-row justify-between w-full border-b border-gray-200 pb-5 pt-2 text-[1rem]">
                <span className="font-semibold">Література за періодами</span>
                <Link className="text-blue-600" href="#">Сучасна література</Link>
            </div>
            <div className="flex flex-row justify-between w-full border-b border-gray-200 pb-5 pt-2 text-[1rem]">
                <span className="font-semibold">ISBN</span>
                <span className="text-gray-600">978-617-12-8842-3</span>
            </div>
            <div className="flex flex-row justify-between w-full border-b border-gray-200 pb-5 pt-2 text-[1rem]">
                <span className="font-semibold">Мова</span>
                <span className="text-gray-600">Українська</span>
            </div>
            <div className="flex flex-row justify-between w-full border-b border-gray-200 pb-5 pt-2 text-[1rem]">
                <span className="font-semibold">Тип обкладинки</span>
                <span className="text-gray-600">Тверда</span>
            </div>
            <div className="flex flex-row justify-between w-full border-b border-gray-200 pb-5 pt-2 text-[1rem]">
                <span className="font-semibold">Кількість сторінок</span>
                <span className="text-gray-600">976</span>
            </div>
            <div className="flex flex-row justify-between w-full border-b border-gray-200 pb-5 pt-2 text-[1rem]">
                <span className="font-semibold">Рік видання</span>
                <span className="text-gray-600">2021</span>
            </div>
            <div className="flex flex-row justify-between w-full border-b border-gray-200 pb-5 pt-2 text-[1rem]">
                <span className="font-semibold">Рік першого видання</span>
                <span className="text-gray-600">2011</span>
            </div>
            <button className="flex flex-row items-center gap-1 text-gray-500 font-bold text-[1rem] mt-1 hover:text-blue-500
            transition duration-150 ease-out" onClick={ () => setShowFullCharacteristics(false) }>
                Приховати всі характеристики
                <FaChevronDown size={15} />
            </button>   </>
            ) }             
            

        </div>

        <div className="flex flex-col gap-2 text-[0.9rem] mt-5">
            <h3 className="text-black font-bold text-[1.2rem]">
                Про автора
            </h3>
            <div className="flex flex-row justify-between gap-5 items-center">
                <p className="w-[85%] text-left font-semibold">
                    Один з найбільш відомих американських письменників сучасності, що отримав неофіційний титул «Короля жахів». 
                    Романи та оповідання Стівена Кінга розійшлися по світу сумарним тиражем понад 350 мільйонів примірників, багато творів 
                    отримали повнометражні екранізації, телевізійні і навіть театральні постановки. Літературному стилю автора властива 
                    гострота, моторошні сюжети, увага до діалогів і пристрасть до викриття людських пороків. Купити книги Стівена 
                    Кінга варто всім поціновувачам сучасної прози в цілому і жанру жахів і містики конкретно.
                </p>
                <div className="w-[15%]">
                    <Image src="/King-01.jpg" alt="King" width={100} height={100} className="rounded-full w-[90px] h-[90px] object-cover" />
                </div>
            </div>
            <Link href="#" className="flex flex-row items-center gap-1 text-gray-500 font-bold text-[1rem] mt-1 hover:text-blue-500
            transition duration-150 ease-out w-[35%]">
                Детальніше про автора
                <FaChevronRight size={15} />
            </Link>
        </div>

        <div className="flex flex-col gap-5 text-[0.9rem] mt-5">
            <div className="flex flex-row items-center justify-between">
                <h5 className="font-bold text-[1rem]">
                    Відгуки
                </h5>
                <div className="flex flex-row items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                        <Image src="/review_star.svg" alt="star review" key={index} width={12} height={12} />
                    ))}    
                    <span className="text-pink-500 text-[0.9rem] font-semibold">
                    14 відгуків
                    </span>
                </div>
            </div>
            <button className="w-full rounded-md bg-gray-100 text-gray-700 py-3 font-bold text-center">
                Залишити відгук
            </button>
            <Review username="Вероніка Гац" date="1 березня 2024 р" grade={3} reviewHeader="Очікувала кращого"
            reviewText={"Як на мене, це переоцінена книга Стівена Кінга. Але, загалом, не погана. Сюжет мені не дуже сподобався. Здебільшого тому, що я не люблю цей жанр, але для людей, які люблять історії про подорож в часі, це буде доволі цікава книга . "} />

            <Review username="Вероніка Гац" date="1 березня 2024 р" grade={3} reviewHeader="Очікувала кращого"
            reviewText={"Як на мене, це переоцінена книга Стівена Кінга. Але, загалом, не погана. Сюжет мені не дуже сподобався. Здебільшого тому, що я не люблю цей жанр, але для людей, які люблять історії про подорож в часі, це буде доволі цікава книга . "} />
            
            <Review username="Вероніка Гац" date="1 березня 2024 р" grade={3} reviewHeader="Очікувала кращого"
            reviewText={"Як на мене, це переоцінена книга Стівена Кінга. Але, загалом, не погана. Сюжет мені не дуже сподобався. Здебільшого тому, що я не люблю цей жанр, але для людей, які люблять історії про подорож в часі, це буде доволі цікава книга . "} />
        </div>
        <div className="flex flex-row items-center gap-2 mt-3">
            <PaginationBtn pageNumber={ <FaChevronLeft size={15} /> } isActive={true} />
            {[...Array(5)].map((_, index) => (
                <PaginationBtn key={ index } pageNumber={ index + 1 } isActive={ index + 1 === 1 } />
            ))}   
            <PaginationBtn pageNumber={ <FaChevronRight size={15} /> } />
        </div>
    </div>
  )
}
