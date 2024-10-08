import { CustomBreadcrumb } from '@/components/common/BreadCrumb'
import { DiscussionsTab } from '@/components/question/DiscussionsTab'
import { MyAttemptsTab } from '@/components/question/MyAttemptsTab'
import { SolutionsTab } from '@/components/question/SolutionsTab'
import { StatisticsTab } from '@/components/question/StatisticsTab'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useQuestion } from '@/hooks/useQuestion'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export enum QuestionPageTabs {
  MY_ATTEMPTS = 'My Attempts',
  STATISTICS = 'Statistics',
  SOLUTIONS = 'Solutions',
  DISCUSSIONS = 'Discussions',
}
export const tabs = [
  QuestionPageTabs.MY_ATTEMPTS,
  QuestionPageTabs.STATISTICS,
  QuestionPageTabs.SOLUTIONS,
  QuestionPageTabs.DISCUSSIONS,
]

export default function Question() {
  const { id } = useParams<{ id: string }>()
  const [activeTab, setActiveTab] = useState<QuestionPageTabs>(QuestionPageTabs.MY_ATTEMPTS)
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

  if (isLoading) return <div className="text-primary">Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!question) return <div>Question not found</div>

  const breadcrumbProps = {
    page: { label: `Question ${id}` },
    links: [{ label: 'Home', href: '/' }, { label: question?.tier }, { label: question?.subject }],
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="px-16 py-6">
        <CustomBreadcrumb links={breadcrumbProps.links} page={breadcrumbProps.page} />
      </div>

      <div className="flex-1 px-16 py-6">
        <Card className="h-full bg-card-background p-6">
          <div className="flex gap-6">
            <div className="w-1/2">
              <div className="px-12 pt-8">
                <Tabs defaultValue={QuestionPageTabs.MY_ATTEMPTS}>
                  <TabsList>
                    <TabsTrigger value={QuestionPageTabs.MY_ATTEMPTS}>{QuestionPageTabs.MY_ATTEMPTS}</TabsTrigger>
                    <TabsTrigger value={QuestionPageTabs.STATISTICS}>{QuestionPageTabs.STATISTICS}</TabsTrigger>
                    <TabsTrigger value={QuestionPageTabs.SOLUTIONS}>{QuestionPageTabs.SOLUTIONS}</TabsTrigger>
                    <TabsTrigger value={QuestionPageTabs.DISCUSSIONS}>{QuestionPageTabs.DISCUSSIONS}</TabsTrigger>
                  </TabsList>
                  <TabsContent value={QuestionPageTabs.MY_ATTEMPTS}>
                    <MyAttemptsTab question={question} />
                  </TabsContent>
                  <TabsContent value={QuestionPageTabs.STATISTICS}>
                    <StatisticsTab question={question} />
                  </TabsContent>
                  <TabsContent value={QuestionPageTabs.SOLUTIONS}>
                    <SolutionsTab question={question} />
                  </TabsContent>
                  <TabsContent value={QuestionPageTabs.DISCUSSIONS}>
                    <DiscussionsTab question={question} />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            <div className="w-1/2">
              <Card className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Question {id}</h2>
                  <div className="font-mono text-xl">
                    {Math.floor(timer / 60)}m {timer % 60}s
                  </div>
                </div>
                {!isStarted ? (
                  <div className="rounded-lg bg-gray-50 p-6 text-center">
                    <h3 className="mb-2 text-lg font-semibold">Ready to Start the Question?</h3>
                    <p className="mb-4 text-sm text-gray-600">
                      Once you click "Start," the timer will begin, and you will only have one attempt to complete the
                      question. Subsequent attempts will not be counted to this question's statistics.
                    </p>
                    <Button onClick={handleStart} className="bg-primary text-white">
                      Start
                    </Button>
                  </div>
                ) : (
                  <div>
                    <img
                      src={question.imageUrl}
                      alt={`Question ${question.id}`}
                      className="mb-4 w-full rounded-lg object-contain"
                    />
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
          </div>
        </Card>
      </div>
    </div>
  )
}
