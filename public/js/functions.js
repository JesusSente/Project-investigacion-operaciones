function Calcular() {
    
    // OBTENER LOS VzyALORES INGRESADOS EN LOS INPUTS
    var oferta_a1 = parseFloat(document.getElementById('ofertaA1').value);
    var costo_a1c1 = parseFloat(document.getElementById('costoA1C1').value);
    var demanda_c1 = parseFloat(document.getElementById('demandaC1A1').value);
    var costo_a1c2 = parseFloat(document.getElementById('costoA1C2').value);
    var demanda_c2 = parseFloat(document.getElementById('demandaC2A1').value);
    var costo_a1c3 = parseFloat(document.getElementById('costoA1C3').value);
    var demanda_c3 = parseFloat(document.getElementById('demandaC3A1').value);
    var oferta_a2 = parseFloat(document.getElementById('ofertaA2').value);
    var costo_a2c1 = parseFloat(document.getElementById('costoA2C1').value);
    var costo_a2c2 = parseFloat(document.getElementById('costoA2C2').value);
    var costo_a2c3 = parseFloat(document.getElementById('costoA2C3').value);
   

    //LLENAR DATOS DE LAS OFERTAS Y LAS DEMANDAS DE LOS CLIENTES
    var columOfert1 = document.getElementById('Oferta-A1');
    columOfert1.textContent = oferta_a1;

    var columOfert2 = document.getElementById('Oferta-A2');
    columOfert2.textContent = oferta_a2;

    var columDemandaC1 = document.getElementById('Demanda-C1');
    columDemandaC1.textContent = demanda_c1;

    var columDemandaC2 = document.getElementById('Demanda-C2');
    columDemandaC2.textContent = demanda_c2;

    var columDemandaC3 = document.getElementById('Demanda-C3');
    columDemandaC3.textContent = demanda_c3;

    sumOferta = oferta_a1 + oferta_a2;
    sumDemanda = demanda_c1 + demanda_c2 + demanda_c3;
    if (sumOferta >= sumDemanda) {

        const costosEnvioOriginal = [
            [costo_a1c1, costo_a1c2, costo_a1c3],
            [costo_a2c1, costo_a2c2, costo_a2c3]
        ];

        const costosEnvio = [
            [costo_a1c1, costo_a1c2, costo_a1c3],
            [costo_a2c1, costo_a2c2, costo_a2c3]
        ];
        
        const unidadesEnvio = [
            [0, 0, 0],
            [0, 0, 0]
        ];
        
        const ofertaAlmacenes = [
            [oferta_a1],
            [oferta_a2]
        ];
        
        const demandaClientes = [demanda_c1, demanda_c2, demanda_c3];
        
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
        document.getElementById('A1-C3').textContent = unidadesEnvio[0][2];
        document.getElementById('A2-C1').textContent = unidadesEnvio[1][0];
        document.getElementById('A2-C2').textContent = unidadesEnvio[1][1];
        document.getElementById('A2-C3').textContent = unidadesEnvio[1][2];

        //mostrar la funcion objetivo (costo minimo)
        document.getElementById('funcion-objetivo').textContent = costoTotal;
        document.getElementById('sobra-almacen1').textContent = ofertaAlmacenes[0][0];
        document.getElementById('sobra-almacen2').textContent = ofertaAlmacenes[1][0];
       

    } else {
        alert("¡¡OCURRIO UN PROBLEMA, los almacenes no cuentan con la cantidad de mercamcia para satisfacer las demandas de los clientes. SE RECOMIENDA AUMENTAR LA OFERTA");

    }
}