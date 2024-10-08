import { Question } from '@/types'
import { BellCurve } from '../bellcurveChart'

interface MyAttemptsTabProps {
  question: Question
}

export function MyAttemptsTab({ question }: MyAttemptsTabProps) {
  // Mock data for attempts
  const attempts = [
    { id: 1, time: 30, ranking: 150 },
    { id: 2, time: 25, ranking: 100 },
    // ... more attempts
  ]

  return (
    <div>
      <div className="pt-4">
        <BellCurve />
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Attempt #</th>
            <th className="text-left">Time</th>
            <th className="text-left">Ranking</th>
          </tr>
        </thead>
        <tbody>
          {attempts.map((attempt) => (
            <tr key={attempt.id}>
              <td>{attempt.id}</td>
              <td>{attempt.time}s</td>
              <td>{attempt.ranking}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
