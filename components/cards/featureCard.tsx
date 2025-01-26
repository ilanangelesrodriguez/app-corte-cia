import { motion } from "framer-motion"
import { FeatureCardProps } from "./featureCard.props"

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <motion.div
        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-sm"
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
        <motion.div
            className="flex items-center mb-4 justify-center gap-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            {icon}
            <h3 className="text-lg md:text-xl text-left font-semibold text-gray-800 dark:text-white">{title}</h3>
        </motion.div>
        <motion.p
            className="text-gray-600 dark:text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
        >
            {description}
        </motion.p>
    </motion.div>
)
