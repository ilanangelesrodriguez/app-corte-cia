"use client"

import type React from "react"
import { useState } from "react"
import { createEvent } from "@/services/event.service"
import { EventType } from "@/models/enums/eventType.enum"
import { EventStatus } from "@/models/enums/eventStatus.enum"
import { CategoryName } from "@/models/enums/categoryName.enum"
import imageCompression from "browser-image-compression"
import { motion } from "framer-motion"
import toast, { Toaster } from "react-hot-toast"
import { Card, CardBody } from "@heroui/card"
import { Input } from "@heroui/input"
import { Select, SelectItem } from "@heroui/select"
import { Button } from "@heroui/button"

const CreateEventForm: React.FC = () => {
  const [event, setEvent] = useState({
    id: "",
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    location: "",
    eventType: EventType.CONFERENCE,
    status: EventStatus.ACTIVE,
    category: CategoryName.TECHNOLOGY,
    image: "",
  })

  const handleChange = (name: string, value: string) => {
    setEvent({
      ...event,
      [name]: value,
    })
  }

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 80 * 1024) {
        // 80KB in bytes
        toast.error("Image size should not exceed 80KB")
        return
      }
      try {
        const options = {
          maxSizeMB: 0.08, // 80KB
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        }
        const compressedFile = await imageCompression(file, options)
        const reader = new FileReader()
        reader.onloadend = () => {
          const base64Image = reader.result as string
          setEvent({
            ...event,
            image: base64Image,
          })
        }
        reader.readAsDataURL(compressedFile)
        toast.success("Image uploaded successfully")
      } catch (error) {
        console.error("Error compressing image:", error)
        toast.error("Error uploading image")
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const eventToSubmit = {
        ...event,
        startDate: new Date(event.startDate),
        endDate: new Date(event.endDate),
        image: event.image || undefined,
      }
      await createEvent(eventToSubmit)
      toast.success("Event created successfully")
    } catch (error) {
      console.error("Error creating event:", error)
      toast.error("Failed to create event")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto p-4"
    >
      <Toaster position="top-right" />
      <Card>
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Event Name"
              name="name"
              value={event.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
            <Input
              label="Description"
              name="description"
              value={event.description}
              onChange={(e) => handleChange("description", e.target.value)}
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Start Date"
                type="date"
                name="startDate"
                value={event.startDate}
                onChange={(e) => handleChange("startDate", e.target.value)}
                required
              />
              <Input
                label="End Date"
                type="date"
                name="endDate"
                value={event.endDate}
                onChange={(e) => handleChange("endDate", e.target.value)}
                required
              />
            </div>
            <Input
              label="Location"
              name="location"
              value={event.location}
              onChange={(e) => handleChange("location", e.target.value)}
              required
            />
            <Select
              label="Event Type"
              name="eventType"
              value={event.eventType}
              onChange={(e) => handleChange("eventType", e.target.value)}
              required
            >
              <SelectItem value={EventType.CONFERENCE}>Conference</SelectItem>
              <SelectItem value={EventType.WEBINAR}>Webinar</SelectItem>
              <SelectItem value={EventType.WORKSHOP}>Workshop</SelectItem>
            </Select>
            <Select
              label="Status"
              name="status"
              value={event.status}
              onChange={(e) => handleChange("status", e.target.value)}
              required
            >
              <SelectItem value={EventStatus.ACTIVE}>Active</SelectItem>
              <SelectItem value={EventStatus.CANCELLED}>Inactive</SelectItem>
            </Select>
            <Select
              label="Category"
              name="category"
              value={event.category}
              onChange={(e) => handleChange("category", e.target.value)}
              required
            >
              <SelectItem value={CategoryName.TECHNOLOGY}>Technology</SelectItem>
              <SelectItem value={CategoryName.CULTURE}>Business</SelectItem>
              <SelectItem value={CategoryName.SCIENCE}>Health</SelectItem>
            </Select>
            <Input
              type="file"
              label="Image (Optional, max 80KB)"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
            />
            <Button type="submit" color="primary" className="w-full">
              Create Event
            </Button>
          </form>
        </CardBody>
      </Card>
    </motion.div>
  )
}

export default CreateEventForm

