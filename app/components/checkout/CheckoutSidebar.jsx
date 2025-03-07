import React from 'react'

import { AdditionalInfo, CheckoutSidebarMainInfo } from '.';

export const CheckoutSidebar = ({count = 1}) => {
  return (
    <div className="flex flex-col gap-3">
        <CheckoutSidebarMainInfo count={count} /> 
        <AdditionalInfo />   
    </div>
    
  )
}
