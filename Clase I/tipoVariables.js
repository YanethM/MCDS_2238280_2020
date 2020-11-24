function tipoLet() {
    /* Alt + shift + A para generar comentarios */
    /* Función que imprime por consola un saludo */
    let saludo = "Hola grupo MCDS desde la función";
    console.log(saludo);
    /* Se llama el Id del tag <p id="verSalida"></p> */
    saludo = "Hasta el miercoles grupo";
    document.getElementById("verSalida").innerHTML = saludo;
}

function tipoConst() {
    /* Función que imprime por consola un saludo */
    const saludo = "Hola soy tipo constante";
    console.log(saludo);
    document.getElementById("verConst").innerHTML = saludo;
}