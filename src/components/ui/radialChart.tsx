'use client'

import { ChartConfig, ChartContainer } from '@/components/ui/chart'
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts'

export const description = 'A radial chart with text'

const chartConfig = {
  wrongPercentage: {
    label: 'wrongPercentage',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export interface RadialChartProps {
  wrongPercentage: number
  scale: number
}

export function RadialChart({ wrongPercentage, scale }: RadialChartProps) {
  // add visitors to data
  const data = [{ wrongPercentage: wrongPercentage, fill: 'var(--wrong-bright)' }]

  // Updated function signature
  return (
    <ChartContainer config={chartConfig} className="size-16">
      <RadialBarChart
        data={data}
        startAngle={90}
        endAngle={90 + wrongPercentage * 3.6}
        innerRadius={40 * scale}
        outerRadius={62 * scale}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-card-background"
          polarRadius={[45 * scale, 35 * scale]}
        />
        <RadialBar dataKey="wrongPercentage" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan
                      x={viewBox.cx! - 5}
                      y={viewBox.cy}
                      className="fill-foreground text-lg font-semibold"
                    >
                      {data[0].wrongPercentage.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx! + 13}
                      y={viewBox.cy}
                      className="fill-foreground text-sm font-semibold"
                    >
                      %
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  )
}
