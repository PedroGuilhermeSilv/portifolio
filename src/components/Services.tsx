import Image from "next/image"
const services = [
    {
        icon: "assets/services/icon-1.svg",
        title: "ETL",
        description: "Creating a data pipeline to extract, transform and load data"
    },
    {
        icon: "assets/services/icon-2.svg",
        title: "Web Development",
        description: "Developing a website that is responsive and user-friendly"
    },
    {
        icon: "assets/services/icon-3.svg",
        title: "APIs",
        description: "Building APIs to connect your application to other services"
    },
    {
        icon: "assets/services/icon-4.svg",
        title: "Scraping",
        description: "Extracting data from websites and transforming it into a usable format"
    }
]

export function Services() {
    return (
        <section className="z-40 relative" id="services">
            <div className="container mx-auto">
                <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
                    {services.map((service, index) => {
                        return (
                            <li key={index} className=" bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg">
                                <Image src={service.icon}
                                    width={48}
                                    height={48}
                                    alt="service"
                                    className="mb-4" />
                                <h3 className="text-[20px] text-primary font-semibold mb-3">{service.title}</h3>
                                <p className="text-[15px] ">{service.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}