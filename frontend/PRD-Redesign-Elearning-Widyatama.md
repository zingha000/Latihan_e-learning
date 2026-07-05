# Product Requirements Document (PRD)
## Redesign UI/UX — Portal Mahasiswa E-Learning Universitas Widyatama
**Versi:** 1.1 (Final — Fase 1)
**Tanggal:** 6 Juli 2026
**Disusun oleh:** WOY (Acep Ega) — simulasi kolaborasi tim
**Status:** Final — siap dipakai sebagai acuan development Fase 1

---

## 1. Latar Belakang

E-learning Universitas Widyatama saat ini berjalan di atas **Moodle LMS** dengan tema custom kampus. Sistem sudah fungsional dan lengkap secara fitur (course management, assignment, quiz, grading, forum), namun tampilannya dinilai kurang menarik dan terasa dated:

- Kombinasi warna tidak konsisten (navy, kuning, abu-abu bercampur tanpa hierarki jelas)
- Layout sidebar navigation Moodle bawaan terasa berat dan berantakan (menu menumpuk banyak level)
- Tidak ada identitas visual modern yang mencerminkan kampus
- Pengalaman mobile hanya hasil "responsive shrink" bawaan Moodle, bukan didesain ulang

Proyek ini adalah **simulasi kolaborasi tim development**: membangun ulang tampilan dan sebagian alur Portal Mahasiswa e-learning, dengan backend logic yang tetap mengacu pada perilaku sistem asli (bukan membangun LMS baru dari nol). Mockup visual awal (Login, Dashboard, Course Detail, Assignment, Status Pengumpulan, Grades) telah dibuat menggunakan Stitch AI dan direvisi agar sesuai branding & struktur data asli, dan menjadi acuan visual untuk implementasi.

## 2. Tujuan

1. Membangun ulang UI Portal Mahasiswa dengan gaya **minimalist, sedikit dekorasi, warna dominan** sesuai identitas visual Widyatama.
2. Merapikan alur (flow) yang terasa membingungkan di versi asli (contoh: navigasi bertingkat, informasi submission yang terpisah-pisah).
3. Menghasilkan struktur project yang bisa dikerjakan kolaboratif per fitur, masing-masing anggota tim mengerjakan fullstack (frontend React + backend API Laravel) untuk fitur yang dipegang.
4. Menjadi bahan latihan simulasi kerja tim seperti proyek nyata (branching, task division, dokumentasi).

## 3. Ruang Lingkup

### 3.1 In-Scope (Fase 1 — Portal Mahasiswa)
- Login (username/password + opsi Google SSO)
- Dashboard "My Courses" (grid mata kuliah)
- Detail Mata Kuliah (section materi, tugas, forum, activity completion)
- Assignment (lihat detail, upload submission, lihat status)
- Quiz (soal & submit jawaban, lihat status/nilai)
- Grades / Nilai (per mata kuliah, breakdown per komponen)
- Profile (info akun, ringkasan course, aktivitas login)
- Responsive/mobile view untuk seluruh halaman di atas

### 3.2 Out-of-Scope (Fase 1)
- Portal Dosen (menyusul di Fase 2)
- Portal Akademik/Admin
- Notifikasi & pesan real-time (disebutkan akan dibahas belakangan)
- Integrasi langsung ke server Moodle asli (project ini adalah *rebuild* tampilan & alur, bukan modifikasi sistem produksi)
- Perubahan besar pada business logic penilaian/course engine

## 4. Target Pengguna

| Role | Deskripsi |
|---|---|
| Mahasiswa | Pengguna utama Fase 1 — mengakses materi, mengumpulkan tugas, mengerjakan kuis, memantau nilai |
| (Fase 2) Dosen | Mengelola kelas, menilai tugas — di luar scope dokumen ini |

## 5. Analisis Sistem Eksisting → Masalah & Peluang Desain

