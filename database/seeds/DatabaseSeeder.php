<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Professional::class)->times(1)->create();
        factory(\App\Charge::class)->times(2)->create();
        factory(\App\Social::class)->times(3)->create();
        
        factory(\App\Study::class)->times(2)->create();
        factory(\App\Job::class)->times(2)->create();
        factory(\App\Skill::class)->times(8)->create();

        factory(\App\Category::class)->times(5)->create();
        factory(\App\Project::class)->times(3)->create();
        factory(\App\Stack::class)->times(10)->create();
        
        factory(\App\Testimony::class)->times(6)->create();
        
    }
}
