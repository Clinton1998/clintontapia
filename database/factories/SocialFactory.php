<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\{Social,Professional};
use Faker\Generator as Faker;

$factory->define(Social::class, function (Faker $faker) {
    return [
        'professional_id' => Professional::all()->random(),
        'name' => $faker->sentence($nbWords = 2,$variableNbWords = true),
        'url' => $faker->imageUrl($width = 640, $height = 480),
        'class_icon' => 'fa fa-github',
    ];
});
