<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Professional;
use App\Mail as MMail;
use App\Mail\ContactPerson;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\Contact;

class ContactController extends Controller
{
    public function __invoke(){
    	$professional = Professional::firstOrFail();
    	$professional->load('socials');
    	return Inertia::render('Contact',[
    		'professional' => $professional
    	]);
    }

    public function send(Contact $request){
    	$professional = Professional::firstOrFail();
    	$mail = new MMail;
    	$mail->professional_id = $professional->id;
    	$mail->your_name = $request->input('your_name');
    	$mail->your_email = $request->input('your_email');
    	$mail->message = $request->input('message');
    	$mail->send_to = $professional->email;
    	$mail->save();

    	Mail::to($mail->send_to)->send(new ContactPerson($mail));

        return redirect()->route('page.hello');
    }
}
