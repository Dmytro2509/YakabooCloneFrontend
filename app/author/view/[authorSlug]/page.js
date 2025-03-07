import { AuthorBySlugContainer } from "@/app/components";

export default function AuthorPage({ authorSlug }){
    return (
        <div className="flex flex-col gap-3">
            <AuthorBySlugContainer />
        </div>
    )
}