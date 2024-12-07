import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import { Nav } from "./Nav";
import { Socials } from "./Socials";



export function FixedMenu() {
    const [showMenuButton, setShowMenuButton] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const isMobile = useMediaQuery({ query: "(max-width: 748px)" });

    useEffect(() => {
        setIsMounted(true);
    }, [])

    useEffect(() => {
        if (isMounted) {
            const handleScroll = () => {
                setShowMenuButton(window.scrollY > 150);
            };
            if (!isMobile) {
                window.addEventListener("scroll", handleScroll);
                return () => window.removeEventListener("scroll", handleScroll);
            } else {
                setShowMenuButton(true);
            }
        }
    }, [isMobile, isMounted])

    if (!isMounted) return null;
    return (
        <div className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent">
            {/* menu */}
            <AnimatePresence>

                {showMenuButton && showMenu && (
                    <motion.div className="relative w-full max-w-md md:max-w-none h-[400px] bottom-[28rem] xl:bottom-[21.2rem] px-4 pointer-events-auto">
                        <div className="bg-white w-full h-full shadow-custom max-w-[1170px] mx-auto py-12 xl:py-12 px-12 xl:px-32 flex items-center gap-12 rounded-lg ">
                            <Nav
                                containerStyles="md:border-r border-secondary/20 md:pr-12 w-full md:w-auto text-center md:text-left"
                                listStyles="flex flex-col justify-center gap-4"
                                linkStyles="font-primary text-4xl text-primary cursor-pointer"
                                spy={true} />

                            <div className="hidden md:flex mx-auto ">
                                <div >
                                    <div className="flex gap-12 mb-12">
                                        {/* location */}
                                        <div className="flex flex-col">
                                            <div className="text-[28px] text-accent mb-2">
                                                <FiMapPin />
                                            </div>
                                            <p className="text-primary text-lg font-semibold">Location</p>
                                            <p>Maranhão, BR</p>
                                        </div>
                                        {/* phone */}
                                        <div className="flex flex-col">
                                            <div className="text-[28px] text-accent mb-2">
                                                <FiPhoneCall />
                                            </div>
                                            <p className="text-primary text-lg font-semibold">Phone</p>
                                            <p>+55 (98) 982603775</p>
                                        </div>
                                        {/* email */}
                                        <div className="flex flex-col">
                                            <div className="text-[28px] text-accent mb-2">
                                                <FiMail />
                                            </div>
                                            <p className="text-primary text-lg font-semibold">Email</p>
                                            <p>pedromoura8970@hotmail.com</p>
                                        </div>


                                    </div>
                                    {/* socials */}
                                    <Socials
                                        containerStyles="flex gap-2"
                                        iconStyles="text-[20px] w-[32px] h-[32px] text-primary flex itens-center justify-center rounded-full" />
                                </div>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* menu button */}
            {/* render button without animations on mobile */}
            {isMobile ? (
                <div className="fixed z-50 bottom-16">
                    <button onClick={() => setShowMenu(!showMenu)} className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none pointer-events-auto ">
                        <CgMenuGridR className="text-4xl text-white" />
                    </button>
                </div>) : (
                <AnimatePresence>
                    {showMenuButton && (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ type: "spring", stiffness: 400, damping: 40 }}
                            className=" fixed z-50 bottom-16 pointer-events-auto"
                        >
                            <button onClick={() => setShowMenu(!showMenu)} className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none">
                                <CgMenuGridR className="text-4xl text-white" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}

        </div>
    )
}