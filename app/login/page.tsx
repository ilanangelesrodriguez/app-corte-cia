"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Mail, Lock, ArrowRight } from "lucide-react"
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log("Login attempt", { email, password })
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br">
      <Card className="m-auto w-full max-w-md overflow-hidden shadow-xl">
        <CardBody className="p-8">
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <CardHeader className="flex-col items-start px-0 pb-6">
              <h1 className="text-3xl font-bold text-foreground">¡Bienvenido de nuevo!</h1>
              <p className="text-sm text-foreground-500">Por favor, inicia sesión en tu cuenta</p>
            </CardHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                label="Correo electrónico"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                startContent={<Mail className="text-default-400" size={20} />}
              />
              <Input
                type="password"
                label="Contraseña"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                startContent={<Lock className="text-default-400" size={20} />}
              />
              <Button type="submit" color="primary" endContent={<ArrowRight size={20} />} className="w-full">
                Iniciar Sesión
              </Button>
            </form>

            <div className="mt-4 text-center text-sm">
              <span className="text-default-500">¿No tienes una cuenta? </span>
              <Link href="#" className="text-primary">
                Regístrate
              </Link>
            </div>
          </motion.div>
        </CardBody>
      </Card>
    </div>
  )
}
