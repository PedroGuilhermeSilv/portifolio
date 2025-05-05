import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedText } from "./AnimatedText";

export function About() {
    return (
        <section className="relative pt-12 pb-24" id="about">
            <div className="container mx-auto h-full">
                <div className="h-full flex items-center justify-center">
                    {/* image + shapes */}
                    <div className="hidden xl:flex flex-1 pl-8">
                        <div className="relative w-full max-w-[380px]">
                            {/* sha´pe */}
                            <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
                            {/* shape */}
                            <div className=" rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[400px] flex items-end justify-center">
                                <Image
                                    src="/assets/hero/file.png"
                                    width={350}
                                    height={478}
                                    alt="dev" />
                            </div>
                            {/* rotating shape*/}
                            <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                                <motion.div
                                    animate={
                                        { rotate: [0, 360] }
                                    } transition={{
                                        duration: 10,
                                        ease: "linear",
                                        repeat: Infinity
                                    }}
                                >
                                    <Image
                                        src={"/assets/about/shape-1.svg"}
                                        width={160}
                                        height={160}
                                        alt="shape" />
                                </motion.div>
                                <div className="absolute text-center text-white">
                                    <div className="text-5xl font-bold leading-none">
                                        3+
                                    </div>
                                    <div className="leading-none text-center ">
                                        Years of <br /> Experience
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*text */}
                    <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
                        <div>
                            <AnimatedText text="My Name is Guilherme" textStyles="h2 mb-2" />
                            <p className="text-lg"> Backend Developer </p>
                        </div>
                        <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
                            Designing scalable systems in Python, focusing on effective modeling, clean architecture, and continuous delivery.
                        </p>
                        {/* Infor items*/}
                        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center whitespace-nowrap">
                            {/* item 1*/}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-primary">Age</div>
                                <p>23 Years</p>
                            </div>
                            {/* item 2*/}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-primary ">Born</div>
                                <p>Brazil</p>
                            </div>
                            {/* item 3*/}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-primary">Phone</div>
                                <p>+55 98 98260-3775</p>
                            </div>
                            {/* item 4*/}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-primary">Email</div>
                                <p>pedromoura8970@hotmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}