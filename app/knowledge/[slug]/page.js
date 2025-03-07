"use client"
import { KnowledgeContainer } from '@/app/components/additional'
import { usePathname } from 'next/navigation'


export default function KnowledgePage() {

    const router = usePathname()

    const knowledgeSlug = router.split('/')[2]

    return(
        <div className="flex flex-col gap-2">
            <div className="bg-gray-100 px-[6.5%] -mt-2">
                { console.log(knowledgeSlug) }
                <KnowledgeContainer knowledgeSlug={knowledgeSlug} />
            </div>
        </div>
    )
}