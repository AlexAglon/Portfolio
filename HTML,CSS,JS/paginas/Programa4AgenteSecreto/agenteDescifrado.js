let arrColumnasDes = [];
let arrFilasDes = []; 

/*funcion que calculara el valor de elementos que tendra cada cadena de cada columna*/
function calculaValor(mensajeCifrado) {
    let valorFilas = mensajeCifrado.length / llave;
    return valorFilas;
}

/*FUNCION QUE CREARA LAS CADENAS DE CADA COLUMNA*/
function creaC(mensajeCif,longuitudCadenas) {
    let cadenaCif = "";//variable donde guardaremos las cadenas de cada iteracion
    let contador = 0;//para llevar la cuenta de cuantos caracteres lleva nuestra cadena
    let aux = 0;//aux parasaber si llegamos al final de la cadena
    let long = mensajeCif.length;//longitud de todo el mensaje

    for (const letra of mensajeCif){
        if (contador === longuitudCadenas) {//si el contador tiene la misma longuitud que indica la formula "long_mensaej/llave"
            arrColumnasDes.push(cadenaCif);//agregamos al arreglo
            contador = 1;
            cadenaCif = letra;
            aux++;
        }else{
            cadenaCif += letra;
            contador++;
            aux++;
            if (aux === long) {//para asegurarnos de que agregue la ultima cadena
                arrColumnasDes.push(cadenaCif);
            }
        }
    }
}

/*FUNCION QUE CREA LOS MENSAJES DE CADA FILA*/
function creaFilas(numeroFils) {
    for (let i = 0; i < numeroFils; i++) {
        arrFilasDes.push(""); 
    }
}

/*FUNCION PARA DESCIFRAR*/
function descifrado(valor) {
    contador = 0;
    for (let cadena of arrColumnasDes) {//nos ayuda a ingresar a cada posicion del arreglo de columnas
        for (let letra of cadena){//nos ayuda a ingresar a cada posicion de la cadena 
            arrFilasDes[contador] += letra;//agregamos cada letra a su respectiva posiscion de cada uno de los 7 arreglos
            contador++;
            if (contador === valor) {//si llegamos ala ultima ultima cadena de nuestro arreglo
                contador = 0;
            }
        }
    }
}

/*FUNCION PARA IMPRIMIR MENSAJE*/
function imprimeMensajeDes() {
    let mensajeD = "";
    for (let cadena of arrFilasDes) {
        mensajeD += cadena
    }
    console.log(mensajeD);
}

function algoritmoDesifrado(mensajeCifra) {
    let MCSE = quitaEspacios(mensajeCifra); 
    let valor = calculaValor(MCSE);
    console.log(MCSE);
    creaC(MCSE, valor);
    creaFilas(valor);
    descifrado(valor);
    imprimeMensajeDes();
}