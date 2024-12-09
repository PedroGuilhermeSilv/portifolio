import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { AnimatedText } from "../AnimatedText"
import { WorkItem } from "./WorkItem"


const data = [
    {
        href: "https://clone-airbnb-git-main-pedroguilhermesilvs-projects.vercel.app/",
        category: "fullstack",
        img: "/assets/work/airbnb.png",
        title: "Clone airbnb",
    },
    {
        href: "https://api-crm-git-main-pedroguilhermesilvs-projects.vercel.app/api/docs",
        category: "backend",
        img: "/assets/work/api-django-ninja.png",
        title: "API Auth Django Ninja",
    },
    {
        href: "https://architecture-hexagonal-git-main-pedroguilhermesilvs-projects.vercel.app/swagger/",
        category: "backend",
        img: "/assets/work/api-hex.png",
        title: "API Game Rental",
    },
    

]

export function Work() {
    // extract uniqye categories from data
    const uniqueCategories = Array.from(new Set(data.map(item => item.category)))


    // create tab data with "all" category and unique categories from data
    const tabData = [{ category: "all" }, ...uniqueCategories.map(category => ({ category }))]

    const [tabValue, setTabValue] = useState("all")
    const [visibleItem, setVisibleItem] = useState(6)

    // filter work item based on the selected tab value 
    const filterWork = tabValue === "all" ? data.filter((item) => item.category !== "all") : data.filter((item) => item.category === tabValue)

    const loadMoreItems = () => {
        // adjust the number to control how many items are loadded at a time
        setVisibleItem((prevValue) => prevValue + 2)
    }

    return (
        <section className="pt-24 min-h-[700px]" id="work">
            <div className="container mx-auto">
                <Tabs defaultValue="all" className="w-full flex flex-col">

                    <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mv-[30px]">
                        <AnimatedText text="My Latest Prroject"
                            textStyles="h2 mb-[30px] xl:mb-0"
                        />
                        {/* render the triggers */}
                        <TabsList className="max-w-max h-full mb-[30px]  flex flex-col md:flex-row gap-4 md:gap-0">
                            {tabData.map((item, index) => {
                                return (
                                    <TabsTrigger
                                        value={item.category}
                                        key={index}
                                        className="capitalize w-[120px]"
                                        onClick={() => setTabValue(item.category)}>

                                        {item.category}
                                    </TabsTrigger>
                                )
                            })}
                        </TabsList>
                    </div>
                    {/* render content for the selected tab */}
                    <TabsContent value={tabValue} className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                            <AnimatePresence>
                                {filterWork.slice(0, visibleItem).map((item, index) => (
                                    <motion.div key={index} initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:0.3}}>
                                        <WorkItem  {...item} />
                                    </motion.div>
                                )
                                )}
                            </AnimatePresence>
                        </div>
                        {/* load more button */}
                        {visibleItem < filterWork.length && (
                            <div className="flex justify-center mt-12">
                                <button onClick={loadMoreItems} className="btn bg-accent">
                                    Load More
                                </button>
                            </div> )}
                    </TabsContent>
                </Tabs>

            </div>
        </section>
    )
}