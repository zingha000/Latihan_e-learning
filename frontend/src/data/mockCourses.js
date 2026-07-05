// ponytail: no /courses endpoint on the backend yet, shape mirrors the real Course/Pertemuan schema so swapping to an API call later is a one-line change
export const mockCourses = [
  { id: 1, kode: 'ENG62110', nama: 'Statistika', fakultas: 'Sistem Informasi', semester: 'Ganjil 2026', dosenNama: 'Dr. Budi Santoso', colorVariant: 'navy', progress: 45 },
  { id: 2, kode: 'MATH202', nama: 'Kalkulus Lanjut', fakultas: 'Teknik Informatika', semester: 'Ganjil 2026', dosenNama: 'Dr. Siti Aminah', colorVariant: 'orange', progress: 82 },
  { id: 3, kode: 'CS101', nama: 'Pengantar Ilmu Komputer', fakultas: 'Teknik Informatika', semester: 'Ganjil 2026', dosenNama: 'Ir. Rahmat Hidayat', colorVariant: 'navy', progress: 12 },
  { id: 4, kode: 'ENG301', nama: 'Penulisan Teknis', fakultas: 'Sastra Inggris', semester: 'Ganjil 2026', dosenNama: 'Dra. Lina Marlina', colorVariant: 'orange', progress: 67 },
]
