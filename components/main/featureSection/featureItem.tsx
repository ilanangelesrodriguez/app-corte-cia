import { motion } from "framer-motion";

const FeatureItem = ({ number, text }: { number: number; text: string }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      className="flex items-center gap-4 mb-6"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-400 text-white font-semibold">
        {number}
      </div>
      <span className="text-lg text-gray-800 dark:text-gray-200">{text}</span>
    </motion.div>
  )

export default FeatureItem;
