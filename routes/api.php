<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/categories',function(Request $request){
    return "get all categories";
});

Route::post('/categories',function(Request $request){
    return "create 1 category";
});

Route::patch('/categories/{categoryId}',function(Request $request){
    return "Update 1 category";
});

Route::delete('/categories/{categoryId}',function(Request $request){
    return "Delete 1 category";
});
Route::apiResource('categories', CategoryController::class);
Route::apiResource('register',AuthController::class);
Route::post('/api/login', 'AuthController@login');
Route::post('/api/register', 'AuthController@register');
