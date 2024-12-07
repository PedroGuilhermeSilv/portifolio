"use client";

import { Link as ScrollLink } from "react-scroll";

const links = [
    { name: "home" },
    { name: "about" },
    { name: "journey" },
    { name: "work" },
    { name: "contact" },
]
type NavProps = {
    containerStyles: string,
    listStyles: string,
    linkStyles: string,
    spy: boolean,
}

export function Nav({ containerStyles, listStyles, linkStyles, spy }: NavProps) {
    return (
        <nav className={containerStyles}>
            <ul className={listStyles}>
                {links.map((link, index) => {
                    return (
                        <ScrollLink
                            spy={spy}
                            key={index}
                            activeClass="active"
                            to={link.name}
                            smooth
                            className={linkStyles} >
                            {link.name}
                        </ScrollLink>)
                })}
            </ul>
        </nav>
    )
}