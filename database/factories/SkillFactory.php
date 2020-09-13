<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Skill;
use App\Professional;
use Faker\Generator as Faker;

$factory->define(Skill::class, function (Faker $faker) {
    return [
        'professional_id' => Professional::all()->random(),
        'title' => $faker->word,
        'value' => $faker->numberBetween($min = 1, $max = 100)
    ];
});
