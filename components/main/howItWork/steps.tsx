import { motion } from "framer-motion"
import { Users, Music, Ticket, Megaphone } from "lucide-react"

interface Step {
    title: string
    description: string
    icon: JSX.Element
    illustration: JSX.Element
}

const steps: Step[] = [
    {
        title: "Organizadores de Eventos",
        description:
            "Configura fechas, lugares, artistas y precios. Obtén análisis en tiempo real y gestiona tu evento desde un solo lugar.",
        icon: <Users className="w-6 h-6" />,
        illustration: (
            <motion.div className="grid grid-cols-3 gap-2 w-36 h-24 md:w-48 md:h-36 mx-auto">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="bg-blue-700/40 rounded-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                    />
                ))}
            </motion.div>
        ),
    },
    {
        title: "Artistas y Talentos",
        description:
            "Conecta con organizadores y mantén tu calendario actualizado con todos tus compromisos.",
        icon: <Music className="w-6 h-6" />,
        illustration: (
            <motion.div className="relative w-48 h-36 mx-auto">
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-4 h-4 bg-purple-700/40 rounded-full"
                            style={{
                                top: "45%",
                                left: "48%",
                                transform: `rotate(${i * 45}deg) translate(60px) rotate(-${i * 45}deg)`,
                            }}
                        />
                    ))}
                </motion.div>
                <motion.div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-purple-700/40 rounded-full" />
                </motion.div>
            </motion.div>
        ),
    },
    {
        title: "Patrocinadores",
        description:
            "Gestiona patrocinios, visualiza métricas de impacto y coordina tu presencia en múltiples eventos.",
        icon: <Megaphone className="w-6 h-6" />,
        illustration: (
            <motion.div className="w-20 h-20 md:w-36 md:h-36 mx-auto grid grid-cols-2 gap-2">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="bg-yellow-500/60 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.2 }}
                    />
                ))}
            </motion.div>
        ),
    },
    {
        title: "Asistentes",
        description:
            "Compra entradas, descubre eventos, guarda tus favoritos y recibe recomendaciones personalizadas.",
        icon: <Ticket className="w-6 h-6" />,
        illustration: (
            <motion.div className="relative w-36 h-24 md:w-48 md:h-36 mx-auto">
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [1, 0.8, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                    <div className="w-full h-full bg-green-500/20 rounded-lg" />
                </motion.div>
                <motion.div className="absolute inset-4">
                    <div className="w-full h-full bg-green-700/60 rounded-lg" />
                </motion.div>
            </motion.div>
        ),
    },
]

export default steps;
