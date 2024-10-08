import { Card, CardContent } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Question } from '@/types'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

export const description = 'A simple area chart'

const chartData = Array.from({ length: 100 }, (_, i) => {
  const x = (i - 50) / 10
  const height = Math.round((100 * Math.exp(-0.5 * x * x)) / Math.sqrt(2 * Math.PI))
  return { ranking: i.toString(), height }
})

const chartConfig = {
  height: {
    label: 'height',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export interface BellCurveProps {
  question: Question
}

export function BellCurve({ question }: BellCurveProps) {
  return (
    <Card className="rounded-lg bg-background shadow-sm">
      {/* <div className="flex flex-col space-y-0.5 px-6 py-4"> */}
      <div className="flex flex-row justify-between px-6 py-4">
        <div className="flex flex-col space-y-0.5">
          <div className="text-lg">Bell Curve of Performance</div>
          <div className="text-xs text-primary-strong">
            Distribution of how quickly and accurately other students answered the question
          </div>
        </div>
        <div>Drop down menu</div>
      </div>
      <CardContent className="py-4">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="ranking"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={true}
              content={
                <ChartTooltipContent
                  indicator="line"
                  hideIndicator={false}
                  hideLabel={false}
                  nameKey="temp"
                  labelKey="test"
                />
              }
            />
            <Area
              dataKey="height"
              type="natural"
              // Gradient
              fill="var(--right-weak)"
              fillOpacity={0.4}
              stroke="var(--right-strong)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">January - June 2024</div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  )
}
