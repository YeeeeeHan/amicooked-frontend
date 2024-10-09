import { mockAttempts } from '@/assets/mockApi/attempts'
import { Attempt } from '@/types'
import { useEffect, useState } from 'react'

export function useAttempts(questionId: number) {
  const [attempts, setAttempts] = useState<Attempt[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setAttempts(mockAttempts[questionId])
  }, [questionId])

  const addAttempt = (attempt: Attempt) => {
    setAttempts((prevAttempts) => [...prevAttempts, attempt])
  }

  return { attempts, isLoading, error, addAttempt }
}
