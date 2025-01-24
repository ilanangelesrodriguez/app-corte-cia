"use client"

import { motion } from "framer-motion"
import { LifeBuoy } from "lucide-react"

export default function SupportHeader() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />
      </motion.div>

    <div className="container mx-auto px-4 py-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center mb-3">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <LifeBuoy className="w-16 h-16" />
            </motion.div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Estamos aquí para ayudarte</h1>
          <p className="text-sm md:text-lg mb-2 text-blue-100">
            Nuestro equipo de soporte está listo para asistirte en cualquier momento. Elige la opción que mejor se
            adapte a tus necesidades.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
