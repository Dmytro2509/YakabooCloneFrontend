import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";

export const PayByParts = () => {
  return (
    <div className="w-full border border-gray-200 rounded-md p-3 flex flex-col gap-3">
        <div className="flex flex-row items-center gap-1">
            <span className="text-[0.9rem] font-semibold">
                Сплачуйте частинами
            </span>
            <IoIosInformationCircleOutline size={18} className="text-gray-400" />
        </div>
        <div className="flex flex-row items-center gap-1">
            <div className="w-1/2 flex flex-row gap-0">
                <div className="w-1/3">
                    <Image src="/mono-logo.svg" alt="Mono" width={45} height={45} />
                </div>
                <div className="w-1/2 flex flex-col gap-0">
                    <span className="text-[0.9rem] text-gray-700 font-semibold">
                        Monobank
                    </span>
                    <Link href="#" className="text-blue-800 text-[0.9rem] underline decoration-dashed underline-offset-4">
                        2-3 платежі
                    </Link>
                </div>
            </div>
            <div className="w-1/2 flex flex-row gap-0">
                <div className="w-1/3">
                    <Image src="/privat-logo.svg" alt="Privat" width={45} height={45} />
                </div>
                <div className="w-1/2 flex flex-col gap-0">
                    <span className="text-[0.9rem] text-gray-700 font-semibold">
                        ПриватБанк
                    </span>
                    <Link href="#" className="text-blue-800 text-[0.9rem] underline decoration-dashed underline-offset-4">
                        2-4 платежі
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
