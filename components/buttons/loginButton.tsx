"use client"

import { Button } from "@heroui/button"
import NextLink from "next/link"
import { LoginIcon } from "@/components/icons"

interface LoginButtonProps {
  className?: string
  mobile?: boolean
}

export const LoginButton = ({ className = "", mobile = false }: LoginButtonProps) => {
  return (
    <Button
      as={NextLink}
      href="/login"
      className={`
        group
        relative
        overflow-hidden
        bg-primary/10 
        hover:bg-primary/15 
        active:bg-primary/20
        text-primary 
        font-medium 
        transition-all 
        duration-300
        ${mobile ? "w-full justify-center" : "px-6"}
        py-2.5
        ${className}
      `}
    >
      <span className="flex items-center gap-2">
        <LoginIcon
          className={`
          w-5 
          h-5 
          transition-transform 
          duration-300 
          group-hover:translate-x-0.5
        `}
        />
        <span className="relative">
          Entrar
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </span>
      </span>
    </Button>
  )
}

