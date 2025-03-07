"use client"

import useESupportModalStore from '@/app/stores/ESupportModalState'
import React from 'react'

export const ESupport = () => {

  const { setIsSupportModalOpen } = useESupportModalStore()

  return (
    <button className="w-[80px] h-[80px] rounded-md fixed bottom-5 left-5 bg-[url(https://forms.esputnik.com/img/3673/forms/18023/8d8e92f8-d858-466d-8996-c8dcf5c82dbf.png)]
    bg-cover bg-no-repeat bg-center" onClick={ setIsSupportModalOpen } />
  )
}
