
import { AnimatedText } from "./AnimatedText"
import { Cards } from "./Cards/Cards"
export function Journey() {
    return (
        <section className="" id="journey">
            <div className="container max-auto">
                <AnimatedText text="My Professional Journey" textStyles="h2 mb-[30px] text-center" />
                <Cards />
            </div>
        </section>
    )
}