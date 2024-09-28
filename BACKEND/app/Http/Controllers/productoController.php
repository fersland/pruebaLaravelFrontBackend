<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Producto;

class productoController extends Controller
{
    public function index(){
        $list = Producto::all();
        return response()->json($list);
    }
}
