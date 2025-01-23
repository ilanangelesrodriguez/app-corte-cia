import { motion } from "framer-motion";

interface DottedLineProps {
    rotation: number;
    color?: string;
    delay?: number;
}

const DottedLine = ({
    rotation,
    color = "#3B82F6",
    delay = 0,
}: DottedLineProps) => (
    <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
        transform={`rotate(${rotation} 200 200)`}
    >
        {[...Array(5)].map((_, i) => (
            <motion.circle
                key={i}
                cx={280 + i * 15}
                cy="200"
                r={i === 4 ? 4 : 2}
                fill={color}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1,
                }}
            />
        ))}
    </motion.g>
);

export default DottedLine;
