<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','HelloController');
Route::get('/hola','HelloController')->name('page.hello');
Route::get('/curriculum','ResumeController')->name('page.resume');
Route::get('/portafolio','PortfolioController')->name('page.portfolio');
Route::get('/testimonios','TestimonyController')->name('page.testimonials');
Route::get('/contacto','ContactController')->name('page.contact');
Route::post('/enviar-email','ContactController@send')->name('send_email');
Route::get('/curriculum/descargar/{professional}', 'ResumeController@cv_download')->name('cv.download');
