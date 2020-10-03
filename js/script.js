let count = 0
let totalproductos = 0
let promedioproductos = 0


function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let mensaje = "";

    const loginUser = "sza95"
    const loginPass = "123456x"

    if (username != loginUser || password != loginPass) {
        mensaje = "Datos erroneos, no puede entrar"
    } else {
        mensaje = "Datos correctos, puede entrar"
        window.location.href = "/PAM1/index.php";
    }

    alert(mensaje)
}

function addproduct() {

    let pName = document.getElementById("nProducto").value
    let pDescription = document.getElementById("dProducto").value
    let pValue = parseInt(document.getElementById("vProducto").value)
    let param = "NN"
    let mensaje = "";


    if (pName == param) {
        document.getElementById("nProducto").value = "";
        document.getElementById("dProducto").value = "";
        document.getElementById("vProducto").value = "";
        mensaje = "Se ingreso el valor que detiene la secuencia"
        alert(mensaje)
        location.reload();
    } else {
        if (pName != "" && pDescription != "" && pValue != "") {
            $("<tr><td>" + pName + "</td><td>" + pDescription + "</td><td>" + pValue + "</td></tr>").appendTo("#productos")
            count++
            totalproductos = parseInt(pValue + totalproductos)
            promedioproductos = parseInt(totalproductos/count)

            mensaje=
            "<b>Cantidad de Productos: </b>" + count + 
            "<br><b>Total Valor de Productos: </b>" + totalproductos + 
            "<br><b>Promedio de los Prodcutos: </b>" + promedioproductos
             
     

        } else {
            mensaje = "Hay campos por llenar"
            alert(mensaje)
        }
    }

    document.getElementById("resultados").innerHTML = mensaje;

}








