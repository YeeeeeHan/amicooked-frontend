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
        <div className="border-r-2 border-primary-ghost">
          <div className="text-xs text-gray-500">Fastest time</div>
          <div className="text-lg font-semibold">5s</div>
        </div>
      </div>
      {/* <table className="w-full">
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
      </table> */}
    </div>
  )
}
