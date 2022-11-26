<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SouthEastern_News extends Model
{
    use HasFactory;

    protected $fillable = [
        'headline',
        'image',
        'story',
        'posted_by',
    ];
}
