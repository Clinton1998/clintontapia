<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Testimony extends Model
{
    protected $fillable = ['professional_id','name','project','description'];

    public function professional()
    {
        return $this->belongsTo('App\Professional');
    }
}
