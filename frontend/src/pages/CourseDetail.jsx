import { useState } from 'react'
import PertemuanQuickNav from '../components/PertemuanQuickNav'

const dummyPertemuan = [
  { id: 1, nomor: 1, judul: "Pengantar HCI", tag: null, selesai: true },
  { id: 2, nomor: 2, judul: "User-Centered Design", tag: null, selesai: true },
  { id: 3, nomor: 3, judul: "Prototyping & Wireframing", tag: null, selesai: false },
  { id: 4, nomor: 4, judul: "Usability Testing", tag: null, selesai: false },
  { id: 5, nomor: 5, judul: "Heuristic Evaluation", tag: null, selesai: false },
  { id: 6, nomor: 6, judul: "Information Architecture", tag: null, selesai: false },
  { id: 7, nomor: 7, judul: "Review Pra-UTS", tag: null, selesai: false },
  { id: 8, nomor: 8, judul: "Ujian Tengah Semester", tag: "UTS", selesai: false },
  { id: 9, nomor: 9, judul: "Interaction Patterns", tag: null, selesai: false },
  { id: 10, nomor: 10, judul: "Accessibility Design", tag: null, selesai: false },
  { id: 11, nomor: 11, judul: "Design Systems", tag: null, selesai: false },
  { id: 12, nomor: 12, judul: "Mobile UX Principles", tag: null, selesai: false },
  { id: 13, nomor: 13, judul: "User Research Methods", tag: null, selesai: false },
  { id: 14, nomor: 14, judul: "Case Study Discussion", tag: null, selesai: false },
  { id: 15, nomor: 15, judul: "Review Pra-UAS", tag: null, selesai: false },
  { id: 16, nomor: 16, judul: "Ujian Akhir Semester", tag: "UAS", selesai: false },
]

function CourseDetail() {
  const [activeId, setActiveId] = useState(3)

  const activePertemuan = dummyPertemuan.find((p) => p.id === activeId)

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-navy">Human Computer Interaction</h1>
        <p className="text-sm text-gray-500">CS-402 - Semester Genap 2025/2026</p>
        <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden max-w-md">
          <div className="h-full bg-orange" style={{ width: '65%' }} />
        </div>
      </div>

      <div className="flex gap-6 items-start">
        <PertemuanQuickNav
          pertemuanList={dummyPertemuan}
          activeId={activeId}
          onSelect={setActiveId}
        />

        <div className="flex-1 bg-white border border-gray-200 rounded-xl p-5">
          <h2 className="font-medium text-gray-900">
            Pertemuan {activePertemuan.nomor} - {activePertemuan.judul}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Konten materi/tugas/kuis/forum untuk pertemuan ini akan tampil di sini.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail