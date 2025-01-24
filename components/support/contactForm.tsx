"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Input, Textarea } from "@heroui/input"
import { Button } from "@heroui/button"
import {Select, SelectItem} from "@heroui/select";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert("Formulario enviado con éxito!")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label="Nombre" placeholder="Tu nombre" required />
        <Input label="Correo electrónico" type="email" placeholder="tu@email.com" required />
        <Select label="Asunto" placeholder="Selecciona un asunto" required>
          <SelectItem value="general">Consulta general</SelectItem>
          <SelectItem value="technical">Soporte técnico</SelectItem>
          <SelectItem value="billing">Facturación</SelectItem>
          <SelectItem value="other">Otro</SelectItem>
        </Select>
        <Textarea label="Mensaje" placeholder="Escribe tu mensaje aquí" required />
        <Button type="submit" color="primary" isLoading={isSubmitting} endContent={<Send className="h-4 w-4" />}>
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </motion.div>
  )
}


