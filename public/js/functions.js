function Calcular() {
    

    

    sumOferta = 2;
    sumDemanda = 1;
    if (sumOferta >= sumDemanda) {

        const costosEnvioOriginal = [
            [3, 4, 6],
            [5, 3, 5]
        ];

        const costosEnvio = [
            [3, 4, 6],
            [5, 3, 5]
        ];
        
        const unidadesEnvio = [
            [0, 0, 0],
            [0, 0, 0]
        ];
        
        const ofertaAlmacenes = [
            [160000],
            [120000]
        ];
        
        const demandaClientes = [80000, 70000, 90000];
        
        // Función para encontrar la posición con el menor costo válido
        function encontrarPosicionMinima(costosEnvio) {
            let minCosto = Number.POSITIVE_INFINITY;
            let filaMin = 0;
            let columnaMin = 0;
        
            for (let i = 0; i < costosEnvio.length; i++) {
                for (let j = 0; j < costosEnvio[i].length; j++) {
                    if (costosEnvio[i][j] < minCosto && costosEnvio[i][j] > 0) {
                        minCosto = costosEnvio[i][j];
                        filaMin = i;
                        columnaMin = j;
                    }
                }
            }
        
            return { fila: filaMin, columna: columnaMin };
        }
        
        let costoTotal = 0;
        // Proceso para asignar unidades
        while (true) {
            const posicionMinima = encontrarPosicionMinima(costosEnvio);
            const filaMin = posicionMinima.fila;
            const columnaMin = posicionMinima.columna;
        
            // Calcular la cantidad a asignar (mínimo entre oferta y demanda)
            const oferta = ofertaAlmacenes[filaMin][0];
            const demanda = demandaClientes[columnaMin];
            const cantidadAsignada = Math.min(oferta, demanda);
        
            // Actualizar unidadesEnvio, oferta y demanda
            unidadesEnvio[filaMin][columnaMin] = cantidadAsignada;
            ofertaAlmacenes[filaMin][0] -= cantidadAsignada;
            demandaClientes[columnaMin] -= cantidadAsignada;
        
            // Actualizar el costo a 0 en costosEnvio
            costosEnvio[filaMin][columnaMin] = 0;
        
            costoTotal += cantidadAsignada * costosEnvioOriginal[filaMin][columnaMin];

            // Salir del bucle si no quedan más costos válidos (todos son 0)
            if (!costosEnvio.some(row => row.some(costo => costo > 0))) {
                break;
            }
        }
        
        console.log("Unidades de envío:", unidadesEnvio);
        console.log("Oferta de almacenes actualizada:", ofertaAlmacenes);
        console.log("Demanda de clientes actualizada:", demandaClientes);
        console.log("Costo total (Función Objetivo):", costoTotal);

        document.getElementById('A1-C1').textContent = unidadesEnvio[0][0];
        document.getElementById('A1-C2').textContent = unidadesEnvio[0][1];

        //mostrar la funcion objetivo (costo minimo)
        var viewFuncObjetivo = document.getElementById('funcion-objetivo');
       

    } else {
        //mensaje de que no es posible ya que la oferta de los almacenes es menor que la demanda de los clientes
    }
    //CASILLAS A LLENAR (UNIDADES A ENVIAR)
    

  
    var a1_c2 = parseFloat(document.getElementById('A1-C2').textContent);
    var a1_c3 = parseFloat(document.getElementById('A1-C3').textContent);
    var a2_c1 = parseFloat(document.getElementById('A2-C1').textContent);
    var a2_c2 = parseFloat(document.getElementById('A2-C2').textContent);
    var a2_c3 = parseFloat(document.getElementById('A2-C3').textContent);


}



/*

function calcularFuncOfgetivo(almacen1_1, almacen1_2, almacen1_3, almacen2_1, almacen2_2, almacen2_3, costo1_1, costo1_2, costo1_3, costo2_1, costo2_2, costo2_3) {
    funcObjetivo = ((almacen1_1*costo1_1)+(almacen1_2*costo1_2)+(almacen1_3*costo1_3)+(almacen2_1*costo2_1)+(almacen2_2*costo2_2)+(almacen2_3*costo2_3));
    return funcObjetivo;
}
*/