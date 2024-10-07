import { Card } from '@/components/ui/card'
import { Question } from '@/types'
import { Separator } from '@radix-ui/react-separator'
import { Link } from 'react-router-dom'
import { RadialChart } from '../ui/radialChart'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

interface QuestionCardProps {
  question: Question
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="flex flex-col space-y-4">
      <Link to={`/question/${question.id}`}>
        <Card className="min-h-80 bg-card-background">
          <div className="my-3 flex items-center justify-between px-6">
            <div className="flex w-full items-center">
              {/* make image have a white ring shadow */}
              <div className="size-14 flex-shrink-0 rounded-[30px] bg-white p-1 shadow-[0px_0px_3px_lightgray] dark:shadow-[0px_0px_5px_darkgray]">
                <img
                  src={question.school.logo}
                  alt={question.school.name}
                  className="size-12 rounded-[30px] object-contain"
                />
              </div>
              <div className="mx-6 min-w-0 flex-grow">
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <div>
                        <p className="truncate font-semibold text-primary">
                          <span className="block truncate">{question.school.name}</span>
                        </p>
                        <p className="truncate text-sm text-primary-strong">
                          <span className="block truncate">{question.examDetails}</span>
                        </p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="rounded-lg border-primary-ghost bg-primary-foundation shadow-md dark:bg-primary-ghost">
                      <div>
                        <p className="truncate text-sm font-semibold text-primary">
                          <span className="block truncate">{question.school.name}</span>
                        </p>
                        <p className="truncate text-sm text-primary-strong">
                          <span className="block truncate">{question.examDetails}</span>
                        </p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <RadialChart wrongPercentage={question.wrongPercentage} scale={0.6} />
            </div>
          </div>
          <Separator className="h-0.5 bg-primary-ghost" orientation="horizontal" />
          <img
            src={question.imageUrl}
            alt={`Question ${question.id}`}
            className="h-52 w-full object-contain pt-4 blur-sm"
          />
        </Card>
      </Link>
      <div className="flex items-center justify-between px-4 text-sm text-primary-strong">
        <div className="flex items-center">
          <img src={question.author.avatar} alt={question.author.name} className="size-7" />
          <span className="ml-2">{question.author.name}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>{question.attempts} attempts</span>
          <span>{question.likes} likes</span>
        </div>
      </div>
    </div>
  )
}
