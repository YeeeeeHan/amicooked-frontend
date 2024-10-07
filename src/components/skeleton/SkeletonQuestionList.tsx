import { Card } from '@/components/ui/card'
import { Separator } from '@radix-ui/react-separator'

export function SkeletonQuestionList() {
  return (
    <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="flex flex-col space-y-4">
          <Card className="before:animate-shimmer relative min-h-80 overflow-hidden bg-card-background before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-black/20 before:to-transparent dark:before:via-white/20">
            <div className="my-3 flex items-center justify-between px-6">
              <div className="flex items-center">
                <div className="size-14 rounded-[30px] bg-primary-weak"></div>
                <div className="mx-6 space-y-2">
                  <div className="h-4 w-40 rounded bg-primary-weak"></div>
                  <div className="h-3 w-20 rounded bg-primary-weak"></div>
                </div>
              </div>
              <div className="size-14 rounded-[30px] bg-primary-weak"></div>
            </div>
            <Separator className="h-0.5 bg-primary-ghost" orientation="horizontal" />
            <div className="h-52 w-full bg-primary-ghost pt-4"></div>
          </Card>
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center">
              <div className="size-7 rounded-full bg-primary-weak"></div>
              <div className="ml-2 h-4 w-20 rounded bg-primary-weak"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-4 w-16 rounded bg-primary-weak"></div>
              <div className="h-4 w-16 rounded bg-primary-weak"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
