import React from 'react'
import Image from 'next/image'
import useDeliveryModalState from '@/app/stores/DeliveryCityModalState'

export const DeliveryCity = () => {

  const { setIsDeliveryModalOpen } = useDeliveryModalState();

  return (
    <div className="rounded-md bg-gray-100 flex flex-row items-center gap-2 p-4 cursor-pointer" onClick={ setIsDeliveryModalOpen }>
        <Image src="/delivery_city.svg" alt="365" width={45} height={45} />

        <div className="flex flex-col gap-1">
            <p className="text-blue-800 text-[0.9rem] font-semibold">
                Вказати місто доставки
            </p>
            <p className="text-[0.8rem] text-gray-500 font-semibold">
                Щоб бачити точні умови доставки
            </p>
        </div>
    </div>
  )
}
