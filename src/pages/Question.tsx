import { DiscussionsTab } from '@/components/question/DiscussionsTab'
import { MyAttemptsTab } from '@/components/question/MyAttemptsTab'
import { SolutionsTab } from '@/components/question/SolutionsTab'
import { StatisticsTab } from '@/components/question/StatisticsTab'
import { Card } from '@/components/ui/card'
import { useQuestion } from '@/hooks/useQuestion'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const tabs = ['Statistics', 'My Attempts', 'Solutions', 'Discussions'] as const
type TabType = (typeof tabs)[number]

export default function Question() {
  const { id } = useParams<{ id: string }>()
  const [activeTab, setActiveTab] = useState<TabType>('Statistics')
  const [timer, setTimer] = useState<number>(0)
  const [isStarted, setIsStarted] = useState(false)
  const { question, isLoading, error } = useQuestion(id!)

  const handleStart = () => {
    setIsStarted(true)
    // Start the timer
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000)
    return () => clearInterval(interval)
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 pt-20">
        <div className="breadcrumbs mb-6 text-sm">
          <ul>
            <li>{question.tier}</li>
            <li>{question.subject}</li>
            <li>Question {id}</li>
          </ul>
        </div>
        <div className="flex gap-6">
          <div className="w-1/2">
            <Card>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Question {id}</h2>
                <div className="font-mono text-xl">
                  {Math.floor(timer / 60)}m {timer % 60}s
                </div>
              </div>
              {!isStarted ? (
                <div className="relative">
                  <img src={question.imageUrl} alt="Question" className="w-full blur-sm filter" />
                  <button
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-500 px-6 py-3 text-xl text-white"
                    onClick={handleStart}
                  >
                    Start
                  </button>
                </div>
              ) : (
                <div>
                  <img src={question.imageUrl} alt="Question" className="mb-4 w-full" />
                  <div className="space-y-2">
                    {question.options.map((option, index) => (
                      <button
                        key={index}
                        className="w-full rounded border p-3 text-left hover:bg-gray-100"
                        onClick={() => {
                          // Handle answer selection
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>
          <div className="w-1/2">
            <Card>
              <div className="mb-4 flex">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 ${
                      activeTab === tab
                        ? 'border-b-2 border-blue-500 text-blue-500'
                        : 'text-gray-500'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {activeTab === 'Statistics' && <StatisticsTab question={question} />}
              {activeTab === 'My Attempts' && <MyAttemptsTab question={question} />}
              {activeTab === 'Solutions' && <SolutionsTab question={question} />}
              {activeTab === 'Discussions' && <DiscussionsTab question={question} />}
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
