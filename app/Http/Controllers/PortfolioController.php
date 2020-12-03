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
        $projects = $professional->projects->load('stacks');

        $projects = $projects->map(function($project){
            $project->short_description = substr($project->description, 0,104);
            return $project;
        });
        return Inertia::render('Portfolio',[
        	'categories' => $categories,
        	'projects' => $projects
        ]);
    }
}
