import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"


const socials = [
    { icon: <RiInstagramFill />, path: "https://www.instagram.com/" },
    { icon: <FaGithub />, path: "https://github.com/PedroGuilhermeSilv" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/pedro-guilherme-silva-moura-53519019b" },
]
type SocialsProps = {
    containerStyles: string,
    iconStyles: string,
}

export function Socials({ containerStyles, iconStyles }: SocialsProps) {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link key={index} href={social.path} className={iconStyles}>
                        <span>
                            {social.icon}

                        </span>
                    </Link>
                )
            })}
        </div>
    )
}