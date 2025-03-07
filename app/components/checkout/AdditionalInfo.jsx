import Link from 'next/link'
import React from 'react'

export const AdditionalInfo = () => {
  return (
    <div className="w-full bg-white rounded-md flex flex-col gap-5 py-5">
        <div className="flex flex-col gap-3 border-b border-gray-200 px-7 pb-4">
            <div className="flex flex-row justify-between gap-5">
                <p className="w-[70%] font-semibold">
                    Подарунковий сертифікат чи промокод
                </p>
                <button className="w-[30%] bg-gray-100 rounded-md py-3 text-center px-4 
                text-gray-500 font-bold text-[0.9rem]">
                    Додати
                </button>
            </div>
            <form className="flex flex-row items-center justify-between gap-5">
                <input className="h-[45px] border border-gray-200 bg-gray-100 px-3 rounded-md w-[65%]" 
                placeholder="Промокод чи сертифікат" type="text" />
                <button className="w-[30%] bg-blue-900/30 rounded-md py-3 text-center px-4 
                text-white font-bold text-[0.9rem]" type="submit" disabled={true}>
                    Застосувати
                </button>
            </form>
            <p className="text-[0.9rem] w-full font-semibold">
                За наявності бонусів їх використання можливе після {" "}
                <Link href="#" className="text-blue-900 hover:underline">авторизації</Link>
            </p>    
        </div>
        <div className="flex flex-col gap-4 px-7 border-b border-gray-200 pb-4">
            <div className="flex flex-row items-center justify-between">
                <span className="text-[1.2rem] font-bold">
                    До сплати
                </span>
                <span className="text-[1.2rem] font-bold">
                    290 грн
                </span>
            </div>
            <div className="flex flex-row items-center justify-between">
                <span className="text-[0.9rem] text-gray-500 font-semibold">
                    1 товар
                </span>
                <span className="text-[0.9rem] text-gray-500 font-semibold">
                    290 грн
                </span>
            </div>
            <div className="flex flex-row items-center justify-between">
                <span className="text-[0.9rem] text-gray-500 font-semibold">
                    Бонуси за замовлення
                </span>
                <span className="text-[0.9rem] text-gray-500 font-semibold">
                    15 грн
                </span>
            </div>
        </div>
        <div className="px-7 border-b border-gray-200 pb-4 text-[0.9rem] font-semibold text-gray-600">
            <p>
                Відправляючи замовлення, я підтверджую, що прочитав і згоден(а), з {" "}
                <Link href="#" className="text-blue-600 hover:underline">Умовами використання</Link>
            </p>
        </div>
        <div className="px-7 border-b border-gray-200 pb-4 text-[0.9rem] font-semibold text-red-500">
            <p>
                Зверніть увагу, що після оплати електронний контент буле доступний до завантаження у розділі {" "}
                <Link href="#" className="text-blue-600 hover:underline">"Моя бібліотека"</Link>
            </p>
        </div>
        <div className="px-7 flex flex-col gap-4">
            <div className="flex flex-row items-center gap-3">
                <input type="checkbox" className="w-[18px] h-[18px] rounded-md bg-gray-100 border border-gray-200" 
                name="call_me" id="call_me"/>
                <label htmlFor="call_me" className="font-semibold">
                    У мене є питання, передзвоніть мені
                </label>
            </div>
            <button className="w-full py-5 rounded-md text-white font-semibold text-[0.9rem]
            bg-red-600/80 hover:bg-red-600 transition-all duration-150 ease-in">
                Підтвердити замовлення
            </button>
            <Link href="#" className="text-center text-[0.9rem] text-blue-800 hover:underline font-semibold">
                Продовжити покупки
            </Link>
        </div>
    </div>
  )
}
