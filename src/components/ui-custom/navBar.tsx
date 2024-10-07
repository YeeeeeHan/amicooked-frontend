import Avatar from '@/assets/avatars/avatar1.svg'
import Logo from '@/assets/logo.svg'
import { Link } from 'react-router-dom'

export function NavBar({ isDarkMode, setIsDarkMode }) {
  // Accept props
  return (
    <div className="flex items-center justify-between bg-background px-16 pt-3">
      <div className="flex h-14 items-center space-x-8">
        <div>
          <img src={Logo} />
        </div>
        <Link to="/" className="text-md font-semibold text-primary">
          Problems
        </Link>
        <Link to="/discussion" className="text-md font-medium text-primary-strong">
          Discussion
        </Link>
      </div>
      <div className="flex h-14 items-center space-x-8">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="text-md font-medium text-primary-strong"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'} {/* Toggle button */}
        </button>
        <Link to="/profile">
          <img src={Avatar}></img>
        </Link>
      </div>
    </div>
  )
}
