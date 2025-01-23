"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Calendar, Users, Mic, MapPin, ArrowRight } from "lucide-react"
import NextLink from "next/link"
import { Button } from "@heroui/button"
import { FeatureCard } from "@/components/cards/featureCard"

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center py-12 relative overflow-hidden ">

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 z-20"
      >
        <motion.h1
          className="font-bold mb-4 text-sky-950 dark:text-blue-200 md:text-6xl text-4xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          Corte & Cía
        </motion.h1>
        <motion.h2
          className="md:text-3xl text-2xl mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Revoluciona la Gestión de tus Eventos
        </motion.h2>
        <motion.p
          className="text-lg text-sky-950 dark:text-blue-200 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Descubre una nueva era en la organización de eventos. Transformamos la complejidad en
          simplicidad, permitiéndote crear experiencias inolvidables.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="z-20"
      >
        <Button
          as={NextLink}
          href="/login"
          variant="flat"
          color="success"
          size="lg"
          className="px-8 py-4 text-lg font-semibold transition-all duration-300 flex items-center"
        >
          <ArrowRight className="w-6 h-6 mr-2" />
          Comienza tu Viaje Ahora
        </Button>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 mx-8 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <FeatureCard
          icon={<Calendar className="w-10 h-10 text-blue-500" />}
          title="Gestión de Eventos"
          description="Organiza y administra tus eventos con facilidad. "
        />
        <FeatureCard
          icon={<Users className="w-10 h-10 text-purple-500" />}
          title="Administración de Asistentes"
          description="Controla la asistencia y gestiona participantes"
        />
        <FeatureCard
          icon={<Mic className="w-10 h-10 text-yellow-500" />}
          title="Ponentes y Patrocinadores"
          description="Coordina speakers y sponsors eficientemente."
        />
        <FeatureCard
          icon={<MapPin className="w-10 h-10 text-red-500" />}
          title="Ubicaciones"
          description="Gestiona múltiples locaciones para tus eventos."
        />
      </motion.div>
    </div>
  )
}

export default HeroSection
