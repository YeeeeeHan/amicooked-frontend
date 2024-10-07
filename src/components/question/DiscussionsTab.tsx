import { Question } from '@/types'

interface DiscussionsTabProps {
  question: Question
}

export function DiscussionsTab({ question }: DiscussionsTabProps) {
  // Mock data for discussions
  const discussions = [
    { id: 1, user: 'User1', content: 'Great question!', timestamp: '2023-04-20 10:30' },
    { id: 2, user: 'User2', content: 'I found this challenging.', timestamp: '2023-04-20 11:15' },
    // ... more discussions
  ]

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Discussions</h3>
      <div className="space-y-4">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="border-b pb-2">
            <div className="flex justify-between">
              <span className="font-bold">{discussion.user}</span>
              <span className="text-sm text-gray-500">{discussion.timestamp}</span>
            </div>
            <p>{discussion.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
