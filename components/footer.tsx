"use client"

import { Link } from "@heroui/link";
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Heart, Github } from "lucide-react"
import { Logo } from "./icons";

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <div className="flex items-center space-x-2 m-auto justify-center md:justify-start">
              <Logo className="text-primary" />
              <p className="font-bold text-xl">Corte & Cía</p>
            </div>
            <p className="text-sm mt-2">Nuestra aplicación es para gestionar eventos, diseñada para Corte & Cía. </p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Facebook size={24} />
            </Link>
            <Link href="https://www.instagram.com/ilanangelesrodriguez.12/" className="hover:text-gray-300 transition-colors">
              <Instagram size={24} />
            </Link>
            <Link href="https://linkedin.com/in/ilannestorangelesrodriguez" className="hover:text-gray-300 transition-colors">
              <Linkedin size={24} />
            </Link>
            <Link href="https://github.com/ilanangelesrodriguez" className="hover:text-gray-300 transition-colors">
              <Github size={24} />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
            <Link href="/" className="text-sm hover:underline">
              Inicio
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Acerca de
            </Link>
            <Link href="/services" className="text-sm hover:underline">
              Servicios
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Contacto
            </Link>
          </nav>
          <motion.p className="text-sm flex items-center" whileHover={{ scale: 1.05 }}>
            Hecho con <Heart className="mx-1 text-red-400" size={16} /> por 
            <Link href="https://linkedin.com/in/ilanangelesrodriguez" className="hover:underline mx-1"> 
              Ilan Angeles
            </Link>
            © {currentYear}
          </motion.p>
        </div>
      </div>
    </motion.footer>
  )
}

