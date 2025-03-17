"use client"

import { useState } from "react"
import type { Question } from "@/data/questions"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface QuestionScreenProps {
  question: Question
  onAnswer: (answerId: string) => void
  selectedAnswer?: string
}

export const QuestionScreen = ({ question, onAnswer, selectedAnswer }: QuestionScreenProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(selectedAnswer || null)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleOptionClick = (optionId: string) => {
    if (isAnimating) return

    setSelectedOption(optionId)
    setIsAnimating(true)

    setTimeout(() => {
      onAnswer(optionId)
      setIsAnimating(false)
    }, 400)
  }

  return (
    <div className={cn("transition-opacity duration-500", isAnimating ? "opacity-50" : "opacity-100")}>
      <h2 className="text-2xl font-semibold text-brandBlue mb-6">{question.text}</h2>

      <div className="grid gap-3">
        {question.options.map((option) => (
          <Card
            key={option.id}
            className={cn(
              "p-4 cursor-pointer transition-all duration-200 hover:bg-blue-50 border-2",
              selectedOption === option.id
                ? "border-brandBlue bg-blue-50 shadow-md"
                : "border-gray-100 hover:border-brandBlue/30",
            )}
            onClick={() => handleOptionClick(option.id)}
          >
            <div className="flex items-center">
              <div
                className={cn(
                  "w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all",
                  selectedOption === option.id ? "border-brandBlue bg-brandBlue" : "border-gray-300",
                )}
              >
                {selectedOption === option.id && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
              <span className="text-gray-700">{option.text}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

