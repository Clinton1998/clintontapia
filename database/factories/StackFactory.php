<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Stack;
use App\Project;
use Faker\Generator as Faker;

$factory->define(Stack::class, function (Faker $faker) {
    return [
    	'project_id' => Project::all()->random(),
    	'name' => $faker->word
    ];
});
