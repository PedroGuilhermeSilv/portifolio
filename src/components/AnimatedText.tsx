import { motion } from "framer-motion";

const letterAnimation = {
    initial: {
        y: "100%",
        opacity: 0
    },
    animate: (i: string) => ({
        y: 0,
        opacity: 1,
        transation: { duration: 1, ease: [0.2, 0, 0.1, 1], delay: i[0] }
    })
}

const getLetter = (name: string) => {
    const letters: JSX.Element[] = [];
    name.split("").forEach((letter, index) => {
        return letters.push(
            <motion.span
                variants={letterAnimation}
                initial="initial"
                whileInView="animate"
                custom={[index * 0.02, (name.length - index) * 0.01]}
                key={index}
            >
                {letter}
            </motion.span>
        )
    });
    return letters;
}

type AnimatedTextProps = {
    textStyles: string;
    text: string;
}

export function AnimatedText({ textStyles, text }: AnimatedTextProps) {
    return (
        <div className={`${textStyles}`}>
            {getLetter(text)}
        </div>
    )
}