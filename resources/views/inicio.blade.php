@extends('welcome')

@section('content')

<link rel="stylesheet" type="text/css" href="{{ asset('css/estilos_inicio.css') }}"><!--********MODIFICAR AQUI PARA QUE SE VEAN LOS ESTILOS DE EMERSON-->

<div>
    <div class="container-inicio">
        <section class="section-inicio-1"">
            <div class="cont-section1"  style="background-color: #E0EFF5; height: 35rem; display: flex; align-items: center; justify-content: center;">
                <div class="contenido-heder">

                    <h1>MODELO DE TRANSPORTE</h1>
                    <h3>Esquina Noroeste</h3>
                    <h5>Minimizar Costos</h5>
                </div>
            </div>
            <div class="cont-section2" style="display: flex; align-items: center; justify-content: center; padding: 20px 20px;">
                <div class="container-info" style=" display: block; justify-content: center; text-align: center;">
                    <h1 class="title">Definicion del proyecto</h1>
                    <p>Este es una aplicacion que se utiliza para calcular el metodo de transporte.</p>
                    <p>Tomando en cuenta que es uno de los metodos mas utilizados de la actualidad, para minimizar costos.</p>
                    <p>La mayoria de las personas necesita este metodo para resolver sus problemas de transporte, para poder enviar las cantidades de articulos que demandan los clientes, a un menor costo.</p>
                </div>
            </div>
        </section>
    </div>
    <footer style="display: flex; justify-content: center;">
        &copy; VisionariosGT
    </footer>
</div>
@endsection
