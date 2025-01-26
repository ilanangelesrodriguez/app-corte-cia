"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Users } from "lucide-react"
import {Image} from "@heroui/image";
import EventDetails from "@/components/events/eventsDetails"
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";

interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  image: string
  attendees: number
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("https://api-corte-cia.vercel.app/v1/api/events")
        const data = await response.json()
        setEvents(data)
      } catch (error) {
        console.error("Error fetching events:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])
  useEffect(() => {
    // Example static data
    const exampleEvents: Event[] = [
      {
        id: "1",
        title: "Concierto de Rock",
        description: "Un emocionante concierto con bandas locales.",
        date: "2023-11-15",
        location: "Auditorio Nacional",
        image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",
        attendees: 150,
      },
      {
        id: "2",
        title: "Feria de Tecnología",
        description: "Explora las últimas innovaciones en tecnología.",
        date: "2023-12-01",
        location: "Centro de Convenciones",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
        attendees: 300,
      },
      {
        id: "3",
        title: "Festival de Comida",
        description: "Disfruta de una variedad de comidas.",
        date: "2023-12-20",
        location: "Parque Central",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        attendees: 500,
      },
    ]

    setEvents(exampleEvents)
    setLoading(false)
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"
        />
      </div>
    )
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
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
              </CardBody>
              <CardFooter className="flex flex-col items-start">
                <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4 text-left">{event.description.substring(0, 100)}...</p>
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="mr-2" size={16} />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-500 mb-2">
                  <MapPin className="mr-2" size={16} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Users className="mr-2" size={16} />
                  <span>{event.attendees} asistentes</span>
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

