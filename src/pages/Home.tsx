import { SubjectFilter } from '@/components/common/SubjectFilter'
import { QuestionList } from '@/components/home/QuestionList'
import { NavMenuItem, NavMenuItemType } from '@/components/ui-custom/navMenuItem'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { useEffect, useState } from 'react'

const tiers = ['Primary', 'Secondary', 'Junior College']
const subjects = ['English', 'Math', 'Science', 'Physics', 'Chemistry']

export default function Home() {
  const [selectedTier, setSelectedTier] = useState(tiers[0])
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Adjust the duration as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={loading ? 'loading' : ''}>
      {loading ? (
        <div>Loading!...!!!!!!</div>
      ) : (
        <main className="bg-background px-16 pt-8">
          <h1 className="mb-8 text-4xl text-primary">Discover Problems</h1>
          <div className="px-2.5">
            {/* Tier's NavMenu */}
            <ul className="flex space-x-8 py-4">
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
            <div className="flex h-8 items-center space-x-4">
              <Button variant="primary">Filters</Button>
              <Separator className="w-[2px] bg-primary-weak" orientation="vertical" />
              {/* Subject filter */}
              <div className="">
                <SubjectFilter
                  subjects={subjects}
                  selectedSubjects={selectedSubjects}
                  onSubjectToggle={(subject) => {
                    setSelectedSubjects((prev) =>
                      prev.includes(subject)
                        ? prev.filter((s) => s !== subject)
                        : [...prev, subject]
                    )
                  }}
                />
              </div>
            </div>
          </div>
          <div className="pt-8">
            <QuestionList tier={selectedTier} subjects={selectedSubjects} />
          </div>{' '}
        </main>
      )}
    </div>
  )
}
