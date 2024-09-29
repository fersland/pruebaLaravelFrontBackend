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

    public function store(Request $request){
        $request->validate(
            [
                'codigoProducto'    => 'required',
                'descripcion'       => 'required',
                'precio'            => 'required',
                'existencia'        => 'required'
            ]);

        Producto::create($request->post());
        return response()->json([
            'message' => 'Added Successfully'
        ]);
    }
}
