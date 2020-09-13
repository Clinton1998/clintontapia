<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\{Professional,Category};

class PortfolioController extends Controller
{
    public function __invoke()
    {
    	$categories = Category::all();
    	$categories = $categories->map(function($category){
    		$category->active = false;
    		return $category;
    	});
    	$professional = Professional::firstOrFail();
        return Inertia::render('Portfolio',[
        	'categories' => $categories,
        	'projects' => $professional->projects->load('stacks')
        ]);
    }
}
