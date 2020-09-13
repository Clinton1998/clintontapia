<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $fillable = ['professional_id','name_business','url_business','range','description'];
    public function professional()
    {
        return $this->belongsTo('App\Professional');
    }
}
