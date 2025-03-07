"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { AuthorFact } from '.'

export const AuthorInfoCard = () => {

    const [ showFullText, setShowFullText ] = useState(false)

    const toggleShowText = () => {
        if(!showFullText) {
            setShowFullText(true)
        } else {
            setShowFullText(false)
        }
    }

  return (
    <div className="bg-white rounded-md w-full flex flex-row gap-3 py-7 px-14">
        <div className="w-[20%] flex flex-col gap-1">
            <div className="w-full">
                <Image src="https://static.yakaboo.ua/media/entity/author/1/_/1_71.jpg" width={250} height={250} 
                alt="Steven King"
                className="cursor-pointer"/>
            </div>
            <div className="flex flex-row items-center gap-1">
                <div className="relative w-[50px] h-[70px]">
                    <Image src="https://static.yakaboo.ua/media/entity/author/1/_/1_71.jpg"
                    alt="SteveN King 2"
                    objectFit='cover'
                    className="cursor-pointer rounded-lg"
                    layout="fill" />  
                </div>
                <div className="relative w-[50px] h-[70px]">
                    <Image src="https://static.yakaboo.ua/media/entity/author/4/_/4_48.jpg"
                    alt="Steven King 3"
                    objectFit='cover'
                    className="cursor-pointer rounded-lg" 
                    layout="fill"/>  
                </div>
                <div className="relative w-[50px] h-[70px]">
                    <Image src="https://static.yakaboo.ua/media/entity/author/2/_/2_1_48.jpg"
                    alt="Steven King 4"
                    objectFit="cover"
                    className="cursor-pointer rounded-lg" 
                    layout="fill"/>  
                </div>
                <div className="relative w-[50px] h-[70px]">
                    <Image src="https://static.yakaboo.ua/media/entity/author/3/_/3_2_26.jpg"
                    alt="Steven King 5"
                    objectFit='cover'
                    className="cursor-pointer rounded-lg" 
                    layout="fill"/>  
                </div>
            </div>
        </div>

        <div className="w-[60%] text-left flex flex-col gap-5 text-[0.9rem]">
            <h1 className="text-[2rem] font-bold">
                Стівен Кінг - книги і біографія
            </h1>
            <div className="flex flex-col gap-1 w-[40%] ">
                <div className="flex flex-row items-center justify-between pb-3 border-b border-gray-200 w-full pt-1">
                    <span className="font-semibold text-[1rem]">
                        Повне ім'я
                    </span>
                    <span className="font-semibold text-gray-500 text-[1rem]">
                        Стівен Кінг
                    </span>
                </div>

                <div className="flex flex-row items-center justify-between pb-3 w-full pt-2">
                    <span className="font-semibold text-[1rem]">
                        Дата народження
                    </span>
                    <span className="font-semibold text-gray-500 text-[1rem]">
                        21 вересня 1947 року
                    </span>
                </div>
            </div>
            <p className="text-left text-black font-semibold">
                Один з найбільш відомих американських письменників сучасності, що отримав неофіційний титул «Короля жахів». 
                Романи та оповідання Стівена Кінга розійшлися по світу сумарним тиражем понад 350 мільйонів примірників, 
                багато творів отримали повнометражні екранізації, телевізійні і навіть театральні постановки. Літературному 
                стилю автора властива гострота, моторошні сюжети, увага до діалогів і пристрасть до викриття людських пороків. 
                Купити книги Стівена Кінга варто всім поціновувачам сучасної прози в цілому і жанру жахів і містики конкретно.
            </p>
            <h1 className="text-[1.5rem] font-bold">
                Література, що льодянить душу: всі книги Стівена Кінга
            </h1>
            {!showFullText && (
                <p className="font-semibold">Майбутня зірка літе...</p>    
            )}
            

            {!showFullText && (
                <button className="flex flex-row items-center gap-1 text-[0.9rem] text-gray-700 font-semibold" onClick={() => toggleShowText()}>
                    Показати повністю
                    <FaChevronUp size={12} />
                </button>    
            )}
            
            
            { showFullText && (
                <div className="flex flex-col gap-2 font-semibold">
                    <div className="flex flex-col gap-0">
                        <p>
                            Майбутня зірка літератури народився в 1947 році в Портленді, штат Мен, США. Примітно, що дія багатьох книг письменника 
                            проходить в рідному для нього штаті. Батько залишив сім'ю, коли дитині було лише два роки, просто одного дня вийшов за 
                            сигаретами і не повернувся. Щоб прогодувати дітей, мати бралася за будь-яку трапляючусь їй роботу, але вони все одно ледь 
                            зводили кінці з кінцями. Тому хлопчик ріс з постійним відчуттям несправедливості світу. Як розповідає сам Стівен Кінг, 
                            в юному віці він став свідком трагічної смерті товариша під колесами товарного поїзда. Подія настільки шокувало дитини, 
                            що на багато років була витіснена свідомістю з пам'яті. Все це згодом знайшло відображення в творчості автора.
                        </p>
                        <p>
                            Створювати невеликі розповіді він почав ще в молодшій школі. Свій перший роман «Керрі» письменник закінчив в 1971 році, 
                            визнав його невдалим і викинув у сміття, але за наполяганням дружини повернув і допрацював твір. У 1974 році роман був опублікований, 
                            а завдяки отриманому гонорару автор нарешті зміг залишити роботу і повністю присвятити себе літературній діяльності. 
                            У цьому ж році він завершив роботу над ще одним, який згодом став класичним, твором - книгою «Сяйво».
                        </p>
                        <p>
                            У 1982 році на прилавках магазинів з'явився «Стрілець», перша частина популярного циклу «Темна вежа», який автор називає 
                            своїм magnum opus. У цій серії письменник майстерно змішує велику кількість літературних жанрів: жахи, наукову фантастику і 
                            вестерн, а також проводить безліч паралелей з іншими своїми творами. Це історія стрілка Роланда, який мандрує в пошуках 
                            зловісної Вежі, що знаходиться в центрі всіх світів. Герой впевнений, що там він знайде того, хто керує Всесвітом, 
                            і зможе навести порядок у світі.
                        </p>
                        <p>
                            Серед інших популярних романів Стівена Кінга варто виділити книги «Кладовище домашніх тварин», «Воно», 
                            «Людина, що біжить», «Зелена миля», «Ловець снів», «Під куполом».
                        </p>
                    </div>
                    
                    <h1 className="text-[1.5rem] font-bold">
                        Реакція читачів і критиків
                    </h1>
                    <div className="flex flex-col gap-0">
                        <p>
                            Це один з найславетніших, шанованих і титулованих письменників сучасності. Автор удостоєний 
                            великої кількості премій, в тому числі і престижної Національної книжкової премії. Читачі у в
                            ідгуках і коментарях до творів Стівена Кінга відзначають легкий і невимушений стиль написання, 
                            завдяки якому автор створює дійсно страшні і захоплюючі сюжети.
                        </p>
                        <p>
                            Купити старі і нові книги Стівена Кінга ви можете на сайті нашого інтернет-магазину.
                        </p>
                    </div>

                    <button className="flex flex-row items-center gap-1 text-[0.9rem] text-gray-700" onClick={ () => toggleShowText() }>
                        Приховати
                        <FaChevronDown size={12} />
                    </button>
                </div>    
            ) }
            
        </div>

        <div className="w-[20%] flex flex-col gap-5">
            <AuthorFact factText='Кінг встановив для себе певну письменницьку "квоту" - 2000 слів кожен день. ' />
        </div>
    </div>
  )
}