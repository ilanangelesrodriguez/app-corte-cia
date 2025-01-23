import { motion } from "framer-motion"
import CentralCircle from "./centralCircle"
import DottedLine from "./dottedLine"
import OrbitingDots from "./orbitingDots"

const DotsAnimation = () => (
    <svg
        className="right-0 w-[500px] h-[400px] max-w-[90vw] md:h-[600px]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Espiral de puntos exterior */}
        <OrbitingDots count={24} radius={150} duration={3} />
        <OrbitingDots count={16} radius={120} duration={4} dotSize={2.5} color="#60A5FA" />
        <OrbitingDots count={12} radius={90} duration={5} dotSize={2} color="#818CF8" />
    
        {/* Líneas punteadas que se extienden */}
        <DottedLine rotation={0} color="#3B82F6" delay={0} />
        <DottedLine rotation={72} color="#818CF8" delay={0.5} />
        <DottedLine rotation={144} color="#60A5FA" delay={1} />
        <DottedLine rotation={216} color="#E879F9" delay={1.5} />
        <DottedLine rotation={288} color="#34D399" delay={2} />
    
        {/* Círculo central con elementos internos */}
        <CentralCircle />
    
        {/* Puntos flotantes adicionales */}
        {[...Array(10)].map((_, i) => {
            const angle = Math.random() * 360
            const radius = Math.random() * 100 + 100
            const x = 200 + radius * Math.cos((angle * Math.PI) / 180)
            const y = 200 + radius * Math.sin((angle * Math.PI) / 180)
    
            return (
                <motion.circle
                    key={`float-${i}`}
                    cx={x}
                    cy={y}
                    r={Math.random() * 3 + 1}
                    fill="#60A5FA"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: Math.random() * 2 + 2,
                        delay: Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                    }}
                />
            )
        })}
    </svg>
)

export default DotsAnimation;
