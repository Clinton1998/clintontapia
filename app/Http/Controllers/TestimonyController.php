<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Professional;

class TestimonyController extends Controller
{
    public function __invoke(){
    	$professional = Professional::firstOrFail();
    	return Inertia::render('Testimonials',[
    		'testimonies' => $professional->testimonies
    	]);
    }
}
