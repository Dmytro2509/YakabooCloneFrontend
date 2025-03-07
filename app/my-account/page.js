"use client"

import { Delivery365Container, MainInfoContainer } from "../components";
import { LoginModal } from "../components/shared/modals/LoginModal";
import { FaSpinner } from "react-icons/fa";
import { useProtectedPage } from "../hooks/useProtectedPage";

export default function MyAccountPage() {

    const { isAuthenticated, loading, handleCloseModal } = useProtectedPage();

    if (loading) {
        return <FaSpinner size={40} className="flex m-auto mt-[10%] animate-spin" />;
    }

    return (
        <>
            {!isAuthenticated ? (
                <LoginModal afterClose={handleCloseModal} />
            ) : (
                <div className="bg-gray-100 px-[6.5%] -mt-5 pb-10">
                    <div className="w-full flex-col gap-5 mt-5">
                        <h1 className="text-[1.5rem] font-extrabold">
                            Налаштування
                        </h1>
                        <div className="flex flex-row gap-5 h-auto items-start mt-3">
                            <MainInfoContainer />
                            <Delivery365Container />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
