import { StatsItem } from "./StatsItem";

const statsData = [
    {
        endCountNum: 3,
        endCountText: "+",
        text: "Yrs. of Experience"
    },
    {
        endCountNum: 2,
        endCountText: "+",
        text: "Projects Full Stack"
    },
    {
        endCountNum: 3,
        endCountText: "+",
        text: "Scraping"
    },
    {
        endCountNum: 6,
        endCountText: "+",
        text: "API Rest"
    },
]
export function Stats() {
    return (
        <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0" >
            {statsData.map((item, index) => {
                return (<StatsItem
                    endCountNum={item.endCountNum}
                    endCountText={item.endCountText}
                    text={item.text}
                    key={index}
                />)
            })}
        </section >
    )
}