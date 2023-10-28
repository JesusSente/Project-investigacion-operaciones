<?php
$transporte = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $origen = $_POST['origen'];
    $destino = $_POST['destino'];
    $costo = $_POST['costo'];

    if (!empty($origen) && !empty($destino) && !empty($costo)) {
        $transporte[] = [
            'origen' => $origen,
            'destino' => $destino,
            'costo' => $costo
        ];
    }
}

foreach ($transporte as $dato) {
    echo "<tr>";
    echo "<td>" . $dato['origen'] . "</td>";
    echo "<td>" . $dato['destino'] . "</td>";
    echo "<td>" . $dato['costo'] . "</td>";
    echo "</tr>";
}
?>