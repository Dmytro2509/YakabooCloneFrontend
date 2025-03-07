"use client"

import useSubcategoryModalState from '@/app/stores/SubcategoryModalState'
import Link from 'next/link'
import React, { useRef } from 'react'

export const SubcategoriesModal = ({ subcategory }) => {

    const { setIsMouseOnSubcategoryModal } = useSubcategoryModalState();
    const subcategoryModalRef = useRef(null);

    const handleMouseEnter = () => {
        setIsMouseOnSubcategoryModal(true);
    };

    const handleMouseLeave = (event) => {
        if (!subcategoryModalRef.current.contains(event.relatedTarget)) {
            setIsMouseOnSubcategoryModal(false);
        }
    };

    return (
        <div 
            ref={subcategoryModalRef}
            className="bg-white rounded-md shadow-sm absolute top-0 left-[380px] w-[300px] h-[100vh] flex flex-col gap-2 py-5 overflow-y-auto z-50"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            {subcategory.length > 0 && (
                <>
                    <Link 
                        href="/all" 
                        className="py-2 px-5 border-b border-gray-200 text-[0.9rem] hover:bg-gray-100 transition-all duration-300 ease-in-out"
                    >
                        Дивитись усі
                    </Link>
                    {subcategory.map((sub, index) => (
                        <Link 
                            href={`/${sub.slug}`} 
                            className="py-2 px-5 border-b border-gray-200 text-[0.9rem] hover:bg-gray-100 transition-all duration-300 ease-in-out" 
                            key={index}
                        >
                            {sub.title}
                        </Link>
                    ))}
                </>
            )}
        </div>
    );
}
