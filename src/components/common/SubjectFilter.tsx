import { Button } from '../ui/button'

interface SubjectFilterProps {
  subjects: string[]
  selectedSubjects: string[]
  onSubjectToggle: (subject: string) => void
}

export function SubjectFilter({ subjects, selectedSubjects, onSubjectToggle }: SubjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {subjects.map((subject) => (
        <Button
          key={subject}
          variant={selectedSubjects.includes(subject) ? 'accentOutline' : 'primaryOutline'}
          onClick={() => onSubjectToggle(subject)}
        >
          <div>{subject}</div>
        </Button>
      ))}
    </div>
  )
}
