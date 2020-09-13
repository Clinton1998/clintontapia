<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Contact extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'your_name' => 'required',
            'your_email' => 'required|email' ,
            'message'=> 'required'
        ];
    }

    public function attributes()
    {
        return [
            'your_name' => 'nombre',
            'your_email' => 'correo electrónico',
            'message' => 'mensaje'
        ];
    }
}
