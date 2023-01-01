<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;
    protected $fillable = [
        'seller_id',
        'book_id',
        'buyer_id',
        'type',
        'title',
        'status'
    ];
}
