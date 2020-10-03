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

    let pName = $("#nProducto").val();
    let pDescription = $("#dProducto").val();
    let pValue = $("#vProducto").val();
    
    if (pName != "" && pDescription != "" && pValue != "") {
        $("<tr><td>" + pName + "</td><td>" + pDescription + "</td><td>" + pValue + "</td></tr>").appendTo("#productos")
    }else{
        alert("Hay campos por llenar")
    }

}
