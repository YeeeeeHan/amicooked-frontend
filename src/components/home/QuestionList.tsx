import { QuestionCard } from '@/components/home/QuestionCard'
import { useQuestions } from '@/hooks/useQuestions'

interface QuestionListProps {
  tier: string
  subjects: string[]
}

export function QuestionList({ tier, subjects }: QuestionListProps) {
  const { questions, isLoading, error } = useQuestions(tier, subjects)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2 lg:grid-cols-3">
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  )
}
