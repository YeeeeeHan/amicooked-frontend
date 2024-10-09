export interface Question {
  id: number
  tier: string
  subject: string
  imageUrl: string
  blurredImageUrl: string
  options: string[]
  totalAttempts: number
  correctAnswer: number
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

export interface Attempt {
  id: number
  time: number
  ranking: number
  isCorrect: boolean
  selectedOption: number
}
