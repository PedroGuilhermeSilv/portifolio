
import Image from "next/image";
type CardProps = {
    type: "experience" | "education" | "skill";
    company?: string;
    logoURL?: string;
    position?: string;
    duration?: string;
    institution?: string;
    description?: string;
    qualification?: string;
    name?: string;
    icon?: JSX.Element;
};

export function Card({ type, company, logoURL, position, duration, description, institution, name, qualification, icon }: CardProps) {
    return (
        <div className=" w-full h-[380px] overflow-hidden flex items-center sticky top-12">
            <div className="w-full h-[360px] border border-accent/80 bg-[#f4ffff] rounded-[8px]">
                <div className="flex flex-col h-full">
                    <div className="h-[80px] xl:h-[60px] bg-white flex flex-col md:flex-row justify-center 
                    md:justify-between items-center px-6  rounded-tl-[8px] rounded-tr-[8px]">
                        <div className="flex gap-2 ">
                            <Image src="assets/journey/shape.svg" width={16} height={16} alt="logo" />
                            <h3 className="text-lg font-semibold text-primary">
                                {type === "experience"
                                    ? position
                                    : type === "education"
                                        ? qualification
                                        : duration}
                            </h3>
                        </div>
                        <p className="text-base">
                            {type !== "experience" && type !== "education" ? null : duration}
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center xl:justify-start md:py-8 md:px-16">
                        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4 text-center xl:text-left  xl:gap-10 px-4 xl:px-0">
                            {type === "skill" ? (
                                <div className="w-max xl:w-[300px] h-full relative flex items-center justify-center">
                                    <div className="text-5xl text-primary/90">{icon}</div>
                                </div>
                            ) :
                                (
                                    <div className="relative w-[350px] h-[98px] xl:h-[98px]">
                                        <Image src={logoURL!} fill alt="logo" />
                                    </div>
                                )}
                            <div className="xl:border-l xl:border-secondary/10 xl:pl-12 w-full ">
                                <h3 className="hidden xl:flex h3 mb-1 xl:mb-2">
                                    {
                                        type === "experience" ? company
                                            : type === "education" ? institution
                                                : type === "skill" ? name
                                                    : null
                                    }
                                </h3>
                                <p className=" text-base max-w-[700px]"> {description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}