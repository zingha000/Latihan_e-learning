import { Outlet, Link } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-navy text-white px-6 py-4 flex gap-6">
        <Link to="/" className="font-semibold">Dashboard</Link>
        <Link to="/grades">Grades</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout