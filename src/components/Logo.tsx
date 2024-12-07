
import Link from "next/link";

type LogoProps = {
    light?: boolean
}

export function Logo({ light = false }: LogoProps) {
    const colorClass = light ? "text-white" : "text-primary";
    return (
        <Link href="/" className="font-primary text-2xl tracking-[4px]">
            <span className={colorClass}>Pedro Guilherme</span>
        </Link>
    )
}