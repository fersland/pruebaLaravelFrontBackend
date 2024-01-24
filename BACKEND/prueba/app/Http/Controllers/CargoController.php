<?php

namespace App\Http\Controllers;
use App\Models\Cargo;
use Illuminate\Http\Request;

class CargoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cargos = Cargo::all();
        return response()->json($cargos);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'codigo' => 'required',
            'nombre' => 'required',
            'activo' => 'required',
            'idUsuario' => 'required'
        ]);

        Cargo::create($request->post());
        return response()->json([
            'message' => 'Added Cargo!'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $cargos = Cargo::findOrFail($request->id);
        $cargos->nombre = $request->nombre;
        $cargos->activo = $request->activo;
        $cargos->idUsuario = $request->idUsuario;

        $cargos->save();
        return $cargos;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy (Request $request, string $id)
    {
        $cargos = Cargo::destroy($id);
        return response()->json($cargos);
    }
}
