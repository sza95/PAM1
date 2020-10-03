<?php include 'layouts/header.php'; ?>

<div class="container">
    <h1 class="text-center">Pagina de Servicios</h1>
    <hr>
    <form>
        <div class="form-group">
            <label for="nProducto">Nombre Producto</label>
            <input type="text" class="form-control" id="nProducto" placeholder="Ingrese el nombre del producto">
        </div>
        <div class="form-group">
            <label for="dProducto">Descripción Producto</label>
            <input type="text" class="form-control" id="dProducto" placeholder="Ingrese la descripción del producto">
        </div>
        <div class="form-group">
            <label for="vProducto">Valor Producto</label>
            <input type="text" class="form-control" id="vProducto" placeholder="Ingrese el valor del producto">
        </div>
        <button type="button" class="btn btn-primary" onclick="addproduct()">Enviar</button>
    </form>
    <br>

    <p id="resultados">

    </p>
    <br>
    <hr>
    <table id="productos" class="table">
        <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
        </tr>
    </table>


</div>
<?php include 'layouts/footer.php'; ?>