"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@heroui/button"
import steps from "./steps"

export default function HowItWorks() {
    const [currentStep, setCurrentStep] = useState(0)

    const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length)
    const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)

    useEffect(() => {
        const interval = setInterval(nextStep, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="max-w-7xl">
            <div className="container mx-auto px-4">
                <div className="mx-auto">
                    <div className="flex justify-between items-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-bold"
                        >
                            Crea o Compra tu{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                Evento Ideal
                            </span>
                        </motion.h2>
                        <div className="flex gap-2">
                            <Button variant="faded" onClick={prevStep} className="rounded-full">
                                <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="faded"
                                onClick={nextStep}
                                className="rounded-full bg-blue-500 hover:bg-blue-600"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <AnimatePresence mode="wait">
                            {[currentStep, (currentStep + 1) % steps.length, (currentStep + 2) % steps.length].map((stepIndex, i) => (
                                <motion.div
                                    key={stepIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                                            {steps[stepIndex].icon}
                                        </div>
                                        <h3 className="text-xl font-semibold">{steps[stepIndex].title}</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">{steps[stepIndex].description}</p>
                                    <div className="mt-auto">{steps[stepIndex].illustration}</div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="mt-8 flex justify-center gap-2">
                        {steps.map((_, index) => (
                            <motion.button
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                    index === currentStep ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-700"
                                }`}
                                onClick={() => setCurrentStep(index)}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
