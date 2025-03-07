import React from 'react'
import useProfileSettingsState from '@/app/stores/ProfileSettingsState';

export const UserLettersButton = () => {

    const getCookie = (name) => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) {
            return match[2]
        }
        return null;
    }

    const getUserFirstLetters = () => {
        const firstName = getCookie("first_name")
        const lastName = getCookie("last_name")
        let firstLetters = ""
        if (firstName && lastName){
            firstLetters = firstName[0] + lastName[0]    
        } else {
            firstLetters = ""
        }
        
        return firstLetters
    }

    const { isProfileSettingsOpen, setIsProfileSettingsOpen } = useProfileSettingsState();

    const handleFirstLettersClick = () => {
        if(isProfileSettingsOpen){
            setIsProfileSettingsOpen(false)
        } else {
            setIsProfileSettingsOpen(true)
        }
    }

  return (
    <div className="p-2 rounded-full bg-pink-500 text-white text-cener cursor-pointer"
    onClick={ () => handleFirstLettersClick() }>
        <span className="text-center">
            { getUserFirstLetters().toUpperCase() }
        </span>
    </div>
  )
}