| Halaman | Kondisi Sekarang | Masalah | Arah Perbaikan |
|---|---|---|---|
| Login | Modal overlay di atas foto besar, banner peringatan merah mencolok | Kontras rendah, terkesan darurat/urgent terus-menerus | Form login mandiri (bukan modal), pesan info dibuat sebagai banner informatif bukan alert merah |
| Dashboard | Grid kartu warna-warni acak per course, sidebar navigasi panjang menumpuk | Warna kartu tidak bermakna, sidebar berat & scroll panjang | Kartu course dengan sistem warna terbatas/konsisten (by fakultas/semester), sidebar disederhanakan jadi collapsible groups |
| Course Detail | List section vertikal panjang, tiap section flat tanpa progress overview | Sulit lihat progress keseluruhan course | Tambahkan progress bar/percentage di header course, section bisa collapse dengan indikator selesai |
| Assignment | Info status dalam tabel generik | Butuh scroll untuk tahu status | Status ringkas di atas (badge: Belum submit/Sudah submit/Dinilai), detail di bawah |
| Quiz | Halaman esai polos, tanpa timer visual | Kurang jelas waktu & progress soal | Tambahkan indikator waktu tersisa & progress soal jika multi-soal |
| Grades | Tabel data Moodle apa adanya | Informasional tapi kaku | Ringkasan visual (misal progress ring per course) + tabel detail |
| Profile | Layout 3 kolom padat | Terlalu banyak informasi sekaligus | Kelompokkan jadi tab/section: Akun, Aktivitas, Course |
| Mobile | Navbar icon-only, konten stack | Fungsional tapi terasa "hasil susut" dari desktop | Desain mobile-first terpisah untuk navigasi utama (bottom nav / hamburger drawer yang rapi) |

## 6. Arahan Desain (Design Direction)

- **Gaya:** Minimalist, dekorasi seperlunya, tipografi jadi elemen utama hierarki
- **Warna:** Dominan warna identitas Widyatama (lihat palet final di bawah)
- **Komponen:** Card, badge status, progress indicator, collapsible section
- **Prinsip:** Konsistensi warna per fungsi (misal: 1 warna aksen untuk status "selesai", 1 warna untuk "perlu aksi", bukan warna acak per course)

> **Palet warna final (berdasarkan logo resmi Universitas Widyatama):**

| Warna | Hex (indikatif) | Penggunaan |
|---|---|---|
| Primary — Navy/Indigo | `#2E3192` | Warna utama: navbar, heading, tombol utama, teks judul |
| Secondary — Orange/Gold | `#F7941D` | Aksen: highlight, badge status "aktif/perlu aksi", ikon, garis pemisah |
| Neutral Light | `#F5F6FA` | Latar halaman/section |
| Neutral Dark (teks) | `#2D2D2D` | Teks body |
| Success (status selesai) | `#2E7D32` | Badge "Done"/"Dinilai" — tetap gunakan hijau agar berbeda dari orange (menghindari makna ganda dengan aksen) |
| Border/Divider | `#E0E0E0` | Garis antar section, card border |

**Prinsip pemakaian:** Navy jadi warna dominan (branding & struktur), orange dipakai *sparingly* sebagai aksen (bukan warna latar besar) agar tetap terasa minimalist — sejalan dengan arahan "warna dominan tapi sedikit dekorasi". Hindari mencampur banyak warna course card seperti versi Moodle asli; gunakan variasi *tint* dari navy/orange saja untuk membedakan kategori course.

## 7. Daftar Halaman & Fitur (Fase 1)

1. **Login**
   - Form username/password
   - Tombol Google SSO
   - Link forgot password
   - Info/pengumuman (non-intrusive)

2. **Dashboard (My Courses)**
   - Grid course card (nama MK, kode, progress %, thumbnail warna by kategori)
   - Search & filter (semester, fakultas)
   - Sort (nama, progress)

3. **Course Detail**
   - Header: nama course + overall progress
   - Struktur konten berbasis **16 section "Pertemuan"** (Pertemuan 1–16), judul tiap section dinamis/dapat diedit dari Portal Dosen
   - Pertemuan 8 = **UTS** dan Pertemuan 16 = **UAS**, ditandai badge oranye khusus agar mudah dikenali
   - Tiap section berisi campuran item sesuai yang diinput dosen: materi (PDF), tugas, kuis, forum — bukan dikelompokkan per jenis, melainkan urut sesuai pertemuan
   - Tiap item punya status "Done/Belum" (activity completion)
   - Collapse/expand per section

4. **Assignment Detail**
   - Deskripsi tugas, waktu buka/tutup
   - Status badge (Belum submit / Submitted / Dinilai)
   - Upload file & lihat riwayat submission
   - Komentar/feedback dosen

5. **Quiz**
   - Tampilan soal (esai atau pilihan ganda)
   - Status: Started/Finished, durasi, nilai (jika sudah dinilai)

6. **Grades**
   - Ringkasan nilai per course (progress ring / summary card)
   - Tabel detail per komponen penilaian (assignment, UTS, UAS)

7. **Profile**
   - Info akun & edit profile
   - Daftar course yang diikuti
   - Riwayat login (opsional, low priority)
   - QR code mobile app (opsional, bisa dihilangkan di Fase 1 kalau tidak relevan)

8. **Mobile Responsive**
   - Navigasi utama: bottom nav bar atau hamburger drawer
   - Semua halaman di atas menyesuaikan layout 1 kolom

