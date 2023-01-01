<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'seller_id',
        'buyer_id',
        'title',
        'author',
        'publisher',
        'user_address',
        'picture',
        'price',
        'education_year',
        'category',
        'school',
        'class',
        'status'
    ];
}
