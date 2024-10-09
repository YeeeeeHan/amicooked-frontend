export interface Question {
  id: number
  tier: string
  subject: string
  imageUrl: string
  blurredImageUrl: string
  options: string[]
  totalAttempts: number
  correctAnswers: number
  wrongAnswers: number
  averageTime: number
  fastestTime: number
  solution: string
  school: {
    name: string
    logo: string
  }
  examDetails: string
  wrongPercentage: number
  author: {
    name: string
    avatar: string
  }
  attempts: number
  likes: number
}

// Add more types as needed
