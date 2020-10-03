<?php include 'layouts/header.php'; ?>

<div class="container">
    <h1 class="text-center">Pagina de login</h1>
    <form onsubmit="login()">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Ingrese su usuario">
        </div>
        <div class="form-group">
            <label for="password">Ingrese su contraseña</label>
            <input type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
</div>

<?php include 'layouts/footer.php'; ?>