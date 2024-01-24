<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cargo extends Model
{
    use HasFactory;
    //protected $dateFormat = 'YYYYMMMDD hh:mm:ss';
    public $timestamps=false;
    protected $fillable = ['id', 'codigo', 'nombre', 'activo', 'idUsuario'];

}
