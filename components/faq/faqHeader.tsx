"use client"

import { Input } from "@heroui/input"
import { motion } from "framer-motion"
import { HelpCircle, Search } from "lucide-react"

export default function FAQHeader() {
  return (
    <div className="relative overflow-hidden">
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950" />
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
            backgroundImage: "radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 pb-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
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
              <HelpCircle className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">¿Cómo podemos ayudarte?</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <Input
              type="search"
              placeholder="Busca tu pregunta aquí..."
              className="pl-10 h-12 backdrop-blur-sm"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
