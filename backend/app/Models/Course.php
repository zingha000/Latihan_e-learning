<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    protected $fillable = [
        'kode', 'nama', 'fakultas', 'semester', 'dosen_nama', 'color_variant',
    ];

    /**
     * @return HasMany<Pertemuan>
     */
    public function pertemuans(): HasMany
    {
        return $this->hasMany(Pertemuan::class)->orderBy('nomor');
    }

    /**
     * @return HasMany<Enrollment>
     */
    public function enrollments(): HasMany
    {
        return $this->hasMany(Enrollment::class);
    }
}
