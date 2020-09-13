<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Professional extends Model
{
    protected $fillable = ['name','first_last_name','second_last_name','date_of_birth','cover_image','photography','cv_download'];

    protected $appends = ['age'];

    public function socials()
    {
        return $this->hasMany('App\Social');
    }
    public function charges()
    {
        return $this->hasMany('App\Charge');
    }
    public function studies()
    {
        return $this->hasMany('App\Study');
    }
    public function jobs()
    {
        return $this->hasMany('App\Job');
    }
    public function skills()
    {
        return $this->hasMany('App\Skill');
    }

    public function projects()
    {
        return $this->hasMany('App\Project');
    }

    public function testimonies()
    {
        return $this->hasMany('App\Testimony');
    }

    public function mails_received(){
        return $this->hasMany('App\Mail');
    }
    
    public function getAgeAttribute(){
    	$fecha_nacimiento = new \DateTime($this->date_of_birth);
		$hoy = new \DateTime();
		$edad = $hoy->diff($fecha_nacimiento);
    	return $edad->y;
    }
}
