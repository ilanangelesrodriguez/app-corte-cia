import { motion } from "framer-motion"

interface OrbitingDotsProps {
    count: number;
    radius: number;
    duration: number;
    dotSize?: number;
    color?: string;
}

const OrbitingDots = ({
    count,
    radius,
    duration,
    dotSize = 3,
    color = "#3B82F6",
}: OrbitingDotsProps) => (
    <>
        {[...Array(count)].map((_, i) => {
            const angle = (i * 360) / count;
            const delay = (i / count) * duration;

            return (
                <motion.circle
                    key={i}
                    cx={200 + radius * Math.cos((angle * Math.PI) / 180)}
                    cy={200 + radius * Math.sin((angle * Math.PI) / 180)}
                    r={dotSize}
                    fill={color}
                    initial={{ opacity: 0.2 }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: duration,
                        delay: delay,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    }}
                />
            );
        })}
    </>
);

export default OrbitingDots;
