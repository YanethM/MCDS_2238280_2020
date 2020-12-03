/* Scope => Bloque */


/* Declaración de scope local */
function condicional() {
    /* Declaramos 3 variables diferentes con el mismo nombre */
    let edad = 25;
    let nombreUser = "Local de la función";
    /* Segundo bloque local*/
    if (edad >= 18) {
        let nombreUser = "Local del If";
        console.log(nombreUser);
    } else {
        let nombreUser = "Local del else";
        console.log(nombreUser);
    }
    console.log(nombreUser);
}

/* Declaración de scope local */
function condicionalSinLet() {
    let edad = 25;
    let nombreUser = "Local de la función";
    /* Segundo bloque local*/
    if (edad >= 18) {
        nombreUser = "Local del If";
        console.log(nombreUser);
    } else {
        nombreUser = "Local del else";
        console.log(nombreUser);
    }
    /* Sale del condicional con un nuevo valor, debido a que sufre una reasignación */
    console.log(nombreUser);
}

/* Declaración de scope local */
function condicionalConVar() {
    var nombreUserVar = "Variable global";
    var edad = 25;
    console.log(nombreUserVar);
    /* Segundo bloque local*/
    if (edad >= 18) {
        var nombreUserVar = "Local del If";
        console.log(nombreUserVar);
    } else {
        var nombreUserVar = "Local del else";
        console.log(nombreUserVar);
    }
    /* Sale del condicional con un nuevo valor, debido a que sufre una reasignación */
    console.log(nombreUserVar);
}

function condicionalSinVar() {
    var nombreUserVar = "Variable global";
    var edad = 25;
    console.log(nombreUserVar);
    /* Segundo bloque local*/
    if (edad >= 18) {
        nombreUserVar = "Local del If";
        console.log(nombreUserVar);
    } else {
        nombreUserVar = "Local del else";
        console.log(nombreUserVar);
    }
    /* Sale del condicional con un nuevo valor, debido a que sufre una reasignación */
    console.log(nombreUserVar);
}


/* Declaración de scope local */
function condicionalVarLet() {
    var nombreUserVar = "Variable global";
    var edad = 25;
    console.log(nombreUserVar);
    /* Segundo bloque local*/
    if (edad >= 18) {
        let nombreUserVar = "Local del If";
        console.log(nombreUserVar);
    } else {
        let nombreUserVar = "Local del else";
        console.log(nombreUserVar);
    }
    /* Sale del condicional con un nuevo valor, debido a que sufre una reasignación */
    console.log(nombreUserVar);
}