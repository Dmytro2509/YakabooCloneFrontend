import React from 'react'
import { FcGoogle } from "react-icons/fc";


export const LoginWithGoogleBtn = () => {
  return (
    <button className="bg-gray-100 justify-center text-center w-[60%] mx-auto font-semibold py-3 mt-1 rounded-lg text-black text-[0.9rem]
    flex flex-row items-center gap-1">
        <FcGoogle size={20} />
        Продовжити через Google
    </button>
  )
}
