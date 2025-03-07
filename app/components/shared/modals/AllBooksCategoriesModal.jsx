"use client"

import React, { useState, useEffect, useRef } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { FilterButton, SubcategoriesModal } from '..';
import useBookCategoryStore from '@/app/stores/BookCategoryState';
import Link from 'next/link';
import { Endpoints } from '@/app/endpoints';
import useSubcategoryModalState from '@/app/stores/SubcategoryModalState';

const BUTTONS = [
    {
        "title": "Всі",
        "id": 0,
    },
    {
        "title": "Паперові",
        "id": 1,
    },
    {
        "title": "Електронні",
        "id": 2
    },
    {
        "title": "Аудіо",
        "id": 3
    }
];

export const AllBooksCategoriesModal = () => {
    const { setIsBookCategoryModalOpen, activeButtonIndex, setActiveButtonIndex } = useBookCategoryStore();
    const { isSubcategoryModalOpen, setIsSubcategoryModalOpen, isMouseOnSubcategoryModal, setIsMouseOnSubcategoryModal } = useSubcategoryModalState();
    const [categories, setCategories] = useState(null);
    const [subCategories, setSubCategories] = useState(null);
    const [currentCategory, setCurrentCategory] = useState(null);
    const categoryModalRef = useRef(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const response = await fetch(Endpoints.allBookCategories);
        const data = await response.json();
        setCategories(data);
    };

    const handleCategoryMouseEnter = (categoryId) => {
        setIsSubcategoryModalOpen(true);
        setCurrentCategory(categoryId);
        fetchSubcategories(categoryId);
    };

    const fetchSubcategories = async (categoryId) => {
        const storedSubcategories = localStorage.getItem(`subcategories_${categoryId}`);
        if (storedSubcategories) {
            setSubCategories(JSON.parse(storedSubcategories));
        } else {
            const response = await fetch(`http://localhost:8003/category/${categoryId}/subcategories`);
            const data = await response.json();
            setSubCategories(data);
            localStorage.setItem(`subcategories_${categoryId}`, JSON.stringify(data));
        }
    };

    const handleCategoryMouseLeave = (event) => {
        if (!categoryModalRef.current.contains(event.relatedTarget)) {
            setTimeout(() => {
                if (!isMouseOnSubcategoryModal) {
                    setIsSubcategoryModalOpen(false);
                    setCurrentCategory(null);
                }
            }, 200);
        }
    };

    return (
        <div 
            ref={categoryModalRef}
            className="fixed inset-0 bg-gray-200 bg-opacity-50 flex w-full h-full z-20 cursor-auto"
        >
            {isSubcategoryModalOpen && (<SubcategoriesModal subcategory={subCategories || []} />)}
            <div className="bg-white rounded-md shadow-sm absolute top-0 left-0 w-[380px] h-[100vh] flex flex-col gap-2 py-5 overflow-y-auto">
                <div className="flex flex-row justify-between font-semibold px-5">
                    <h1 className="text-black text-lg">Категорії книг</h1>
                    <button className="p-2 rounded-full text-gray-800 hover:bg-gray-200 text-center cursor-pointer justify-center items-center"
                        onClick={setIsBookCategoryModalOpen}>
                        <IoCloseSharp size={17} />
                    </button>
                </div>
                <div className="flex flex-row gap-2 border-b border-gray-200 pb-5 px-5">
                    {BUTTONS.map((button) => (
                        <FilterButton text={button.title} key={button.id} onClick={() => setActiveButtonIndex(button.id)}
                            isActive={button.id === activeButtonIndex}
                        />
                    ))}
                </div>
                {categories && (
                    <div className="flex flex-col gap-0 w-full -m-2">
                        {categories.map((category) => (
                            <Link href={`/${category.slug}`} key={category.id}
                                onMouseEnter={() => handleCategoryMouseEnter(category.id)}
                                onMouseLeave={(event) => handleCategoryMouseLeave(event)}
                                className="py-5 px-10 border-b border-gray-200 
                                hover:bg-gray-100 transition-all duration-300 ease-in-out">
                                {category.title}
                            </Link>
                        ))}
                        <Link href="/all" className="py-2 px-5 border-b border-gray-200 text-[0.9rem] hover:bg-gray-100 transition-all
                            duration-300 ease-in-out">
                            Дивитись усі
                        </Link>
                    </div>
                )}
                <div className="w-[80%] mx-auto bg-gray-200 rounded-md text-gray-600 text-[0.9rem] mt-5 py-3 px-5">
                    <p className="font-semibold">
                        Немає потрібної категорії або жанру? Спробуйте знайти його через пошук
                    </p>
                </div>
            </div>
        </div>
    );
};
