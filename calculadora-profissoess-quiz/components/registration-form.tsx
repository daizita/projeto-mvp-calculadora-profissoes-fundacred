"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Sparkles, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface RegistrationFormProps {
  onComplete: (userData: UserData) => void
  message?: string
}

export interface UserData {
  name: string
  email: string
  whatsapp: string
}

export const RegistrationForm = ({ onComplete, message }: RegistrationFormProps) => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    whatsapp: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido"
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp é obrigatório"
    } else if (!/^\d{10,11}$/.test(formData.whatsapp.replace(/\D/g, ""))) {
      newErrors.whatsapp = "WhatsApp inválido (apenas números)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        onComplete(formData)
      }, 1000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, "")

    if (numbers.length <= 2) {
      return numbers
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
    }
  }

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const formattedValue = formatWhatsApp(value)

    setFormData((prev) => ({ ...prev, whatsapp: formattedValue }))

    if (errors.whatsapp) {
      setErrors((prev) => ({ ...prev, whatsapp: "" }))
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto p-6 shadow-lg animate-fadeIn">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-brandBlue mb-2">Estamos quase lá!</h2>
        <p className="text-gray-600">
          {message || "Preencha seus dados para descobrir quais profissões do futuro combinam com você"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-700">
            Nome completo
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Digite seu nome completo"
            value={formData.name}
            onChange={handleChange}
            className={cn(
              "border-2 focus:border-brandBlue focus:ring-brandBlue",
              errors.name ? "border-red-500" : "border-gray-200",
            )}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700">
            E-mail
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleChange}
            className={cn(
              "border-2 focus:border-brandBlue focus:ring-brandBlue",
              errors.email ? "border-red-500" : "border-gray-200",
            )}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="whatsapp" className="text-gray-700">
            WhatsApp
          </Label>
          <Input
            id="whatsapp"
            name="whatsapp"
            placeholder="(00) 00000-0000"
            value={formData.whatsapp}
            onChange={handleWhatsAppChange}
            className={cn(
              "border-2 focus:border-brandBlue focus:ring-brandBlue",
              errors.whatsapp ? "border-red-500" : "border-gray-200",
            )}
          />
          {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
        </div>

        <Button
          type="submit"
          className="w-full py-6 text-lg bg-brandBlue hover:bg-brandBlue/90 transition-all duration-300 shadow-lg group"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processando...
            </span>
          ) : (
            <span className="flex items-center">
              Ver Meus Resultados
              <Sparkles className="ml-2 h-5 w-5 group-hover:animate-pulse" />
            </span>
          )}
        </Button>

        <div className="text-center text-sm text-gray-500 mt-4">
          <p className="flex items-center justify-center gap-1">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Seus dados estão seguros e não serão compartilhados
          </p>
        </div>
      </form>
    </Card>
  )
}

