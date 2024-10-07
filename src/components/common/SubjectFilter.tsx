import { Button } from '../ui/button'

interface SubjectFilterProps {
  subjects: string[]
  selectedSubjects: string[]
  onSubjectToggle: (subject: string) => void
}

export function SubjectFilter({ subjects, selectedSubjects, onSubjectToggle }: SubjectFilterProps) {
  return (
    <div className="ml-4 flex flex-wrap gap-1">
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
