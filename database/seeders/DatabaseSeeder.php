<?php

use Database\Seeders\DriverSeeder;
use Database\Seeders\TeamSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            TeamSeeder::class,
            DriverSeeder::class,
        ]);
    }
}
