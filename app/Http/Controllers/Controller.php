<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use App\Models\Team;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index()
    {
        return view('layouts.app');
    }

    public function getTeams()
    {
        $teams = Team::all();
        return response()->json($teams);
    }

    public function getDrivers()
    {
        $drivers = Driver::with('team')->get();
        return response()->json($drivers);
    }

    public function saveTeam(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'year' => 'integer',
            'championships' => 'integer',
        ]);

        $team = Team::create([
            'name' => $validatedData['name'],
            'year' => $validatedData['year'],
            'championships' => $validatedData['championships']
        ]);
        return response()->json($team, 201);
    }

    public function editTeam($id)
    {
        $team = Team::where('id', '=', $id)->first();
        return response()->json($team);
    }

    public function updateTeam(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'year' => 'integer',
            'championships' => 'integer',
        ]);

        $team = Team::where('id', '=', $id)->update($validatedData);
        return response()->json($team, 201);
    }

    public function deleteTeam(Request $request, $id)
    {
        $team = Team::where('id', '=', $id)->first();
        $team->delete();
        return response()->json();
    }
}
