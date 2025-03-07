"use client"

import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css'

export const ContactDataContainer = () => {

    const [selectedCountry] = useState("UA")

  return (
    <div className="bg-white rounded-md w-full px-5 py-7 flex flex-col gap-7">
        <h1 className="text-[1.3rem] font-bold">
            Контактні дані
        </h1>
        <form className="w-full flex flex-col gap-5">
            <div className="flex flex-row justify-between gap-12">
                <div className="flex flex-col gap-2 w-1/2">
                    <label className="font-bold text-[0.9rem]" htmlFor="first_name">
                        Ім'я *
                    </label>
                    <input className="bg-gray-100 border border-gray-200 w-full rounded-md px-4 h-[45px]
                    hover:bg-white" placeholder="Введіть ваше ім'я" name="first_name" type="text" />
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                    <label className="font-bold text-[0.9rem]" htmlFor="last_name">
                        Прізвище *
                    </label>
                    <input className="bg-gray-100 border border-gray-200 w-full rounded-md px-4 h-[45px]
                    hover:bg-white" placeholder="Введіть ваше прізвище" name="last_name" type="text" />
                </div>
            </div>
            <div className="flex flex-row justify-between gap-12">
                <div className="flex flex-col gap-2 w-1/2">
                    <label className="font-bold text-[0.9rem]" htmlFor="phone">
                        Номер телефону *
                    </label>
                    <div className="flex flex-row items-center gap-0 w-[96%] relative h-[45px] bg-gray-100 border border-gray-200 rounded-md">
                        <PhoneInput className="h-[45px]"
                            name="phone"
                            country={selectedCountry.toLowerCase()}
                            disableDropdown={false}
                            inputStyle={{"height": "45px", "width": "100%", "backgroundColor": "#f3f4f6", "border": "1px solid #e5e7eb"}}
                            buttonStyle={{"padding": "0px 3px", "border": "1px solid #e5e7eb"}}
                            preferredCountries ={["ua"]}
                            excludeCountries={["ru"]}
                            minLength={8}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                    <label className="font-bold text-[0.9rem]" htmlFor="email">
                        Електронна пошта *
                    </label>
                    <input className="bg-gray-100 border border-gray-200 w-full rounded-md px-4 h-[45px]
                    hover:bg-white" placeholder="Введіть ваш email" name="email" type="email" />
                </div>
            </div>
        </form>
    </div>
  )
}
