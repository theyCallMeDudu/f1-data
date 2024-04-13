<?php

namespace Database\Seeders;

use App\Models\Driver;
use Illuminate\Database\Seeder;

class DriverSeeder extends Seeder
{
    public function run()
    {
        Driver::factory()->create([
            'name' => 'Ayrton Senna',
            'birth' => '1960-03-21',
            'championships' => 3,
            'victories' => 41,
            'team_id' => 1
        ]);

        Driver::factory()->create([
            'name' => 'Lewis Hamilton',
            'birth' => '1985-01-07',
            'championships' => 8,
            'victories' => 103,
            'team_id' => 1
        ]);

        Driver::factory()->create([
            'name' => 'Max Verstappen',
            'birth' => '1997-09-30',
            'championships' => 3,
            'victories' => 57,
            'team_id' => 3
        ]);
    }
}
