import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const NAV_ITEMS = [
  { to: '/', label: 'My Courses', end: true },
  { to: '/grades', label: 'Grades' },
  { to: '/profile', label: 'Profile' },
]

function MainLayout() {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-neutral-light flex">
      <aside className="w-56 bg-white border-r border-border flex flex-col shrink-0">
        <div className="px-5 py-6">
          <p className="font-bold text-navy leading-tight">Universitas Widyatama</p>
          <p className="text-xs text-gray-400">Academic Portal</p>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive ? 'bg-navy/10 text-navy' : 'text-gray-600 hover:bg-neutral-light'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-border">
          <p className="px-3 text-sm font-medium text-neutral-dark truncate">{user?.name}</p>
          <button
            onClick={logout}
            className="mt-1 w-full text-left px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-neutral-light cursor-pointer"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
