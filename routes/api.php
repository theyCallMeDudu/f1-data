<?php

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/teams', [Controller::class, 'getTeams']);
Route::post('/new-team', [Controller::class, 'saveTeam']);
Route::get('/edit-team/{id}', [Controller::class, 'editTeam']);
Route::post('/update-team/{id}', [Controller::class, 'updateTeam']);
Route::delete('/delete-team/{id}', [Controller::class, 'deleteTeam']);

Route::get('/drivers', [Controller::class, 'getDrivers']);
