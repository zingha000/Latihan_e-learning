<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Assignment extends Model
{
    protected $fillable = [
        'pertemuan_id', 'judul', 'deskripsi', 'waktu_buka', 'waktu_tutup',
    ];

    protected function casts(): array
    {
        return [
            'waktu_buka' => 'datetime',
            'waktu_tutup' => 'datetime',
        ];
    }

    /**
     * @return BelongsTo<Pertemuan, $this>
     */
    public function pertemuan(): BelongsTo
    {
        return $this->belongsTo(Pertemuan::class);
    }

    /**
     * @return HasMany<Submission>
     */
    public function submissions(): HasMany
    {
        return $this->hasMany(Submission::class);
    }
}
