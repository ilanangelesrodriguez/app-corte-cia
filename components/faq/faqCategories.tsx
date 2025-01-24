"use client"

import { motion } from "framer-motion"
import { Calendar, CreditCard, Users, Settings, Shield, HelpCircle } from "lucide-react"

const categories = [
  {
    icon: Calendar,
    title: "Eventos",
    description: "Gestión y organización",
  },
  {
    icon: CreditCard,
    title: "Pagos",
    description: "Métodos y facturación",
  },
  {
    icon: Users,
    title: "Usuarios",
    description: "Cuentas y perfiles",
  },
  {
    icon: Settings,
    title: "Plataforma",
    description: "Uso y configuración",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Privacidad y datos",
  },
  {
    icon: HelpCircle,
    title: "Soporte",
    description: "Ayuda y contacto",
  },
]

interface FAQCategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function FAQCategories({ selectedCategory, setSelectedCategory }: FAQCategoriesProps) {
  const handleCategoryClick = (categoryTitle: string) => {
    setSelectedCategory(selectedCategory === categoryTitle ? "" : categoryTitle);
  };

  return (
    <div className="pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
              onClick={() => handleCategoryClick(category.title)}
            >
              <div className="relative p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                  initial={false}
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative">
                  <div className="flex items-center justify-center gap-4">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div className="text-left md:text-center">
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
