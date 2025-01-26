"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Lock, ArrowRight } from "lucide-react"
import { Button } from "@heroui/button"
import { Input } from "@heroui/input"
import { Link } from "@heroui/link"

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSubmit(email, password)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.3 }}
    >
      <Input
        type="email"
        label="Correo electrónico"
        placeholder="tu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        startContent={<Mail className="text-default-400" size={20} />}
        required
      />
      <Input
        type="password"
        label="Contraseña"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        startContent={<Lock className="text-default-400" size={20} />}
        required
      />
      <Button type="submit" color="primary" className="w-full">
        Iniciar Sesión <ArrowRight className="ml-2" size={20} />
      </Button>
      <div className="text-center text-sm">
        <span className="text-default-500">¿No tienes una cuenta? </span>
        <Link href="/registro" color="primary" underline="hover">
          Regístrate
        </Link>
      </div>
    </motion.form>
  )
}

