<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mail extends Model
{
	protected $fillable = ['professional_id','your_name','your_email','message','send_to'];
    public function professional()
    {
        return $this->belongsTo('App\Professional');
    }
}
