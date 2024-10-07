import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

export interface Question {
  id: number
  status: 'completed' | 'attempted' | 'unattempted'
  questionNumber: number
  school: string
  attempts: number
  acceptance: number
  likes: number
}

interface QuestionsTableProps {
  questions: Question[]
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const QuestionsTable: React.FC<QuestionsTableProps> = ({
  questions,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <Card className="w-full h-full flex flex-col">
      <CardContent className="flex-grow flex flex-col p-0">
        <div className="overflow-auto flex-grow">
          <table className="w-full">
            <thead className="sticky top-0 bg-background">
              <tr className="border-b">
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Question</th>
                <th className="p-2 text-left">School</th>
                <th className="p-2 text-left">Attempts</th>
                <th className="p-2 text-left">Acceptance</th>
                <th className="p-2 text-left">Likes</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr key={question.id} className="border-b hover:bg-muted/50">
                  <td className="p-2">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(question.status)}`} />
                  </td>
                  <td className="p-2">{question.questionNumber}</td>
                  <td className="p-2">{question.school}</td>
                  <td className="p-2">{question.attempts}</td>
                  <td className="p-2">{question.acceptance.toFixed(1)}%</td>
                  <td className="p-2">{question.likes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center p-4 border-t">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {generatePageNumbers(currentPage, totalPages).map((pageNum, index) => (
            <React.Fragment key={index}>
              {pageNum === '...' ? (
                <span className="px-2">...</span>
              ) : (
                <Button
                  variant={pageNum === currentPage ? 'default' : 'outline'}
                  onClick={() => onPageChange(Number(pageNum))}
                >
                  {pageNum}
                </Button>
              )}
            </React.Fragment>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function getStatusColor(status: 'completed' | 'attempted' | 'unattempted') {
  switch (status) {
    case 'completed':
      return 'bg-green-500'
    case 'attempted':
      return 'bg-yellow-500'
    case 'unattempted':
      return 'bg-gray-300'
  }
}

function generatePageNumbers(currentPage: number, totalPages: number) {
  const pageNumbers = []
  const maxVisiblePages = 5

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= 4; i++) {
        pageNumbers.push(i)
      }
      pageNumbers.push('...', totalPages)
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push(1, '...')
      for (let i = totalPages - 3; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      pageNumbers.push(1, '...')
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageNumbers.push(i)
      }
      pageNumbers.push('...', totalPages)
    }
  }

  return pageNumbers
}

export default QuestionsTable
