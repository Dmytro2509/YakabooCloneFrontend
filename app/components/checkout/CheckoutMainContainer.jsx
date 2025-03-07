import React from 'react'
import { AdditionalComment, CheckoutSidebar, ContactDataContainer, PaymentMethod } from '.'

export const CheckoutMainContainer = () => {
  return (
    <div className="flex flex-col gap-5">
        <h1 className="text-[1.5rem] font-extrabold mt-3 -mb-2">
          Оформлення замовлення
        </h1>
        <div className="w-full h-full flex flex-row gap-5 items-start">
            <div className="flex flex-col gap-3 w-[70%]">
                <ContactDataContainer />
                <PaymentMethod />
                <AdditionalComment />
            </div>
            <div className="w-[30%]">
              <CheckoutSidebar />
            </div>
        </div>
    </div>
  )
}
