"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Users } from "lucide-react"
import {Image} from "@heroui/image";
import EventDetails from "@/components/events/eventsDetails"
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Event } from "@/models/event.model";
import { getEvents } from "@/services/event.service";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getEvents()
        setEvents(events)
      } catch (error) {
        console.error("Error fetching events:", error)
      }
    }

    fetchEvents()
  }, [])

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }



  if (events.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center h-screen"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mb-8"
        >
          <Calendar size={100} className="text-blue-500" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4">No hay eventos disponibles</h1>
        <p className="text-xl mb-8">¡Vuelve pronto para ver nuevos eventos emocionantes!</p>
        <Button color="secondary" size="lg" className="font-semibold" onClick={() => window.location.reload()}>
          Refrescar página
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Próximos Eventos
      </motion.h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {events.map((event) => (
          <motion.div key={event.id} variants={itemVariants}>
            <Card
              isPressable
              onPress={() => setSelectedEvent(event)}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardBody className="p-0">
                <Image
                  src={event.image || "/placeholder.svg?height=200&width=350"}
                  alt={event.name}
                  className="w-full h-48 object-cover"
                />
              </CardBody>
              <CardFooter className="flex flex-col items-start">
                <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
                <p className="text-gray-600 mb-4 text-left">{event.description.substring(0, 100)}...</p>
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="mr-2" size={16} />
                  <span>{new Date(event.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-500 mb-2">
                  <MapPin className="mr-2" size={16} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Users className="mr-2" size={16} />
                  <span>{event.status} asistentes</span>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      {selectedEvent && <EventDetails event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  )
}

