<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Project;
use App\Professional;
use App\Category;
use Faker\Generator as Faker;

$factory->define(Project::class, function (Faker $faker) {
    return [
        'professional_id' => Professional::all()->random(),
        'url_image' => $faker->imageUrl($width = 940, $height = 720),
        'title' => $faker->word,
        'description' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'url' => $faker->imageUrl($width = 940, $height = 720),
        'category_id' => Category::all()->random()
    ];
});
