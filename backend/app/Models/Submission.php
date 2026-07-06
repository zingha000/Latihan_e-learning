<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Submission extends Model
{
    protected $fillable = [
        'assignment_id', 'user_id', 'file_path', 'nilai', 'feedback', 'submitted_at',
    ];

    protected function casts(): array
    {
        return [
            'nilai' => 'decimal:2',
            'submitted_at' => 'datetime',
        ];
    }

    /**
     * Belum submit / Submitted / Dinilai, derived per PRD status badge.
     */
    protected function status(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->nilai !== null
                ? 'dinilai'
                : ($this->submitted_at !== null ? 'submitted' : 'belum_submit'),
        );
    }

    /**
     * @return BelongsTo<Assignment, $this>
     */
    public function assignment(): BelongsTo
    {
        return $this->belongsTo(Assignment::class);
    }

    /**
     * @return BelongsTo<User, $this>
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
