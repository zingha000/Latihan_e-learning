import { useMemo, useState } from 'react'
import { mockCourses } from '../data/mockCourses'
import Card from '../components/ui/Card'

function Dashboard() {
  const [query, setQuery] = useState('')
  const [semester, setSemester] = useState('')
  const [sort, setSort] = useState('nama')

  const semesters = useMemo(() => [...new Set(mockCourses.map((c) => c.semester))], [])

  const courses = useMemo(() => {
    return mockCourses
      .filter((c) => (c.nama + c.kode).toLowerCase().includes(query.toLowerCase()))
      .filter((c) => !semester || c.semester === semester)
      .sort((a, b) => (sort === 'progress' ? b.progress - a.progress : a.nama.localeCompare(b.nama)))
  }, [query, semester, sort])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-navy">My Courses</h1>
      <p className="text-gray-500 text-sm mt-1">Manage your active semester enrollments.</p>

      <div className="flex flex-col sm:flex-row gap-3 mt-5">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search courses..."
          className="flex-1 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30"
        />
        <select
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="border border-border rounded-lg px-3 py-2 text-sm"
        >
          <option value="">Semua Semester</option>
          {semesters.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-border rounded-lg px-3 py-2 text-sm"
        >
          <option value="nama">Sort: Nama</option>
          <option value="progress">Sort: Progress</option>
        </select>
      </div>

      <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id}>
            <span className={`text-xs font-semibold ${course.colorVariant === 'orange' ? 'text-orange' : 'text-navy'}`}>
              {course.kode}
            </span>
            <h3 className="font-semibold text-neutral-dark mt-1">{course.nama}</h3>
            <p className="text-xs text-gray-500 mt-1">{course.dosenNama}</p>

            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Course Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${course.colorVariant === 'orange' ? 'bg-orange' : 'bg-navy'}`}
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </Card>
        ))}

        {courses.length === 0 && (
          <p className="text-sm text-gray-500 col-span-full">Tidak ada course yang cocok.</p>
        )}
      </div>
    </div>
  )
}

export default Dashboard
