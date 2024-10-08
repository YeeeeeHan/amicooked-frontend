import { Question } from '@/types'
import { useEffect, useState } from 'react'

export function useQuestion(questionId: number) {
  const [question, setQuestion] = useState<Question | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setIsLoading(true)
    // Simulating API call to fetch a single question by ID
    setTimeout(() => {
      // For demonstration, we're using the first question from the mock data
      // In a real scenario, you'd fetch the specific question by ID from an API
      const mockQuestion: Question = {
        id: questionId,
        tier: 'Secondary',
        school: {
          name: 'Ang Mo Kio Primary School',
          logo: '/src/assets/schools/ang-mo-kio-primary-school.jpg',
        },
        examDetails: '2022 Sec 4 Additional Maths Prelims',
        wrongPercentage: 34,
        imageUrl: '/src/assets/questions/question2.png',
        author: { name: 'John Smith', avatar: '/src/assets/avatars/avatar1.svg' },
        attempts: 1224,
        likes: 10,
        subject: 'Math',
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        totalAttempts: 1000,
        correctAnswers: 650,
        wrongAnswers: 350,
        averageTime: 45,
        fastestTime: 15,
        solution: 'This is the solution to the question...',
      }
      setQuestion(mockQuestion)
      setIsLoading(false)
    }, 1000)
  }, [questionId])

  return { question, isLoading, error }
}
