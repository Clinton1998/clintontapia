<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = ['professional_id','title','value'];
    public function professional()
    {
        return $this->belongsTo('App\Professional');
    }
}
