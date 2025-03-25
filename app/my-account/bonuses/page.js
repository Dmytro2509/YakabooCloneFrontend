export default function BonusesPage() {
    return(
        <div className="bg-gray-100 px-[6.5%] -mt-5 pb-10 flex h-[50vh] flex-col gap-[20px] pt-[2%]">
            <div className="flex flex-col gap-[7px] text-left">
                <h1 className="text-2xl font-bold">
                    Бонуси
                </h1>
                <p className="font-bold text-lg">
                    Накопичувальний бонусний рахунок містить: 0 
                </p>    
                <p className="font-bold text-lg">
                    Акційний бонусний рахунок містить: 0 
                </p>            
            </div>

            <div className="flex flex-col gap-[12px]">
                <div className="bg-white w-full rounded-sm grid grid-cols-[15%_25%_15%_15%_15%_15%] text-[#78818d] text-[1rem] font-extrabold 
                py-[1%] px-[2%] gap-[0.5rem]">
                    <div className="text-left">
                        Баланс
                    </div>
                    <div className="text-left">
                        Нараховано / Списано
                    </div>
                    <div className="text-left">
                        Спливає
                    </div>
                    <div className="text-left">
                        Коментар
                    </div>
                    <div className="text-left">
                        Створено
                    </div>
                    <div className="text-left">
                        Тип
                    </div>
                </div>
                <div className="bg-white w-full rounded-sm text-[#78818d] text-[1rem] font-semibold 
                py-[0.5%] px-[2%] text-center justify-center">
                    Дані відсутні
                </div>    
            </div>
            
        </div>
    )
}