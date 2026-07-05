import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { mockCourses } from '../data/mockCourses'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

const TABS = ['Akun', 'Course']

function Profile() {
  const { user, logout } = useAuth()
  const [tab, setTab] = useState('Akun')

  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-2xl font-semibold text-navy">Profile</h1>

      <div className="flex gap-2 mt-5 border-b border-border">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px cursor-pointer ${
              tab === t ? 'border-navy text-navy' : 'border-transparent text-gray-500'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'Akun' && (
        <Card className="mt-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center text-navy font-semibold text-xl">
              {user?.name?.[0] ?? '?'}
            </div>
            <div>
              <p className="font-semibold text-neutral-dark">{user?.name}</p>
              <p className="text-sm text-gray-500">{user?.nim}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>

          <Button variant="outline" onClick={logout} className="mt-6">
            Logout
          </Button>
        </Card>
      )}

      {tab === 'Course' && (
        <div className="grid gap-4 mt-5 sm:grid-cols-2">
          {mockCourses.map((c) => (
            <Card key={c.id} className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500">{c.kode}</p>
                <p className="font-medium text-neutral-dark">{c.nama}</p>
              </div>
              <Badge tone={c.progress === 100 ? 'success' : 'action'}>{c.progress}%</Badge>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default Profile
