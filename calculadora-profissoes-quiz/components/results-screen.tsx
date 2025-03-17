"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Profession } from "@/data/professions"
import { ArrowRight, RotateCcw, TrendingUp } from "lucide-react"
import type { UserData } from "./registration-form"

interface ResultsScreenProps {
  matchingProfessions: Profession[]
  onRestart: () => void
  userData: UserData | null
}

export const ResultsScreen = ({ matchingProfessions, onRestart, userData }: ResultsScreenProps) => {
  return (
    <div className="animate-fadeIn">
      {userData && (
        <div className="text-center mb-4">
          <h3 className="text-lg text-brandBlue">Resultado para {userData.name.split(" ")[0]}</h3>
        </div>
      )}

      <h2 className="text-2xl md:text-3xl font-bold text-center text-brandBlue mb-8">
        Parabéns, estas são as profissões que mais combinam com você:
      </h2>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {matchingProfessions.map((profession, index) => (
          <Card
            key={index}
            className="overflow-hidden flex flex-col h-full border-2 hover:border-brandBlue/30 transition-all"
          >
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg text-brandBlue">{profession.title}</h3>
                <TrendingUp className="text-green-600 h-5 w-5" />
              </div>
            </div>

            <div className="p-4 flex-grow">
              <p className="text-gray-700 mb-4">{profession.description}</p>
              <div className="text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1 mb-1">
                  <span className="font-medium">Área:</span> {profession.field}
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-medium">Crescimento:</span> {profession.growth}
                </div>
              </div>
            </div>

            <div className="p-4 pt-0">
              <Button className="w-full bg-brandBlue hover:bg-brandBlue/90">Ver cursos recomendados</Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
        <Button
          variant="outline"
          onClick={onRestart}
          className="flex items-center gap-2 border-brandBlue text-brandBlue hover:bg-brandBlue/10"
        >
          <RotateCcw className="h-4 w-4" />
          Refazer Teste
        </Button>

        <Button className="bg-brandBlue hover:bg-brandBlue/90 flex items-center gap-2">
          Conheça instituições parceiras e opções de crédito estudantil
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

