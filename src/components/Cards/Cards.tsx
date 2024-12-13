import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { DiScrum } from "react-icons/di";
import { FaDocker, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCelery, SiDjango, SiFastapi, SiMetabase, SiNextdotjs, SiSelenium, } from "react-icons/si";
import { Card } from "./Card";

interface Experience {
    type: "experience";
    company: string;
    logoURL: string;
    position: string;
    duration: string;
    description: string;
}

interface Education {
    type: "education";
    institution: string;
    logoURL: string;
    position: string;
    duration: string;
    description: string;
}

interface Skill {
    type: "skill";
    name: string;
    icon: JSX.Element;
    duration: string;
    description: string;
}

type JourneyItem = Experience | Education | Skill;

const journey: JourneyItem[] = [
    {
        type: "experience",
        company: "EGMA (School for training public servants)",
        logoURL: "/assets/journey/experience/labgov.svg",
        position: "IT intern",
        duration: "May 2021 - Nov 2021",
        description: "Pages and form development with WordPress and automations using Python and Selenium"
    },
    {
        type: "experience",
        company: "BPBL (Library)",
        logoURL: "/assets/journey/experience/bpbl2.svg",
        position: "IT intern",
        duration: "Nov 2021 - Agost 2023",
        description: "Assist employees with the use of book rental software, maintain computers, and manage support for public access computers."
    },
    {
        type: "experience",
        company: "EMSERH (Company and hospital services)",
        logoURL: "/assets/journey/experience/logo-emserh3.svg",
        position: "Junior Developer",
        duration: "Sep 2023 - Present",
        description: `• Requirements gathering, analysis, deadline estimation and task division for projects\n• Backend and frontend development using Django and Django Rest Framework\n• Development of hiring request registration platform\n• Integration of Metabase with internal systems for management metrics\n• Automation of data extraction from external banks\n• Optimization of administrative processes including automated PDF job description generation`
    },
    {
        type: "education",
        institution: "IFMA",
        logoURL: "/assets/journey/education/ifma.svg",
        position: "Bachelor's Information Systems",
        duration: "Agost 2021 - May 2025",
        description: "Bachelor's degree in Information Systems."
    },
    {
        type: "education",
        institution: "Udemy",
        logoURL: "/assets/journey/education/logo-1.svg",
        position: "FastAPI, Docker and TDD",
        duration: "Agost 2023",
        description: "FastAPI, Docker and TDD."
    },
    {
        type: "skill",
        name: "Scrum",
        icon: <DiScrum />,
        duration: "Learned in 2023",
        description: "Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering high value products."
    },
    {
        type: "skill",
        name: "Django and Django Rest Framework",
        icon: <SiDjango />,
        duration: "Learned in 2023",
        description: "Frontend and backend development using Django and Django Rest Framework."
    },
    {
        type: "skill",
        name: "FastAPI",
        icon: <SiFastapi />,
        duration: "Learned in 2023",
        description: "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints."
    },
    {
        type: "skill",
        name: "Celery",
        icon: <SiCelery />,
        duration: "Learned in 2023",
        description: "Celery is an asynchronous task queue/job queue based on distributed message passing."
    },
    {
        type: "skill",
        name: "Selenium",
        icon: <SiSelenium />,
        duration: "Learned in 2023",
        description: "Selenium is a portable framework for testing web applications."
    },
    {
        type: "skill",
        name: "Python",
        icon: <FaPython />,
        duration: "Learned in 2023",
        description: "Python is a high-level, interpreted, interactive and object-oriented scripting language."
    },
    {
        type: "skill",
        name: "Next.js",
        icon: <SiNextdotjs />,
        duration: "Learned in 2023",
        description: "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications."
    },
    {
        type: "skill",
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill />,
        duration: "Learned in 2023",
        description: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs."
    },
    {
        type: "skill",
        name: "Metabase",
        icon: <SiMetabase />,
        duration: "Learned in 2023",
        description: "Metabase is an open-source business intelligence tool that lets you create charts, dashboards, and data visualizations."
    },
    {
        type: "skill",
        name: "Docker",
        icon: <FaDocker />,
        duration: "Learned in 2023",
        description: "I use Docker to simplify development, ensure consistency across environments, and facilitate scalability and dependency management."
    },

];

export function Cards() {
    return (
        <Tabs defaultValue="experience" className="w-full flex flex-col items-center">
            <TabsList className="max-w-max mb-[30px]">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="w-full">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}>
                        {journey.filter((item) => item.type === "experience").map((card, index) => {
                            return <Card key={index} {...card} />;
                        })}
                    </motion.div>
                </AnimatePresence>
            </TabsContent>
            <TabsContent value="education" className="w-full">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {journey.filter((item) => item.type === "education").map((card, index) => {
                            return <Card key={index} {...card} />;
                        })}
                    </motion.div>
                </AnimatePresence>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}>
                        {journey.filter((item) => item.type === "skill").map((card, index) => {
                            return <Card key={index} {...card} />;
                        })}
                    </motion.div>
                </AnimatePresence>
            </TabsContent>
        </Tabs>
    );
}