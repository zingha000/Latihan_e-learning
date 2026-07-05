// ponytail: no /grades endpoint yet either, structure matches Pertemuan (UTS/UAS) + Assignment weighting from the PRD
export const mockGrades = [
  {
    courseId: 1,
    courseCode: 'ENG62110',
    courseName: 'Statistika',
    items: [
      { type: 'UTS', name: 'UTS Statistika', weight: 30, score: null, range: '0-100', feedback: null },
      { type: 'Tugas', name: 'Tugas 1', weight: 20, score: 85, range: '0-100', feedback: 'Bagus, perhatikan bagian analisis.' },
      { type: 'UAS', name: 'Ujian Akhir Semester', weight: 50, score: null, range: '0-100', feedback: null },
    ],
  },
  {
    courseId: 2,
    courseCode: 'MATH202',
    courseName: 'Kalkulus Lanjut',
    items: [
      { type: 'UTS', name: 'UTS Kalkulus', weight: 30, score: 78, range: '0-100', feedback: 'Cukup baik.' },
      { type: 'Tugas', name: 'Tugas 1', weight: 20, score: 90, range: '0-100', feedback: 'Sangat baik.' },
      { type: 'UAS', name: 'Ujian Akhir Semester', weight: 50, score: 88, range: '0-100', feedback: 'Pertahankan.' },
    ],
  },
  {
    courseId: 3,
    courseCode: 'CS101',
    courseName: 'Pengantar Ilmu Komputer',
    items: [
      { type: 'UTS', name: 'UTS Ilmu Komputer', weight: 30, score: null, range: '0-100', feedback: null },
      { type: 'Tugas', name: 'Tugas 1', weight: 20, score: null, range: '0-100', feedback: null },
      { type: 'UAS', name: 'Ujian Akhir Semester', weight: 50, score: null, range: '0-100', feedback: null },
    ],
  },
  {
    courseId: 4,
    courseCode: 'ENG301',
    courseName: 'Penulisan Teknis',
    items: [
      { type: 'UTS', name: 'UTS Penulisan Teknis', weight: 30, score: 80, range: '0-100', feedback: 'Struktur sudah rapi.' },
      { type: 'Tugas', name: 'Tugas 1', weight: 20, score: 75, range: '0-100', feedback: 'Perbaiki sitasi.' },
      { type: 'UAS', name: 'Ujian Akhir Semester', weight: 50, score: null, range: '0-100', feedback: null },
    ],
  },
]
