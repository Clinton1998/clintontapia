<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Professional;

class HelloController extends Controller
{
    public function __invoke(){
    	$professional = Professional::firstOrFail();
    	$professional->load('charges');
    	$professional->load('socials');
        return Inertia::render('Hello',[
        	'professional' => $professional
        ]);
    }
}
