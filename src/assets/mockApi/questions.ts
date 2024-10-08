import { Question } from '@/types'

// Mock data
export const mockQuestions: Question[] = [
  {
    id: 1,
    tier: 'Secondary',
    school: {
      name: 'Bukit Timah Primary School',
      logo: 'src/assets/schools/bukit-timah-primary-school.jpg',
    },
    examDetails: '2022 Sec 4 Additional Maths Prelims',
    wrongPercentage: 34,
    imageUrl: '/src/assets/questions/question1.png',
    blurredImageUrl: '/src/assets/questions/question1.png',
    author: { name: 'John Smith', avatar: '/src/assets/avatars/avatar1.svg' },
    attempts: 1224,
    likes: 10,
    subject: 'Math',
    options: ['A', 'B', 'C', 'D'],
    totalAttempts: 1000,
    correctAnswer: 0,
    correctAnswers: 650,
    wrongAnswers: 350,
    averageTime: 45,
    fastestTime: 15,
    solution: 'This is the solution to the question...',
  },
  {
    id: 2,
    tier: 'Primary',
    school: {
      name: 'Ang Mo Kio Primary School',
      logo: 'src/assets/schools/ang-mo-kio-primary-school.jpg',
    },
    examDetails: '2023 P6 Science SA1',
    wrongPercentage: 28,
    imageUrl: '/src/assets/questions/question2.png',
    blurredImageUrl: '/src/assets/questions/question2.png',
    author: { name: 'Sarah Lee', avatar: '/src/assets/avatars/avatar1.svg' },
    attempts: 856,
    likes: 15,
    subject: 'Science',
    options: ['True', 'False'],
    totalAttempts: 856,
    correctAnswer: 1,
    correctAnswers: 616,
    wrongAnswers: 240,
    averageTime: 30,
    fastestTime: 10,
    solution: 'The correct answer is True because...',
  },
  {
    id: 3,
    tier: 'Secondary',
    school: {
      name: 'Raffles Institution',
      logo: 'src/assets/schools/raffles-institution.jpg',
    },
    examDetails: '2023 Sec 3 Literature Midterms',
    wrongPercentage: 45,
    imageUrl: '/src/assets/questions/question3.png',
    blurredImageUrl: '/src/assets/questions/question3.png',
    author: { name: 'Michael Tan', avatar: '/src/assets/avatars/avatar1.svg' },
    attempts: 532,
    likes: 8,
    subject: 'Literature',
    options: ['Metaphor', 'Simile', 'Personification', 'Alliteration'],
    totalAttempts: 532,
    correctAnswer: 3,
    correctAnswers: 293,
    wrongAnswers: 239,
    averageTime: 60,
    fastestTime: 20,
    solution: 'The correct literary device used is Personification because...',
  },
  {
    id: 4,
    tier: 'Junior College',
    school: {
      name: 'Hwa Chong Institution',
      logo: 'src/assets/schools/hwa-chong-institution.jpg',
    },
    examDetails: '2022 JC2 H2 Chemistry Prelims',
    wrongPercentage: 62,
    imageUrl: '/src/assets/questions/question4.png',
    blurredImageUrl: '/src/assets/questions/question4.png',
    author: { name: 'Dr. Lim Siew Mei', avatar: '/src/assets/avatars/avatar1.svg' },
    attempts: 1102,
    likes: 25,
    subject: 'Chemistry',
    options: ['NaOH', 'HCl', 'H2SO4', 'CH3COOH'],
    totalAttempts: 1102,
    correctAnswer: 2,
    correctAnswers: 419,
    wrongAnswers: 683,
    averageTime: 90,
    fastestTime: 35,
    solution: 'The correct answer is H2SO4 because...',
  },
  {
    id: 5,
    tier: 'Secondary',
    school: { name: 'Dunman High School', logo: 'src/assets/schools/dunman-high-school.png' },
    examDetails: '2023 Sec 2 Geography CA2',
    wrongPercentage: 40,
    imageUrl: '/src/assets/questions/question5.png',
    blurredImageUrl: '/src/assets/questions/question5.png',
    author: { name: 'Tan Wei Ling', avatar: '/src/assets/avatars/avatar1.svg' },
    attempts: 743,
    likes: 12,
    subject: 'Geography',
    options: ['Erosion', 'Deposition', 'Transportation', 'Weathering'],
    totalAttempts: 743,
    correctAnswer: 1,
    correctAnswers: 446,
    wrongAnswers: 297,
    averageTime: 55,
    fastestTime: 18,
    solution: 'The correct process is Deposition because...',
  },
  {
    id: 6,
    tier: 'Primary',
    school: {
      name: 'Nanyang Primary School',
      logo: 'src/assets/schools/nanyang-primary-school.png',
    },
    examDetails: '2023 P4 English SA2',
    wrongPercentage: 22,
    imageUrl: '/src/assets/questions/question1.png',
    blurredImageUrl: '/src/assets/questions/question1.png',
    author: { name: 'Emily Wong', avatar: '/src/assets/avatars/avatar1.svg' },
    attempts: 921,
    likes: 18,
    subject: 'English',
    options: ['who', 'whom', 'whose', 'which'],
    totalAttempts: 921,
    correctAnswer: 3,
    correctAnswers: 718,
    wrongAnswers: 203,
    averageTime: 40,
    fastestTime: 12,
    solution: 'The correct answer is "whose" because it shows possession...',
  },
]
