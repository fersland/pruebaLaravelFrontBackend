<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $fillable = ['usuario', 'primerNombre', 'segundoNombre', 'primerApellido', 'segundoApellido', 'idDepartamento', 'idCargo'];
}
