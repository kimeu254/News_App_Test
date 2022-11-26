<?php

namespace App\Http\Controllers;

use App\Models\Area;
use Illuminate\Http\Request;

class AreaController extends Controller
{
    public function index()
    {
        return Area::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'status' => 'required'
        ]);

        Area::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $area = Area::find($id);

        $request->validate([
            'name' => 'required',
            'status' => 'required'
        ]);

        $area->update($request->all());

        return response([
            'message' => 'Region Updated Successfully.',
            'area' => $area
        ], 200);


    }

    public function destroy($id)
    {
        $area = Area::find($id);
        $area->delete();

        return response([
            'message' => 'Region Deleted Successfully.'
        ], 200);
    }
}
