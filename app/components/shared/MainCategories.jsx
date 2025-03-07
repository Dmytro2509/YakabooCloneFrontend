import React from 'react'
import { CategoryButton } from '.'

const CATEGORIES = [
    {
        id: 1,
        title: "Акції 🔥",
        href: "/promo",
        isActive: true
    },
    {
        id: 2,
        title: "Зимова єПідтримка ❄",
        href: "/zymova-epidtrymka",
        isActive: false
    },
    {
        id: 3,
        title: "єКнига 📲",
        href: "/e-knyga",
        isActive: false
    },
    {
        id: 4,
        title: "Комплекти до 1000₴ 🎁",
        href: "/komplekty-do-1000",
        isActive: false
    },
    {
        id: 5,
        title: "Комплекти єКнига 📚",
        href: "/komplekty-eknyga",
        isActive: false
    },
    {
        id: 6,
        title: "Книгодарування 💗",
        href: "/knygodruvannia",
        isActive: false    
    },
    {
        id: 7,
        title: "Дітям про магію зими ✨",
        href: "/podarunky-do-rizdva",
        isActive: false
    },
    {
        id: 8,
        title: "Новинки лютого ⛄",
        href: "/novynky-ljutoho-2025",
        isActive: false
    },
    {
        id: 9,
        title: "Yakaboo Publishing",
        href: "/yakaboo-publishing",
        isActive: false
    }
]

export const MainCategories = () => {
  return (
    <div className="flex flex-col gap-2">
        <div className="text-left text-blue-800 font-extrabold text-[1.4rem]">
            <h1>Замовляйте книжки - оплачуйте Зимовою єПідтримкою</h1>
        </div>
        <div className="flex flex-row items-center gap-1">
            { CATEGORIES.map((category) => (
                <CategoryButton key={category.id} href={category.href} text={category.title}
                isActive={category.isActive} />
            )) }
        </div>
    </div>
  )
}
