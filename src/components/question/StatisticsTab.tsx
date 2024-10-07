import { ChartContainer, ChartTooltip } from '@/components/ui/chart'
import { Question } from '@/types'
import { useState } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

interface StatisticsTabProps {
  question: Question
}

export function StatisticsTab({ question }: StatisticsTabProps) {
  const [showWrongAttempts, setShowWrongAttempts] = useState(true)
  const [timeRange, setTimeRange] = useState([0, 50]) // Assuming 50 buckets

  // Mock data for the chart
  const chartData = [
    { time: 5, correct: 10, wrong: 5 },
    { time: 10, correct: 15, wrong: 8 },
    { time: 15, correct: 20, wrong: 12 },
    { time: 20, correct: 25, wrong: 15 },
    { time: 25, correct: 30, wrong: 18 },
    // ... more data points
  ]

  const filteredData = chartData.filter(
    (data) => data.time >= timeRange[0] && data.time <= timeRange[1]
  )

  const chartConfig = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time (seconds)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Attempts',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
  }

  return (
    <div>
      <ChartContainer className="h-[300px]" config={chartConfig as any}>
        git re
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={filteredData}>
            <XAxis dataKey="time" />
            <YAxis />
            <Bar dataKey="correct" fill="var(--chart-1)" name="Correct Attempts" />
            {showWrongAttempts && (
              <Bar dataKey="wrong" fill="var(--chart-2)" name="Wrong Attempts" />
            )}
            <ChartTooltip />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="flex justify-between items-center mt-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={showWrongAttempts}
            onChange={(e) => setShowWrongAttempts(e.target.checked)}
            className="mr-2"
          />
          Show wrong attempts
        </label>
        <button onClick={() => setTimeRange([0, 50])} className="text-blue-500">
          Reset
        </button>
      </div>
      <input
        type="range"
        min="0"
        max="50"
        value={timeRange[1]}
        onChange={(e) => setTimeRange([timeRange[0], parseInt(e.target.value)])}
        className="w-full mt-4"
      />
      <div className="grid grid-cols-5 gap-4 mt-6">
        <div>
          <div className="text-sm text-gray-500">Total Students</div>
          <div className="text-xl font-bold">{question.totalAttempts}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Correct Answers</div>
          <div className="text-xl font-bold">{question.correctAnswers}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Wrong Answers</div>
          <div className="text-xl font-bold">{question.wrongAnswers}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Average Time</div>
          <div className="text-xl font-bold">{question.averageTime}s</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Fastest Time</div>
          <div className="text-xl font-bold">{question.fastestTime}s</div>
        </div>
      </div>
    </div>
  )
}
