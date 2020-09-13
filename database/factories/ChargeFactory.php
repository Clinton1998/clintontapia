<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Charge;
use App\Professional;
use Faker\Generator as Faker;

$factory->define(Charge::class, function (Faker $faker) {
    return [
        'professional_id' => Professional::all()->random(),
        'title' => $faker->word
    ];
});
