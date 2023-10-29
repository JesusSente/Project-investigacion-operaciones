<!DOCTYPE html>
<html>
<head>
  <title>Proyecto de Investigación de Operaciones</title>
  <link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
  <header>
    <h1>Método de Transporte</h1>
  </header>

  <div class="container">
    <h2>Ingrese los datos de transporte</h2>
    <form action="datos.php" method="post">
      <label for="origen">Origen:</label>
      <input type="text" id="origen" name="origen" required>
  
      <label for="destino">Destino:</label>
      <input type="text" id="destino" name="destino" required>
  
      <label for "costo">Costo:</label>
      <input type="number" id="costo" name="costo" required>
  
      <button type="submit">Agregar Datos</button>
    </form>

    <h2>Datos</h2>
    <table>
      <tr>
        <th>Origen</th>
        <th>Destino</th>
        <th>Costo</th>
      </tr>
      <?php include 'datos.php'; ?>
    </table>

    <?php include 'calcular_costo.php'; ?>
  </div>

  <footer>
    &copy; <?php echo date("Y"); ?> VisionariosGT
  </footer>
</body>
</html>


