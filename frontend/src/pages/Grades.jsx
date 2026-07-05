import { useState } from 'react'
import { mockGrades } from '../data/mockGrades'
import Card from '../components/ui/Card'
import ProgressRing from '../components/ui/ProgressRing'

function courseAverage(items) {
  const graded = items.filter((i) => i.score !== null)
  if (graded.length === 0) return null
  const totalWeight = graded.reduce((sum, i) => sum + i.weight, 0)
  const weighted = graded.reduce((sum, i) => sum + i.score * i.weight, 0)
  return totalWeight ? Math.round(weighted / totalWeight) : null
}

function Grades() {
  const [openCourse, setOpenCourse] = useState(mockGrades[0]?.courseId ?? null)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-navy">Grades & Performance</h1>
      <p className="text-gray-500 text-sm mt-1">Ringkasan nilai untuk semua mata kuliah semester ini.</p>

      <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        {mockGrades.map((course) => {
          const avg = courseAverage(course.items)
          return (
            <Card key={course.courseId} className="flex items-center gap-4">
              <ProgressRing percent={avg ?? 0} />
              <div>
                <p className="text-xs text-gray-500">{course.courseCode}</p>
                <p className="font-semibold text-neutral-dark text-sm">{course.courseName}</p>
                <p className="text-xs text-gray-500 mt-1">{avg !== null ? `${avg} / 100` : 'Belum dinilai'}</p>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="mt-8 space-y-4">
        {mockGrades.map((course) => {
          const isOpen = openCourse === course.courseId
          return (
            <div key={course.courseId} className="bg-white rounded-xl border border-border overflow-hidden">
              <button
                onClick={() => setOpenCourse(isOpen ? null : course.courseId)}
                className="w-full flex justify-between items-center px-5 py-4 text-left cursor-pointer"
              >
                <span className="font-medium text-neutral-dark">
                  {course.courseCode} - {course.courseName}
                </span>
                <span className="text-gray-400">{isOpen ? '▲' : '▼'}</span>
              </button>

              {isOpen && (
                <div className="overflow-x-auto border-t border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-xs text-gray-500 uppercase">
                        <th className="px-5 py-3 font-medium">Item Nilai</th>
                        <th className="px-5 py-3 font-medium">Bobot</th>
                        <th className="px-5 py-3 font-medium">Nilai</th>
                        <th className="px-5 py-3 font-medium">Rentang</th>
                        <th className="px-5 py-3 font-medium">Umpan Balik</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.items.map((item) => (
                        <tr key={item.name} className="border-t border-border">
                          <td className="px-5 py-3">
                            <p className="text-xs text-gray-400 uppercase">{item.type}</p>
                            <p className="text-navy font-medium">{item.name}</p>
                          </td>
                          <td className="px-5 py-3">{item.weight}%</td>
                          <td className="px-5 py-3">{item.score ?? '-'}</td>
                          <td className="px-5 py-3">{item.range}</td>
                          <td className="px-5 py-3 text-gray-500 italic">{item.feedback ?? 'Belum dinilai'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Grades
