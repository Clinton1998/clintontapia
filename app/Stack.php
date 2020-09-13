<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stack extends Model
{
	protected $fillable = ['project_id','name'];
	
    public function project()
    {
        return $this->belongsTo('App\Project');
    }
}
