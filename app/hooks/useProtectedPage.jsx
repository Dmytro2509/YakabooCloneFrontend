import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import useLoginModalStore from "../stores/LoginModalState"
import { useAuth } from "./useAuth"


export const useProtectedPage = () => {
    const router = useRouter();
    const isAuthenticated = useAuth();
    const { isLoginModalOpen, setIsLoginModalOpen } = useLoginModalStore();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(isAuthenticated !== undefined){
            setLoading(false);
            if(!isAuthenticated){
                setIsLoginModalOpen(true);
            } else {
                setIsLoginModalOpen(false)
            }
        }
    }, [isAuthenticated, setIsLoginModalOpen])

    const handleCloseModal = () => {
        setIsLoginModalOpen(false);
        router.push("/")
    }

    return { isAuthenticated, isLoginModalOpen, loading,  handleCloseModal}
}