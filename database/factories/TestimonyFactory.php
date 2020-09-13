<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Testimony;
use App\Professional;
use Faker\Generator as Faker;

$factory->define(Testimony::class, function (Faker $faker) {
    return [
        'professional_id' => Professional::all()->random(),
        'name' => $faker->word,
        'project' => $faker->word,
        'description' => $faker->text($maxNbChars = 200)
    ];
});
