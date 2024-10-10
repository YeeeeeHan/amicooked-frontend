import Avatar from '@/assets/avatars/avatar1.svg'
import Logo from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/useTheme'
import { Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NavBar() {
  const { theme, toggleTheme } = useTheme()

  return (
    // border-b-2 border-primary-weak
    <div className="sticky top-0 z-50 flex h-16 items-center justify-between bg-background px-8 dark:border-primary-ghost">
      <div className="flex items-center space-x-8">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <Link to="/" className="text-md font-semibold text-primary">
          Problems
        </Link>
        <Link to="/discussion" className="text-md font-medium text-primary-strong">
          Discussion
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            console.log('Theme toggle button clicked')
            toggleTheme()
          }}
        >
          {theme === 'light' ? <Moon className="size-6" /> : <Sun className="size-6" />}
        </Button>
        <Link to="/profile">
          <img src={Avatar} alt="Profile" />
        </Link>
      </div>
    </div>
  )
}
