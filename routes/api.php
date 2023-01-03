<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BooksController;
use App\Http\Controllers\NotificationController;
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
//register and login API's
Route::post('/auth/register', [AuthController::class, 'createUser']);
Route::post('/auth/login', [AuthController::class, 'loginUser']);

//get all books API (public API can be accessed without token (user can be signed out)) 
Route::get('/auth/get-books', [BooksController::class, 'getBooks']);
Route::post('/auth/buy-book', [BooksController::class, 'purchaseBook']);

//authenticated API's (user have to be logged in)
Route::post('/auth/edit-user-info', [AuthController::class, 'editUserInfo'])->middleware('auth:sanctum');
Route::post('/auth/edit-password', [AuthController::class, 'changePassword'])->middleware('auth:sanctum');

Route::post('/auth/create-book', [BooksController::class, 'createBook'])->middleware('auth:sanctum');
Route::post('/auth/get-book', [BooksController::class, 'getSingleBook'])->middleware('auth:sanctum');
Route::post('/auth/buy-book', [BooksController::class, 'purchaseBook'])->middleware('auth:sanctum');
Route::post('/auth/get-purchased-books', [BooksController::class, 'getPurchasedBook'])->middleware('auth:sanctum');
Route::post('/auth/get-my-books', [BooksController::class, 'getMyBooks'])->middleware('auth:sanctum');


Route::post('/auth/get-my-notifications', [NotificationController::class, 'getUserNotifications'])->middleware('auth:sanctum');




