"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Cómo puedo crear un evento en la plataforma?",
    answer:
      "Para crear un evento, inicia sesión en tu cuenta de organizador y haz clic en el botón 'Crear Evento'. Sigue el asistente paso a paso para configurar los detalles del evento, como fecha, ubicación, capacidad y precios de las entradas.",
    category: "Eventos",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos múltiples métodos de pago, incluyendo tarjetas de crédito/débito (Visa, Mastercard, American Express), PayPal, y transferencias bancarias para ciertos tipos de eventos.",
    category: "Pagos",
  },
  {
    question: "¿Cómo puedo gestionar los asistentes a mi evento?",
    answer:
      "La plataforma ofrece un panel de control completo donde puedes ver la lista de asistentes, enviar comunicaciones masivas, gestionar check-ins y generar reportes de asistencia en tiempo real.",
    category: "Usuarios",
  },
  {
    question: "¿Qué pasa si necesito cancelar o reprogramar mi evento?",
    answer:
      "Puedes modificar o cancelar tu evento desde el panel de administración. El sistema notificará automáticamente a todos los asistentes registrados y gestionará los reembolsos según la política de cancelación establecida.",
    category: "Eventos",
  },
  {
    question: "¿Cómo funciona el sistema de patrocinios?",
    answer:
      "Los patrocinadores pueden crear un perfil empresarial, explorar eventos relevantes y enviar propuestas de patrocinio. Los organizadores pueden revisar estas propuestas y gestionar la visibilidad de los patrocinadores en el evento.",
    category: "Plataforma",
  },
]

interface FAQAccordionProps {
  searchQuery: string;
  selectedCategory?: string;
}

export default function FAQAccordion({ searchQuery, selectedCategory }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory ? faq.category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900 rounded-lg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
