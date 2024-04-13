<?php

namespace Database\Seeders;

use App\Models\Team;
use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{
    public function run()
    {
        Team::factory()->create([
            'name' => 'Scuderia Ferrari',
            'year' => 1950,
            'championships' => 16
        ]);

        Team::factory()->create([
            'name' => 'Mercedes-AMG Petronas F1 Team',
            'year' => 1970,
            'championships' => 8
        ]);

        Team::factory()->create([
            'name' => 'Oracle Red Bull Racing',
            'year' => 1997,
            'championships' => 6
        ]);
    }
}
