<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $table = 'teams';
    protected $fillable = [
        'id',
        'name',
        'year',
        'championships'
    ];
    public $timestamps = false;

    public function drivers()
    {
        return $this->hasMany(Driver::class);
    }
}
