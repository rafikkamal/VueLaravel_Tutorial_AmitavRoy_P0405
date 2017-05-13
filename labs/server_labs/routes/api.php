<?php

use Illuminate\Http\Request;


Route::get('test', function(){
	return response([11,22,33,44,55], 200);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');
