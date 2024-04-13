<?php

namespace Database\Factories;

use App\Models\Driver;
use Illuminate\Database\Eloquent\Factories\Factory;

class DriverFactory extends Factory
{
    protected $model = Driver::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'birth' => $this->faker->date('Y-m-d'),
            'championships' => $this->faker->numberBetween(0, 999),
            'victories' => $this->faker->numberBetween(0, 999),
            'team_id' => $this->faker->numberBetween(0, 99)
        ];
    }
}
