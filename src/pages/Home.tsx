import { SubjectFilter } from '@/components/common/SubjectFilter'
import { QuestionList } from '@/components/home/QuestionList'
import { NavMenuItem, NavMenuItemType } from '@/components/ui-custom/navMenuItem'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { useState } from 'react'

const tiers = ['Primary', 'Secondary', 'Junior College']
const subjects = ['English', 'Math', 'Science', 'Physics', 'Chemistry']

export default function Home() {
  const [selectedTier, setSelectedTier] = useState(tiers[0])
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])

  return (
    <main className="bg-background px-8 py-12">
      <h1 className="mb-4 text-4xl text-primary">Problems</h1>
      <div className="">
        {/* Tier's NavMenu */}
        <ul className="flex space-x-8 py-2">
          {tiers.map((tier) => (
            <NavMenuItem
              key={tier}
              text={tier}
              type={NavMenuItemType.DEFAULT}
              selected={selectedTier === tier}
              clickFn={() => setSelectedTier(tier)}
            />
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <Button variant="primary">Filters</Button>
          <div className="h-6">
            <Separator className="w-[1.5px] bg-primary-weak dark:bg-primary-ghost" orientation="vertical" />
          </div>{' '}
          {/* Subject filter */}
          <div className="">
            <SubjectFilter
              subjects={subjects}
              selectedSubjects={selectedSubjects}
              onSubjectToggle={(subject) => {
                setSelectedSubjects((prev) =>
                  prev.includes(subject) ? prev.filter((s) => s !== subject) : [...prev, subject]
                )
              }}
            />
          </div>
        </div>
      </div>
      <div className="pt-4">
        <QuestionList tier={selectedTier} subjects={selectedSubjects} />
      </div>
    </main>
  )
}
