<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Study;
use App\Professional;
use Faker\Generator as Faker;

$factory->define(Study::class, function (Faker $faker) {
    return [
    	'professional_id' => Professional::all()->random(),
        'name_institution' => $faker->word,
        'url_institution' => $faker->imageUrl($width = 640, $height = 480),
        'range' => '2016 - 2020',
        'description' => $faker->sentence($nbWords = 4, $variableNbWords = true)
    ];
});
