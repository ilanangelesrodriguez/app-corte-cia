"use client"

import { motion } from "framer-motion"
import FeatureItem from "./featureItem"
import DotsAnimation from "./dotsAnimation"

export default function FeaturesSection() {
  return (
    <div className="max-w-7xl relative flex flex-col md:flex-row items-center py-5 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-5xl relative z-10 pl-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-gray-600 dark:text-gray-400">Desde 2020</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            ¿Qué Hace Nuestros <span className="text-blue-600">Eventos</span>{" "}
            <span className="text-blue-400">Únicos</span> y <span className="text-blue-600">Memorables</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-12"
          >
            De acuerdo a las necesidades de nuestros clientes y las diferentes escalas de eventos, hemos desarrollado
            una plataforma que puede ser la respuesta a todas tus necesidades.
          </motion.p>

          <div className="space-y-4">
            <FeatureItem number={1} text="Personalización Completa de Eventos" />
            <FeatureItem number={2} text="Gestión Integral de Asistentes" />
            <FeatureItem number={3} text="Sistema de Registro Automatizado" />
            <FeatureItem number={4} text="Análisis en Tiempo Real" />
            <FeatureItem number={5} text="Soporte 24/7 Multicanal" />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=""
      >
        <DotsAnimation />
      </motion.div>
    </div>
  )
}

