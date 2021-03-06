<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    protected $table = 'customers';

    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
        'email'
    ];
}
