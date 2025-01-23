import { motion } from "framer-motion"

const CentralCircle = () => (
    <g>
      <motion.circle
        cx="200"
        cy="200"
        r="40"
        fill="#1E40AF"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      {/* Círculos internos animados */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 360) / 8
        const radius = Math.random() * 20 + 10 // Radio aleatorio entre 10 y 30
        const x = 200 + radius * Math.cos((angle * Math.PI) / 180)
        const y = 200 + radius * Math.sin((angle * Math.PI) / 180)
        const size = Math.random() * 6 + 1 // Tamaño aleatorio entre 4 y 10
  
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={size}
            fill={i % 2 === 0 ? "#818CF8" : "#60A5FA"}
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        )
      })}
    </g>
)

export default CentralCircle;
