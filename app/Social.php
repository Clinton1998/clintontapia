<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Social extends Model
{
    protected $fillable = ['professional_id','name','url','class_fontawesome'];
    public function professional()
    {
        return $this->belongsTo('App\Professional');
    }
}
