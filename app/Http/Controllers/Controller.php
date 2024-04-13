<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use App\Models\Team;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
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
}
