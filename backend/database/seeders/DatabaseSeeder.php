<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Submission;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        $users = collect([
            ['name' => 'Ahmad Fauzi', 'nim' => '1211000001', 'email' => 'ahmad.fauzi@widyatama.ac.id'],
            ['name' => 'Siti Nurhaliza', 'nim' => '1211000002', 'email' => 'siti.nurhaliza@widyatama.ac.id'],
            ['name' => 'Budi Santoso', 'nim' => '1211000003', 'email' => 'budi.santoso@widyatama.ac.id'],
            ['name' => 'Dewi Lestari', 'nim' => '1211000004', 'email' => 'dewi.lestari@widyatama.ac.id'],
            ['name' => 'Rizky Pratama', 'nim' => '1211000005', 'email' => 'rizky.pratama@widyatama.ac.id'],
            ['name' => 'Putri Amelia', 'nim' => '1211000006', 'email' => 'putri.amelia@widyatama.ac.id'],
        ])->map(fn ($data) => User::create($data + ['password' => 'password']));

        $courses = collect([
            ['kode' => 'IF301', 'nama' => 'Pemrograman Web', 'fakultas' => 'Fakultas Teknik', 'semester' => 'Ganjil 2025/2026', 'dosen_nama' => 'Dr. Andi Wijaya, M.Kom.', 'color_variant' => 1],
            ['kode' => 'IF302', 'nama' => 'Basis Data Lanjut', 'fakultas' => 'Fakultas Teknik', 'semester' => 'Ganjil 2025/2026', 'dosen_nama' => 'Ir. Bambang Sutrisno, M.T.', 'color_variant' => 2],
            ['kode' => 'MJ201', 'nama' => 'Manajemen Pemasaran', 'fakultas' => 'Fakultas Ekonomi & Bisnis', 'semester' => 'Ganjil 2025/2026', 'dosen_nama' => 'Dr. Citra Ayu, M.M.', 'color_variant' => 3],
            ['kode' => 'MJ305', 'nama' => 'Manajemen Keuangan', 'fakultas' => 'Fakultas Ekonomi & Bisnis', 'semester' => 'Genap 2025/2026', 'dosen_nama' => 'Dr. Dedi Kurniawan, M.M.', 'color_variant' => 4],
            ['kode' => 'DKV210', 'nama' => 'Desain Komunikasi Visual II', 'fakultas' => 'Fakultas Seni & Desain', 'semester' => 'Genap 2025/2026', 'dosen_nama' => 'Rina Marlina, M.Ds.', 'color_variant' => 1],
            ['kode' => 'HK150', 'nama' => 'Hukum Perdata', 'fakultas' => 'Fakultas Hukum', 'semester' => 'Ganjil 2025/2026', 'dosen_nama' => 'Dr. Eka Saputra, S.H., M.H.', 'color_variant' => 2],
        ])->map(function ($data) {
            $course = Course::create($data);

            foreach (range(1, 16) as $nomor) {
                $course->pertemuans()->create([
                    'nomor' => $nomor,
                    'judul' => match ($nomor) {
                        8 => 'Ujian Tengah Semester (UTS)',
                        16 => 'Ujian Akhir Semester (UAS)',
                        default => "Pertemuan {$nomor}",
                    },
                    'is_uts' => $nomor === 8,
                    'is_uas' => $nomor === 16,
                ]);
            }

            return $course;
        });

        // Enrollments: each student takes a different subset of courses.
        $enrollmentMap = [
            0 => [0, 1, 2], // Ahmad
            1 => [0, 2, 4], // Siti
            2 => [1, 3],    // Budi
            3 => [2, 3, 5], // Dewi
            4 => [0, 4, 5], // Rizky
            5 => [1, 3, 4], // Putri
        ];

        foreach ($enrollmentMap as $userIndex => $courseIndexes) {
            foreach ($courseIndexes as $courseIndex) {
                Enrollment::create([
                    'user_id' => $users[$userIndex]->id,
                    'course_id' => $courses[$courseIndex]->id,
                ]);
            }
        }

        // A couple of assignments per course (skeleton only, detail owned by teammate).
        $courses->each(function (Course $course) {
            foreach ([4, 12] as $nomor) {
                $pertemuan = $course->pertemuans()->where('nomor', $nomor)->first();

                $pertemuan->assignments()->create([
                    'judul' => "Tugas Pertemuan {$nomor}",
                    'deskripsi' => "Kerjakan tugas sesuai materi pertemuan {$nomor} dan kumpulkan sebelum batas waktu.",
                    'waktu_buka' => now()->subDays(3),
                    'waktu_tutup' => now()->addDays(7),
                ]);
            }
        });

        // Sample submissions on Pemrograman Web / Pertemuan 4 to show each status badge.
        $assignment = $courses[0]->pertemuans()->where('nomor', 4)->first()->assignments()->first();

        Submission::create([
            'assignment_id' => $assignment->id,
            'user_id' => $users[0]->id, // Ahmad: dinilai
            'file_path' => 'submissions/ahmad-tugas4.pdf',
            'nilai' => 85,
            'feedback' => 'Bagus, tingkatkan detail implementasi.',
            'submitted_at' => now()->subDays(2),
        ]);

        Submission::create([
            'assignment_id' => $assignment->id,
            'user_id' => $users[1]->id, // Siti: submitted, belum dinilai
            'file_path' => 'submissions/siti-tugas4.pdf',
            'submitted_at' => now()->subDay(),
        ]);

        // Rizky: belum submit sama sekali (tidak dibuatkan row).
    }
}
