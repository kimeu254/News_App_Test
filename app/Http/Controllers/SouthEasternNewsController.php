<?php

namespace App\Http\Controllers;

use App\Models\SouthEastern_News;
use Illuminate\Http\Request;

class SouthEasternNewsController extends Controller
{
    public function index()
    {
        return SouthEastern_News::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'headline' => 'required',
            'image' => 'required',
            'story' => 'required',
            'posted_by' => 'required'
        ]);

        SouthEastern_News::create($request->all());
    }
}
