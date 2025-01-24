"use client"

import { useState } from "react"
import { Button } from "@heroui/button"
import { Card, CardBody, CardHeader } from "@heroui/card"
import { motion } from "framer-motion"
import { MessageCircle, Phone, Video, FileText } from "lucide-react"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal"

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Chat en vivo",
    description: "Chatea con nuestro equipo de soporte en tiempo real.",
    action: "Enviar mensaje por WhatsApp",
    actionHandler: () => window.open('https://wa.me/51934934324', '_blank')
  },
  {
    icon: Phone,
    title: "Llamada telefónica",
    description: "Habla directamente con uno de nuestros agentes.",
    action: "Llamar ahora",
    actionHandler: () => window.location.href = 'tel:+51934934324'
  },
  {
    icon: Video,
    title: "Videollamada",
    description: "Conéctate con nuestro equipo por videollamada.",
    action: "Iniciar videollamada",
    actionHandler: () => window.location.href = 'tel:+51934934324'
  },
  {
    icon: FileText,
    title: "Base de conocimiento",
    description: "Encuentra respuestas a preguntas frecuentes.",
    action: "Ver más",
    actionHandler: null // Se manejará en el componente
  }
]

const SupportOptions = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const handleActionClick = (actionHandler: (() => Window | null) | (() => string) | null) => {
    if (actionHandler) {
      actionHandler()
    } else {
      onOpen()
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {supportOptions.map((option, index) => (
        <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card>
            <CardHeader className="flex gap-3">
              <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                <option.icon className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <p className="text-md font-semibold">{option.title}</p>
                <p className="text-small text-default-500">{option.description}</p>
              </div>
            </CardHeader>
            <CardBody>
              <Button color="primary" variant="flat" fullWidth onClick={() => handleActionClick(option.actionHandler)}>
                {option.action}
              </Button>
            </CardBody>
          </Card>
        </motion.div>
      ))}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Base de conocimiento</ModalHeader>
              <ModalBody>
                Esta opción está en desarrollo.
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default SupportOptions;
