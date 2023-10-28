<?php
$costo_total = 0;

foreach ($transporte as $dato) {
    $costo_total += $dato['costo'];
}

if ($costo_total > 0) {
    echo "<h2>Costo Total de Transporte: $" . $costo_total . "</h2>";
}
?>
