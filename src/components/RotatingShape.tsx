"use client";

import { motion } from "framer-motion";

type RotatingShapeProps = {
    content: React.ReactNode,
    direction: "left" | "rigth",
    duration: number
}

export function RotatingShape({ content, direction, duration }: RotatingShapeProps) {
    const rotationAnimation = {
        animate: {
            rotate: direction == "rigth" ? 360 : direction == "left" ? -360 : 0,
            transition: {
                duration: duration,
                repeat: Infinity,
                ease: "linear"
            }
        }
    }
    return (
        <motion.div variants={rotationAnimation} animate="animate">
            {content}
        </motion.div>
    );
}