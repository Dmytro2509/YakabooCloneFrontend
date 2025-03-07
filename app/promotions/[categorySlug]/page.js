"use client"

import { PromotionsBySlugContainer } from "@/app/components";
import { usePathname } from "next/navigation";

export default function PromotionsBySlug() {

    const router = usePathname();
    const categorySlug = router.split("/")[2]

    return(
        <div className="bg-gray-100 px-[6.5%] -mt-5">
            <PromotionsBySlugContainer categorySlug={categorySlug} />
        </div>
    )
}