import { mockQuestions } from '@/assets/questions/questions'
import { THROTTLING_TIME } from '@/globals/variables'
import { Question } from '@/types'
import { useEffect, useState } from 'react'

export function useQuestions(tier: string, subjects: string[]) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // This is where you would typically fetch data from an API
    // For now, we'll use a setTimeout to simulate an API call
    setIsLoading(true)
    setTimeout(() => {
      setQuestions(mockQuestions)
      setIsLoading(false)
    }, THROTTLING_TIME)
  }, [tier, subjects])

  return { questions, isLoading, error }
}
