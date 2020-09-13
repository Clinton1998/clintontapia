<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Professional;
use Illuminate\Support\Facades\Storage;

class ResumeController extends Controller
{
    public function __invoke(){
        $professional = Professional::firstOrFail();
        //skills length = 8
        return Inertia::render('Resume',[
            'studies' => $professional->studies,
            'jobs' => $professional->jobs,
            'skills' => $professional->skills
        ]);
    }

    public function cv_download(Professional $professional){
        return Storage::download('filescv/' . $professional->id . '/' . $professional->cv_download);
    }
}
