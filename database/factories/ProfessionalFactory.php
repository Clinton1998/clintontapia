<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Professional;
use Faker\Generator as Faker;

$factory->define(Professional::class, function (Faker $faker) {
    return [
        'name' => $faker->firstName(),
        'first_last_name' => $faker->lastName,
        'second_last_name' => $faker->lastName,
        'date_of_birth' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'phone' => $faker->e164PhoneNumber,
        'email' => $faker->freeEmail,
        'address' => $faker->streetAddress,
        'cover_image' => 'http://127.0.0.1:8000/assets/img/img_bg_header.jpg',
        'photography' => 'http://via.placeholder.com/350x400',
        'presentation'=> $faker->text($maxNbChars = 200), 
        'cv_download'=>  $faker->word.'.pdf'
    ];
});