## 8. User Flow Utama

```
Login
  └─▶ Dashboard (My Courses)
        └─▶ Course Detail
              ├─▶ Materi (PDF/link) → Mark as done
              ├─▶ Assignment Detail → Upload Submission → Status updated
              ├─▶ Quiz → Isi jawaban → Submit → Lihat status
              └─▶ Forum Pertemuan (opsional, out-of-scope styling detail)
        └─▶ Grades (lihat dari sidebar/menu)
        └─▶ Profile (lihat dari navbar)
```

## 9. Kebutuhan Teknis

| Layer | Teknologi |
|---|---|
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| Backend/API | Laravel (REST API, terpisah dari frontend) |
| Auth | Session/token-based (simulasi login + Google OAuth opsional) |
| Data | Dummy/mock data untuk course, assignment, grades (tidak connect ke Moodle produksi) |

## 10. Pembagian Kerja (Simulasi Kolaborasi)

Dibagi **per halaman**, setiap orang mengerjakan fullstack (frontend React + backend API Laravel) untuk halaman yang dipegang. Sebelum split, **design token & komponen shared** (warna, tipografi, Button, Badge, Card, Navbar dasar dari hasil mockup Stitch) dikerjakan bersama dulu sebagai fondasi.

| Orang 1 | Orang 2 |
|---|---|
| Login - Portal Mahasiswa (Auth) | Detail Mata Kuliah (Course Detail — 16 pertemuan, badge UTS/UAS, mixed content per section) |
| Dashboard - My Courses | Assignment (upload tugas + detail) |
| Grades & Performance | Status Pengumpulan (halaman status submission) |
| *(menyusul)* Profile | *(menyusul)* Quiz |

**Alasan pembagian:**
- **Orang 1** pegang "shell" aplikasi (Login, Dashboard, Grades) — fondasi navigasi & layout utama yang jadi entry point bagi halaman lain.
- **Orang 2** pegang satu rangkaian alur inti course (Course Detail → Assignment → Status Pengumpulan) — alur yang saling terhubung sehingga lebih efisien dipegang satu orang dari ujung ke ujung agar state-nya konsisten.
- Course Detail termasuk paling kompleks (16 section dinamis + badge ujian + campuran tipe konten per section), sehingga bebannya diimbangi dengan 2 halaman lanjutan yang berkaitan, setara dengan gabungan 3 halaman Orang 1.

**Urutan pengerjaan yang disarankan:**
1. Setup bersama: Tailwind config (warna, font dari design token) + komponen shared (Button, Badge, Card, Navbar)
2. Orang 1: Login → Dashboard (jadi entry point yang dibutuhkan Orang 2 untuk testing Course Detail)
3. Orang 2: mulai Course Detail begitu Dashboard dasar selesai (butuh route dari Dashboard)
4. Paralel: Orang 1 lanjut Grades, Orang 2 lanjut Assignment + Status Pengumpulan
5. Terakhir (menyusul, di luar Fase 1 inti): Profile (Orang 1) & Quiz (Orang 2) — tidak jadi blocker alur utama

*(Penetapan nama untuk Orang 1/Orang 2 menyusul sesuai kesepakatan tim.)*

## 11. Milestone (Draft)

| Tahap | Output |
|---|---|
| 1. Setup | Repo, struktur folder, base layout (navbar, sidebar, design token warna) |
| 2. Auth | Login flow selesai |
| 3. Core Dashboard | Dashboard + Course Detail selesai |
| 4. Fitur Course | Assignment + Quiz selesai |
| 5. Fitur Pendukung | Grades + Profile selesai |
| 6. Polish | Responsive mobile, QA, dokumentasi |

## 12. Hal yang Masih Menunggu Konfirmasi

- [x] Palet warna final (logo & warna resmi Widyatama) — sudah dikonfirmasi (navy `#2E3192` + orange `#F7941D`)
- [x] Pembagian halaman final antar anggota tim — sudah ditentukan (lihat Bagian 10), penetapan nama anggota menyusul
- [x] Apakah fitur Forum per pertemuan masuk Fase 1 atau ditunda — **masuk Fase 1**, styling minimal (1 item dalam list Pertemuan dengan badge status, tanpa desain thread mendalam)
- [x] Apakah Notifikasi tetap out-of-scope penuh atau ada versi sederhana — **tetap out-of-scope penuh** di Fase 1

---
*Dokumen ini sudah final untuk Fase 1 (Portal Mahasiswa) dan siap dipakai sebagai acuan development & pembagian kerja tim. Revisi lanjutan dapat dilakukan jika ada perubahan scope di tengah jalan.*
