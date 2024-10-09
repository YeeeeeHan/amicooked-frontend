import { mockQuestions } from '@/assets/mockApi/questions'
import { THROTTLING_TIME } from '@/globals/variables'
import { Question } from '@/types'
import { useEffect, useState } from 'react'

export function useQuestion(questionId: number) {
  const [question, setQuestion] = useState<Question | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      const mockQuestion = mockQuestions.find((question) => question.id === questionId)
      if (mockQuestion) {
        setQuestion(mockQuestion)
      } else {
        setError(new Error('Question not found'))
      }
      setIsLoading(false)
    }, THROTTLING_TIME)
  }, [questionId])

  return { question, isLoading, error }
}
