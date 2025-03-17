"use client"

import { useState } from "react"
import { QuestionScreen } from "./question-screen"
import { ResultsScreen } from "./results-screen"
import { ProgressIndicator } from "./progress-indicator"
import { RegistrationForm, type UserData } from "./registration-form"
import { questions } from "@/data/questions"
import { professions } from "@/data/professions"

export type Answer = {
  questionId: number
  answerId: string
}

export const QuizContainer = () => {
  const [currentScreen, setCurrentScreen] = useState<"questions" | "registration" | "results">("questions")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [userData, setUserData] = useState<UserData | null>(null)
  const [matchingProfessions, setMatchingProfessions] = useState<any[]>([])

  const handleAnswer = (answerId: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = {
      questionId: currentQuestionIndex,
      answerId,
    }
    setAnswers(newAnswers)

    // Move to next question or registration
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      }, 500)
    } else {
      setTimeout(() => {
        // Calculate matching professions before showing registration
        const professions = getMatchingProfessions(newAnswers)
        setMatchingProfessions(professions)
        setCurrentScreen("registration")
      }, 500)
    }
  }

  const handleRegistrationComplete = (data: UserData) => {
    setUserData(data)
    setCurrentScreen("results")
  }

  const handleRestartQuiz = () => {
    setCurrentScreen("questions")
    setCurrentQuestionIndex(0)
    setAnswers([])
    setMatchingProfessions([])
  }

  // Simple algorithm to determine matching professions
  const getMatchingProfessions = (currentAnswers: Answer[] = answers) => {
    // This is a simplified matching algorithm
    // In a real application, you would have a more sophisticated algorithm

    // Count areas of interest based on answers
    const interestCounts: Record<string, number> = {
      technology: 0,
      health: 0,
      environment: 0,
      communication: 0,
      business: 0,
      arts: 0,
    }

    // Analyze first question (area of interest)
    const areaAnswer = currentAnswers[0]?.answerId
    if (areaAnswer === "tech") interestCounts.technology += 2
    if (areaAnswer === "health") interestCounts.health += 2
    if (areaAnswer === "environment") interestCounts.environment += 2
    if (areaAnswer === "communication") interestCounts.communication += 2
    if (areaAnswer === "business") interestCounts.business += 2
    if (areaAnswer === "arts") interestCounts.arts += 2

    // Analyze third question (cause to impact)
    const causeAnswer = currentAnswers[2]?.answerId
    if (causeAnswer === "health_wellbeing") interestCounts.health += 1
    if (causeAnswer === "tech_innovation") interestCounts.technology += 1
    if (causeAnswer === "environment_sustainability") interestCounts.environment += 1
    if (causeAnswer === "education") interestCounts.communication += 0.5
    if (causeAnswer === "business_economy") interestCounts.business += 1
    if (causeAnswer === "entertainment") interestCounts.arts += 1

    // Analyze sixth question (strengths)
    const strengthAnswer = currentAnswers[5]?.answerId
    if (strengthAnswer === "analytical") interestCounts.technology += 1
    if (strengthAnswer === "creative") interestCounts.arts += 1
    if (strengthAnswer === "communication") interestCounts.communication += 1
    if (strengthAnswer === "leadership") interestCounts.business += 1
    if (strengthAnswer === "technical") {
      interestCounts.technology += 0.5
      interestCounts.health += 0.5
    }

    // Analyze tenth question (emerging technology)
    const techAnswer = currentAnswers[9]?.answerId
    if (techAnswer === "ai") interestCounts.technology += 1.5
    if (techAnswer === "biotech") interestCounts.health += 1.5
    if (techAnswer === "renewable") interestCounts.environment += 1.5
    if (techAnswer === "vr_ar") {
      interestCounts.technology += 0.75
      interestCounts.arts += 0.75
    }
    if (techAnswer === "blockchain") {
      interestCounts.technology += 0.75
      interestCounts.business += 0.75
    }
    if (techAnswer === "robotics") interestCounts.technology += 1.5

    // Sort interests by count
    const sortedInterests = Object.entries(interestCounts)
      .sort((a, b) => b[1] - a[1])
      .map((entry) => entry[0])

    // Get top 3 matching professions based on top interests
    const matchingProfessions = professions
      .filter((profession) => profession.category === sortedInterests[0] || profession.category === sortedInterests[1])
      .slice(0, 3)

    return matchingProfessions
  }

  return (
    <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
      {currentScreen === "questions" && (
        <ProgressIndicator currentStep={currentQuestionIndex + 1} totalSteps={questions.length} />
      )}

      <div className="p-6 md:p-8">
        {currentScreen === "questions" && (
          <div>
            {currentQuestionIndex === 0 && (
              <div className="mb-6 text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-brandBlue mb-3">
                  Vamos descobrir quais profissões do futuro combinam com você?
                </h1>
                <p className="text-gray-600">Responda as perguntas abaixo para receber recomendações personalizadas.</p>
              </div>
            )}
            <QuestionScreen
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              selectedAnswer={answers[currentQuestionIndex]?.answerId}
            />
          </div>
        )}

        {currentScreen === "registration" && (
          <RegistrationForm
            onComplete={handleRegistrationComplete}
            message="Para ver seus resultados, preencha seus dados abaixo:"
          />
        )}

        {currentScreen === "results" && (
          <ResultsScreen matchingProfessions={matchingProfessions} onRestart={handleRestartQuiz} userData={userData} />
        )}
      </div>
    </div>
  )
}

