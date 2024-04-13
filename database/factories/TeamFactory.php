<?php

namespace Database\Factories;

use App\Models\Team;
use Illuminate\Database\Eloquent\Factories\Factory;

class TeamFactory extends Factory
{
    protected $model = Team::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'year' => $this->faker->numberBetween(1950, 2099),
            'championships' => $this->faker->numberBetween(0, 999)
        ];
    }
}
