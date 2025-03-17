interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
}

export const ProgressIndicator = ({ currentStep, totalSteps }: ProgressIndicatorProps) => {
  const percentage = (currentStep / totalSteps) * 100

  return (
    <div className="w-full bg-gray-100">
      <div className="h-2 bg-brandBlue transition-all duration-500 ease-out" style={{ width: `${percentage}%` }} />
      <div className="px-6 py-2 text-sm text-gray-500 flex justify-between">
        <span>
          Pergunta {currentStep} de {totalSteps}
        </span>
        <span>{Math.round(percentage)}% concluído</span>
      </div>
    </div>
  )
}

