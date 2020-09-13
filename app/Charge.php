<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Charge extends Model
{
	protected $fillable = ['professional_id','title'];
    public function professional()
    {
        return $this->belongsTo('App\Professional');
    }
}
