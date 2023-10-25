@extends('welcome')

@section('content')

<link rel="stylesheet" type="text/css" href="{{ asset('css/estilos.css') }}">
<script src="{{ asset('js/app.js') }}"></script>

<div class="formulario">
    <div class="form">
        <div class="lavel">
            <label for="">Almacen 1</label>
        </div>
        <div class="c1">
            <div class="col-md-2" style="width: calc(33.33% - 10px); margin-bottom: 1px;">
                <label for="" class="form-label">Oferta</label>
                <input type="text" class="form-control" id="ofertaA1" name="ofertaA1" value="" required>
            </div>
            <div class="col-md-2" style="width: calc(33.33% - 10px); margin-bottom: 1px;">
                <label for="" class="form-label">Costo</label>
                <input type="text" class="form-control" id="costoA1C1" name="costoA1C1" value="" required>
            </div>
            <div class="costoa" style="margin-top: 35px;">
                <label for="">-></label>
            </div>
            <div class="col-md-2" style="width: calc(33.33% - 10px); margin-bottom: 1px;">
                <label for="" class="form-label">Demanda</label>
                <input type="text" class="form-control" id="demandaC1A1" name="demandaC1A1" value="" required>
            </div>
        </div>
        
        <div class="c2">
            <div class="col-md-2" style="width: calc(33.33% - 10px); margin-bottom: 1px;">
                <label for="" class="form-label">Costo</label>
                <input type="text" class="form-control" id="costoA1C2" name="costoA1C2" value="" required>
            </div>
            <div class="costoa" style="margin-top: 35px;">
                <label for="">-></label>
            </div>
            <div class="col-md-2" style="width: calc(33.33% - 10px); margin-bottom: 1px;">
                <label for="" class="form-label">Demanda</label>
                <input type="text" class="form-control" id="demandaC2A1" name="demandaC2A1" value="" required>
            </div>
        </div>
        <div class="c3">
            <div class="col-md-2" style="width: calc(33.33% - 10px); margin-bottom: 1px;">
                <label for="" class="form-label">Costo</label>
                <input type="text" class="form-control" id="costoA1C3" name="costoA1C3" value="" required>
            </div>
            <div class="costoa" style="margin-top: 35px;">
                <label for="">-></label>
            </div>
            <div class="col-md-2" style="width: calc(33.33% - 10px); margin-bottom: 1px;">
                <label for="" class="form-label">Demanda</label>
                <input type="text" class="form-control" id="demandaC3A1" name="demandaC3A1" value="" required>
            </div>
        </div>
        <div class="lavel">
            <label for="">Almacen 2</label>
        </div>
        <div class="c1">
            <div class="col-md-2" style="width: calc(33.33% - 10px); margin-bottom: 1px;">
                <label for="" class="form-label">Oferta</label>
                <input type="text" class="form-control" id="ofertaA2" name="ofertaA2" value="" required>
            </div>
            <div class="col-md-2" style="width: calc(33.33% - 10px); margin-bottom: 1px;">
                <label for="" class="form-label">Costo</label>
                <input type="text" class="form-control" id="costoA2C1" name="costoA2C1" value="" required>
            </div>
            <div class="costoa" style="margin-top: 35px;">
                <label for="">-></label>
            </div>
            <div class="col-md-2" style="width: calc(33.33% - 10px); margin-bottom: 1px;">
                <label for="" class="form-label">Demanda</label>
                <input type="text" class="form-control" id="demandaC1A2" name="demandaC1A2" value="Cliente 1">
            </div>
        </div>
        
        <div class="c2">
            <div class="col-md-2" style="width: calc(33.33% - 10px); margin-bottom: 1px;">
                <label for="" class="form-label">Costo</label>
                <input type="text" class="form-control" id="costoA2C2" name="costoA2C2" value="" required>
            </div>
            <div class="costoa" style="margin-top: 35px;">
                <label for="">-></label>
            </div>
            <div class="col-md-2" style="width: calc(33.33% - 10px); margin-bottom: 1px;">
                <label for="" class="form-label">Demanda</label>
                <input type="text" class="form-control" id="demandaC2A2" name="demandaC2A2" value="Cliente 2">
            </div>
        </div>
        <div class="c3">
            <div class="col-md-2" style="width: calc(33.33% - 10px); margin-bottom: 1px;">
                <label for="" class="form-label">Costo</label>
                <input type="text" class="form-control" id="costoA2C3" name="costoA2C3" value="" required>
            </div>
            <div class="costoa" style="margin-top: 35px;">
                <label for="">-></label>
            </div>
            <div class="col-md-2" style="width: calc(33.33% - 10px); margin-bottom: 1px;">
                <label for="" class="form-label">Demanda</label>
                <input type="text" class="form-control" id="demandaC3A2" name="demandaC3A2" value="Cliente 3">
            </div>
        </div>
        

        <div class="col-12">
            <button class="btn btn-primary" type="submit" id="calcular" name="calcular" onclick="sumarNumeros()">Calcular</button>
        </div>
    </div>
</div>

<div class="tab-cant-enviar">
    
    <div class="tabla" style="padding: 20px 20px;">
        <table>
            <tr>
                <th>Almacen</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>Oferta</th>
            </tr>
            <tr>
                <td class="colum-iz">1</td>
                <td id="A1-C1"></td>
                <td id="A1-C2"></td>
                <td id="A1-C3"></td>
                <td id="Oferta-A1"></td>
            </tr>
            <tr>
                <td class="colum-iz">2</td>
                <td id="A2-C1"></td>
                <td id="A2-C2"></td>
                <td id="A2-C3"></td>
                <td id="Oferta-A2"></td>
            </tr>
            <tr>
                <td class="colum-iz">Demanda</td>
                <td id="Demanda-C1"></td>
                <td id="Demanda-C2"></td>
                <td id="Demanda-C3"></td>
                <td></td>
            </tr>
        </table>
    </div>

    <div>
        <label for="">Funcion Objetivo (costo total)</label>
        <p id="funcion-objetivo"></p>
    </div>
</div>

@endsection