"use client"
import React, { useState } from 'react'
import { NoneSpan } from '../shared';
import Image from 'next/image';

export const MainInfoContainer = () => {

  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2]
    }
    return null;
  }

  const getFullName = () => {
    const fullName = `${getCookie("first_name")} ${getCookie("last_name")}`
    return fullName
  }

  const [visibleForms, setVisibleForms] = useState([])

  const openForm = formId => {
    setVisibleForms([...visibleForms, formId])
  }

  const closeForm = formId => {
    setVisibleForms(visibleForms.filter(id => id !== formId))
  }

  return (
    <div className="bg-white rounded-md w-[50%] p-5 flex flex-col gap-6">
        <p className="text-[1.2rem] font-semibold">
          Інформація
        </p>
        { !visibleForms.includes(1) && (
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-0">
              <span className="text-[0.8rem] text-gray-500 font-bold">
                Ім'я
              </span>
              <span className="font-semibold">
                { getFullName() }
              </span>
            </div>
            <button className="bg-transparent text-gray-700 font-bold text-[0.9rem] hover:text-gray-800"
            onClick={() => openForm(1)}>
              Змінити
            </button>
          </div>  
        ) }
        
        { visibleForms.includes(1) && (
          <div className="border-t border-gray-200 flex flex-col gap-4 pt-2">
            <form className="flex flex-col gap-5 w-full">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[0.9rem]" htmlFor="first_name">
                  Ім'я
                </label>
                <input type="text" name="first_name" id="first_name" className="h-[45px] rounded-md bg-gray-100 
                border border-gray-200 hover:bg-white transition-all duration-150 ease-in px-5 w-[45%]" autoComplete="false" 
                placeholder="Введіть ваше ім'я" defaultValue={getCookie("first_name")} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[0.9rem]" htmlFor="last_name">
                  Прізвище
                </label>  
                <div className="flex flex-row items-center justify-between">
                  <input type="text" name="last_name" id="last_name" className="h-[45px] rounded-md bg-gray-100 
                  border border-gray-200 hover:bg-white transition-all duration-150 ease-in px-5 w-[45%]" 
                  placeholder='Введіть ваше прізвище' defaultValue={getCookie("last_name")}/>
                  <div className="flex flex-row gap-3">
                    <button type="submit" className="bg-blue-900 hover:bg-blue-900/80 rounded-md py-3 text-white font-bold 
                    px-3 transition-all duration-150 ease-in">
                      Зберегти
                    </button>
                    <button type="button" className="bg-gray-100 hover:bg-gray-200 rounded-md py-3 text-gray-500 font-bold 
                    px-3 transition-all duration-150 ease-in" 
                    onClick={() => closeForm(1)}>
                      Скасувати
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>  
        ) }
        
        { !visibleForms.includes(2) ? (
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-0">
                  <span className="text-[0.8rem] text-gray-500 font-bold">
                    Електронна пошта
                  </span>
                  <span className="font-semibold">
                    { getCookie("email") }
                  </span>
              </div>
              <button className="bg-transparent text-gray-700 font-bold text-[0.9rem] hover:text-gray-800"
              onClick={() => openForm(2)}>
                Змінити
              </button>
            </div>
          ) : 
          (
            <div className="border-t border-gray-200 flex flex-col gap-4 pt-2">
              <form>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[0.9rem]" htmlFor="email">
                    Електронна пошта
                  </label>
                  <div className="flex flex-row items-center justify-between">
                    <input type="email" name="email" id="email" className="h-[45px] rounded-md bg-gray-100 
                    border border-gray-200 hover:bg-white transition-all duration-150 ease-in px-5 w-[45%]"
                    placeholder="Введіть ваш новий email" defaultValue={getCookie("email")} />
                  <div className="flex flex-row gap-3">
                    <button type="submit" className="bg-blue-900 hover:bg-blue-900/80 rounded-md py-3 text-white font-bold 
                    px-3 transition-all duration-150 ease-in">
                      Зберегти
                    </button>
                    <button type="button" className="bg-gray-100 hover:bg-gray-200 rounded-md py-3 text-gray-500 font-bold 
                    px-3 transition-all duration-150 ease-in"
                    onClick={() => closeForm(2)}>
                      Скасувати
                    </button>
                  </div>
                </div>
              </div>  
            </form>
        </div>
        )}

        { !visibleForms.includes(3) ? (
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-0">
              <span className="text-[0.8rem] text-gray-500 font-bold">
                Номер телефону
              </span>
              <span className="font-semibold">
                +{ getCookie("phone_number") }
              </span>
            </div>
            <button className="bg-transparent text-gray-700 font-bold text-[0.9rem] hover:text-gray-800"
            onClick={() => openForm(3)}>
              Змінити
            </button>
          </div>
        ) : (
          <div className="border-t border-gray-200 flex flex-col gap-4 pt-2">
            <form>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[0.9rem]" htmlFor="phone">
                  Номер телефону
                </label>
                <div className="flex flex-row items-center justify-between">
                  <input type="tel" name="phone" id="phone" className="h-[45px] rounded-md bg-gray-100 
                  border border-gray-200 hover:bg-white transition-all duration-150 ease-in px-5 w-[45%] relative"
                  placeholder="Введіть ваш новий номер телефону" defaultValue={`+${getCookie("phone_number")}`} />
                  <Image src="/ukraine-small.svg" width={15} height={15} alt="ukraine" className="absolute left-[24%] cursor-pointer" />
                  <div className="flex flex-row gap-3">
                    <button type="submit" className="bg-blue-900 hover:bg-blue-900/80 rounded-md py-3 text-white font-bold 
                    px-3 transition-all duration-150 ease-in">
                      Зберегти
                    </button>
                    <button type="button" className="bg-gray-100 hover:bg-gray-200 rounded-md py-3 text-gray-500 font-bold 
                    px-3 transition-all duration-150 ease-in"
                    onClick={() => closeForm(3)}>
                      Скасувати
                    </button>
                  </div>
                </div>
              </div>  
            </form>
          </div>
        ) }

        { !visibleForms.includes(4) ? (
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-0">
              <span className="text-[0.8rem] text-gray-500 font-bold">
                Пароль
              </span>
              <span className="font-semibold">
                ********
              </span>
            </div>
            <button className="bg-transparent text-gray-700 font-bold text-[0.9rem] hover:text-gray-800"
            onClick={() => openForm(4)}>
              Змінити
            </button>
          </div>  
        ) : (
          <div className="border-t border-gray-200 flex flex-col gap-4 pt-2">
            <form className="flex flex-col gap-5 w-full">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[0.9rem]" htmlFor="old_password">
                  Старий пароль
                </label>
                <input type="password" name="old_password" id="old_password" className="h-[45px] rounded-md bg-gray-100 
                border border-gray-200 hover:bg-white transition-all duration-150 ease-in px-5 w-[45%]" autoComplete="false" 
                placeholder="Введіть старий пароль" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-0">
                  <label className="font-bold text-[0.9rem]" htmlFor="new_password">
                    Новий пароль
                  </label>  
                  <span className="text-[0.8rem] text-gray-600 font-semibold max-w-[45%]">
                    Не менше восьми знаків без урахування пробілів на початку та в кінці
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <input type="password" name="new_password" id="new_password" className="h-[45px] rounded-md bg-gray-100 
                  border border-gray-200 hover:bg-white transition-all duration-150 ease-in px-5 w-[45%]" 
                  placeholder='Введіть новий пароль'/>
                  <div className="flex flex-row gap-3">
                    <button type="submit" className="bg-blue-900 hover:bg-blue-900/80 rounded-md py-3 text-white font-bold 
                    px-3 transition-all duration-150 ease-in">
                      Зберегти
                    </button>
                    <button type="button" className="bg-gray-100 hover:bg-gray-200 rounded-md py-3 text-gray-500 font-bold 
                    px-3 transition-all duration-150 ease-in"
                    onClick={() => closeForm(4)}>
                      Скасувати
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>  
        )}

        { !visibleForms.includes(5) ? (
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-0">
              <span className="text-[0.8rem] text-gray-500 font-bold">
                Дата народження
              </span>
            </div>
            <button className="bg-transparent text-gray-700 font-bold text-[0.9rem] hover:text-gray-800"
            onClick={() => openForm(5)}>
              Додати
            </button>
          </div>  
        ) : (
          <div className="border-t border-gray-200 flex flex-col gap-4 pt-2">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-[0.9rem]" htmlFor="birth_date">
                Дата народження
              </label>
              <div className="flex flex-row items-center justify-between">
                <input type="date" name="birth_date" id="birth_date" className="h-[45px] rounded-md bg-gray-100 
                border border-gray-200 hover:bg-white transition-all duration-150 ease-in px-5 w-[45%]" />
                <div className="flex flex-row gap-3">
                  <button type="submit" className="bg-blue-900 hover:bg-blue-900/80 rounded-md py-3 text-white font-bold 
                  px-3 transition-all duration-150 ease-in">
                    Зберегти
                  </button>
                  <button type="button" className="bg-gray-100 hover:bg-gray-200 rounded-md py-3 text-gray-500 font-bold 
                  px-3 transition-all duration-150 ease-in"
                  onClick={() => closeForm(5)}>
                    Скасувати
                  </button>
                </div>
              </div>
            </div>
          </div>  
        )}
        
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-col gap-0">
              <span className="text-[0.8rem font-bold">
                Підписка на електронні листи
              </span>
            </div>
            <NoneSpan />
          </div>
          <p className="text-[0.9rem] font-semibold">
            Міняємо email на книжкотренди. Інформація про новинки, книжкові добірки, секретні промокоди
          </p>  
        </div>
        
    </div>
  )
}
