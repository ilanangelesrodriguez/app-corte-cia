"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Card, CardBody, CardHeader } from "@heroui/card"
import { LoginForm } from "@/components/login/loginForm"
import { Alert } from "@heroui/alert"
import { useAuth } from "@/hooks/useAuth"

export default function LoginPage() {
  const [error, setError] = useState<{ title: string; description: string } | null>(null)
  const router = useRouter()
  const { login } = useAuth()

  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password)
      router.push("/dashboard")
    } catch (error) {
      setError({
        title: "Inicio de sesión fallido",
        description: "Por favor, verifica tus credenciales."
      })
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="m-auto">
          <CardHeader className="flex flex-col justify-center items-center px-4 py-5 space-y-1">
            <h2 className="text-2xl font-bold">¡Bienvenido de nuevo!</h2>
            <p className="text-sm text-default-500">Inicia sesión en tu cuenta para continuar</p>
          </CardHeader>
          <CardBody className="px-8 py-2 pb-5">
            <LoginForm onSubmit={handleLogin} />
          </CardBody>
        </Card>
        {error && (
          <Alert variant="flat" color="danger" description={error.description} title={error.title} />
        )}
      </motion.div>
    </div>
  )
}

