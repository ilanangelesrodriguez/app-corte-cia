"use client"

import { Button } from "@heroui/button"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal"
import {Image} from "@heroui/image";
import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { Event } from "@/models/event.model";

interface EventDetailsProps {
  event: Event
  onClose: () => void
}

export default function EventDetails({ event, onClose }: EventDetailsProps) {
  return (
    <Modal isOpen={true} onClose={onClose} size="2xl" scrollBehavior="inside">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold">
            {event.name}
          </motion.h2>
        </ModalHeader>
        <ModalBody>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={event.image || "/placeholder.svg?height=300&width=600"}
              alt={event.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 text-start mb-4">{event.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-gray-600">
                <Calendar className="mr-2" size={20} />
                <span>{new Date(event.startDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="mr-2" size={20} />
                <span>{new Date(event.startDate).toLocaleTimeString()}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="mr-2" size={20} />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="mr-2" size={20} />
                <span>{event.status} asistentes</span>
              </div>
            </div>
          </motion.div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Cerrar
          </Button>
          <Button color="primary" onPress={() => alert("Registro no implementado")}>
            Registrarse
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
