"use client"

import { usePathname } from "next/navigation";
import { AllAuthorBooks, Filters, OnePromotionContainer } from "@/app/components";

export default function PromoPage() {

    const pathname = usePathname()
    const promoSlug = pathname.split("/")[2]

    return(
        <div className="bg-gray-100 px-[6.5%] -mt-5 flex flex-col gap-5">
            <OnePromotionContainer promoSlug={promoSlug} />
            <div className="flex flex-row gap-5">
                <Filters />
                <AllAuthorBooks />
            </div>
        </div>
    )
}