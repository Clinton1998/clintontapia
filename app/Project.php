<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
	protected $fillable = ['professional_id','url_image','title','description','url','category_id'];

    public function professional()
    {
        return $this->belongsTo('App\Professional');
    }
    public function category()
    {
        return $this->belongsTo('App\Category');
    }
    public function stacks()
    {
        return $this->hasMany('App\Stack');
    }
}
