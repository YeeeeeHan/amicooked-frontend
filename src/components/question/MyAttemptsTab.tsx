import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Attempt, Question } from '@/types'
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'
import { BellCurve } from '../bellcurveChart'

interface MyAttemptsTabProps {
  question: Question
  attempts: Attempt[]
  mostRecentAttemptId: number | null
}

export function MyAttemptsTab({ question, attempts, mostRecentAttemptId }: MyAttemptsTabProps) {
  return (
    <div>
      <div className="pt-4">
        <BellCurve question={question} />
      </div>
      <div className="mt-4 grid grid-cols-5 gap-4 text-center">
        <div className="border-r-2 border-primary-ghost">
          <div className="text-xs text-gray-500">Total Students</div>
          <div className="text-lg font-semibold">1,224</div>
        </div>
        <div className="border-r-2 border-primary-ghost">
          <div className="text-xs text-gray-500">Correct answers</div>
          <div className="text-lg font-semibold text-right-weak">800</div>
        </div>
        <div className="border-r-2 border-primary-ghost">
          <div className="text-xs text-gray-500">Wrong answers</div>
          <div className="text-lg font-semibold text-wrong-weak">424</div>
        </div>
        <div className="border-r-2 border-primary-ghost">
          <div className="text-xs text-gray-500">Average time</div>
          <div className="text-lg font-semibold">30.2s</div>
        </div>
        <div className="border-primary-ghost">
          <div className="text-xs text-gray-500">Fastest time</div>
          <div className="text-lg font-semibold">5s</div>
        </div>
      </div>

      <h2 className="mb-4 mt-8 text-xl font-semibold">My Attempts</h2>

      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">Attempt</TableHead>
            <TableHead className="w-1/4">Time</TableHead>
            <TableHead className="w-1/2">Ranking</TableHead>
            <TableHead className="w-1/2">Status</TableHead>
            <TableHead className="w-1/2">Selected Option</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attempts.map((attempt) => (
            <TableRow
              key={attempt.id}
              className={`transition-colors ${
                attempt.id === mostRecentAttemptId
                  ? attempt.isCorrect
                    ? 'bg-right-ghost hover:bg-right-weak'
                    : 'bg-wrong-ghost hover:bg-wrong-weak'
                  : 'hover:bg-primary-ghost'
              }`}
            >
              <TableCell className="w-1/4">{attempt.id}</TableCell>
              <TableCell className="w-1/4">{attempt.time}s</TableCell>
              <TableCell className="w-1/2">{attempt.ranking}</TableCell>
              <TableCell className="w-1/2">
                {attempt.isCorrect ? (
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 stroke-2 text-right-bright" />
                    <div className="text-right-bright">Correct</div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Cross2Icon className="h-4 w-4 stroke-2 text-wrong-bright" />
                    <div className="text-wrong-bright">Wrong</div>
                  </div>
                )}
              </TableCell>
              <TableCell className="w-1/2">{question.options[attempt.selectedOption]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
