"use client"

import { deleteCookie, getCookie } from "@/app/utils";
import { Endpoints } from "@/app/endpoints";
import { useRouter } from "next/navigation"
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { LoginModal } from "@/app/components/shared/modals/LoginModal";
import { useProtectedPage } from "@/app/hooks/useProtectedPage";
import useRedirectAfterLogoutState from "@/app/stores/RedirectAfterLogoutState";


export default function MyAccountPage() {

    const { isAuthenticated, loading, handleCloseModal } = useProtectedPage();
    const { setIsRedirectAfterLogout } = useRedirectAfterLogoutState();
    const router = useRouter();

    const logoutUser = async() => {
        const refreshToken = getCookie("refresh_token")

        const fetchBody = {
            refresh_token: refreshToken
        }

        console.log(fetchBody)

        if(refreshToken){
            try{
                const response = await fetch(Endpoints.userLogout, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${refreshToken}`
                    }
                })

                if(response.ok) {
                    const cookiesForDelete = [
                        "access_token", "refresh_token",
                        "token_type", "email", "phone_number", "first_name",
                        "last_name"
                    ]
                    cookiesForDelete.forEach((cookie) => {
                        deleteCookie(cookie)
                    })
                    setIsRedirectAfterLogout(true)
                    router.push("/")
                }
            }
            catch(err){
                console.error(err)
            }
        }
    }

    useEffect(() => {
        if(isAuthenticated){
            logoutUser()
        }
    }, [isAuthenticated])

    if (loading) {
        return <FaSpinner size={40} className="flex m-auto mt-[10%] animate-spin" />;
    } 

    return (
        <>
            {!isAuthenticated ? (
                <LoginModal afterClose={handleCloseModal} />
            ) : (
                <></>
            )}
        </>
    )
}