import { PromoCategoriesSidebar, Promos } from '.'

export const PromoMainContainer = () => {

  return (
    <div className="w-full flex flex-col gap-5 mt-5 h-auto">
        <h1 className="text-[1.5rem] font-extrabold">
            Акції та знижки
        </h1>
        <div className="w-full flex flex-row gap-5">
            <PromoCategoriesSidebar />
            <Promos />
        </div>
    </div>
  )
}
