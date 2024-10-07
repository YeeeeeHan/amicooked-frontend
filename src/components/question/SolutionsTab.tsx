import { Question } from '@/types'

interface SolutionsTabProps {
  question: Question
}

export function SolutionsTab({ question }: SolutionsTabProps) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Solution</h3>
      <p>{question.solution}</p>
    </div>
  )
}
