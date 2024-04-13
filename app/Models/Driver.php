<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    use HasFactory;

    protected $table = 'drivers';
    protected $fillable = [
        'id',
        'name',
        'birth',
        'championships',
        'victories',
        'team_id'
    ];
    public $timestamps = false;

    public function team()
    {
        return $this->belongsTo(Team::class, 'team_id');
    }
}
