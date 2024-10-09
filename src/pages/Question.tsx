import { CustomBreadcrumb } from '@/components/common/BreadCrumb'
import { DiscussionsTab } from '@/components/question/DiscussionsTab'
import { MyAttemptsTab } from '@/components/question/MyAttemptsTab'
import { SolutionsTab } from '@/components/question/SolutionsTab'
import { StatisticsTab } from '@/components/question/StatisticsTab'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { RadialChart } from '@/components/ui/radialChart'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { THROTTLING_TIME } from '@/globals/variables'
import { useQuestion } from '@/hooks/useQuestion'
import { Separator } from '@radix-ui/react-separator'
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
  const [timer, setTimer] = useState<number>(0)
  const [isStarted, setIsStarted] = useState(false)
  const { question, isLoading, error } = useQuestion(Number(id))

  const handleStart = () => {
    setIsStarted(true)
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1)
    }, THROTTLING_TIME)
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
    <div className="flex min-h-screen flex-col">
      <div className="px-16 py-6">
        <CustomBreadcrumb links={breadcrumbProps.links} page={breadcrumbProps.page} />
      </div>
      <div className="h-full flex-1 px-16 pb-12">
        <Card className="flex h-full bg-card-background">
          <div className="flex h-full w-full">
            <div className="w-1/2 p-8">
              <div className="flex h-full flex-col">
                <Tabs className="flex-1" defaultValue={QuestionPageTabs.MY_ATTEMPTS}>
                  <div className="flex flex-row items-center justify-between">
                    <TabsList className="mx-4">
                      <TabsTrigger value={QuestionPageTabs.MY_ATTEMPTS}>{QuestionPageTabs.MY_ATTEMPTS}</TabsTrigger>
                      <TabsTrigger value={QuestionPageTabs.STATISTICS}>{QuestionPageTabs.STATISTICS}</TabsTrigger>
                      <TabsTrigger value={QuestionPageTabs.SOLUTIONS}>{QuestionPageTabs.SOLUTIONS}</TabsTrigger>
                      <TabsTrigger value={QuestionPageTabs.DISCUSSIONS}>{QuestionPageTabs.DISCUSSIONS}</TabsTrigger>
                    </TabsList>
                    <RadialChart wrongPercentage={question.wrongPercentage} scale={0.6} />
                  </div>
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
            <Separator className="h-auto w-[2px] bg-primary-weak dark:bg-primary-ghost" orientation="vertical" />
            <div className="flex w-1/2 flex-col space-y-6 p-8">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm text-primary-strong">Question {id}</div>
                <div className="text-sm text-primary-strong">
                  {Math.floor(timer / 60)}m {timer % 60}s
                </div>
              </div>
              <div className="relative flex flex-1 flex-col">
                <div className={`flex flex-1 flex-col ${isStarted ? '' : 'blur-sm filter'}`}>
                  <img
                    src={isStarted ? question.imageUrl : question.blurredImageUrl}
                    alt={`Question ${question.id}`}
                    className="mb-4 w-full rounded-lg object-contain"
                  />
                  <div className="flex flex-col space-y-2">
                    {question.options.map((option, index) => (
                      <button
                        key={index}
                        className="w-full rounded-lg border border-primary-ghost p-3 text-left hover:bg-primary-ghost"
                        disabled={!isStarted}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                {!isStarted && (
                  <div className="absolute inset-0 flex items-start justify-center pt-20">
                    <Card className="max-w-md space-y-3 rounded-xl bg-card-background p-6 shadow-lg dark:bg-primary-weak">
                      <div className="mb-2 text-left text-lg font-semibold">Ready to Start the Question?</div>
                      <p className="mb-4 text-left text-sm text-primary-heavy">
                        Once you click "Start," the timer will begin, and you will only have{' '}
                        <span className="text-sm font-bold text-primary dark:text-primary">one attempt</span> to
                        complete the question. Subsequent attempts will not be counted to this question's statistics.
                      </p>
                      <div className="flex flex-row-reverse pt-3">
                        <Button onClick={handleStart} variant="destructive">
                          Start
                        </Button>
                      </div>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
