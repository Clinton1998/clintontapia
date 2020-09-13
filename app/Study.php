<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Study extends Model
{
	protected $fillable = ['professional_id','name_institution','url_institution','range','description'];
    public function professional()
    {
        return $this->belongsTo('App\Professional');
    }
}
