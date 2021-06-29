let arrCadenas = [];//arreglo que nos servira para almacenar las cadenas qeu resulten de la iteracion
let llave = 4;//clave para cifrar 
let arrColumnas = [];


/*FUNCION PARA QUITAR ESPACIOS*/
function quitaEspacios(mensaje){
    mensaje = mensaje.toUpperCase();//hacemos que nuestra frase solo este en mayusculas
    let mensajeSinESpacio = "";
    for (letra of mensaje){//recorremos todo nuestro string
        if (letra !== " ") {//si el caracter en esa iteracion no es un espacio en blanco 
            mensajeSinESpacio = mensajeSinESpacio + letra;//se agrega a nuestra variable mensajeSinEspacio
        }
    }

    return mensajeSinESpacio;//REGRESA LA ORACION SIN ESPACIOS
}
/*FUNCION PARA RELLENAR LAS PALABRAS QUE NO TENGAN LA LONGUITUD DE LA LLAVE*/
function completaCadena(cadena) {
    //const lon_cadena = cadena.length;
    console.log("--------------------completa cadena----------------------");
    let cse = cadena;
    let contador = cadena.length;
    console.log(`valor de la cadena: ${cse}, longuitud de cadena: ${contador}`);
    while (contador != llave) {
        cse += "S";
        contador++;
        console.log(`valor de contador ${contador}, valor de cadena ${cse}`);
    }
    arrCadenas.push(cse);
    
}
/*FUNCION PARA AGREGAR LAS FILAS AL ARREGLO*/
function creaFilas(mensaje) {
    const lon_cadena = mensaje.length;//constante que guarda el valor de la longuitud del mensaje actual
    let conteo_cadena = 0;//varaible que nos ayudara a llevar el conteo de las letras que van
    let contador = 0;//variable que nos ayudara a llevar el conteo de las cadenas de cada fila
    let cadena = "";//variable donde almacenaremos las filas
    for (let letra of mensaje) {
        if (contador === llave){//si nuestra cadena tienen la longuitud del valor de la llave que indicamos
            arrCadenas.push(cadena);//agregamos nuestra fila
            contador = 1;//se iguala a 1 para evitar que se omitan letras
            cadena = letra; // igualamos a la letra de ese momento
            conteo_cadena++;
            if (conteo_cadena === lon_cadena) {//solo aplica para el caso en el que lleguemos al final del mensaje y nuestra cadena tenga longuitud de llave es para que no omita la ultima letra
                //arrCadenas.push(cadena);
                completaCadena(cadena)
            }
        }else{//caso en el que todavia no tengamos la longuitud de la llave
            cadena = cadena + letra;//vamos concatenando letras
            contador++;
            conteo_cadena++;
            if (conteo_cadena === lon_cadena) {//para el caso en el que lleguemos al final del mensaje y nuestra cadena aun no tenga longuitud de llave
                //arrCadenas.push(cadena);
                completaCadena(cadena);
            }
        }
    }
}

/*FUNCION QUE CREA LOS MENSAJES DE CADA COLUMNA*/
function creaColumnas() {
    for (let i = 0; i < llave; i++) {
        arrColumnas.push(""); 
    }
}

function imprimeMensaje() {
    let MC = "";
    for (let cadena of arrColumnas) {
        MC += cadena;
    }

    console.log(MC);
}

/*FUNCION PARA CIFRAR*/
function cifrado() {
    creaColumnas();
    contador = 0;
    for (let cadena of arrCadenas) {//nos ayuda a ingresar a cada posicion del arreglo de cadenas
        for (let letra of cadena){//nos ayuda a ingresar a cada posicion del arreglo   
            arrColumnas[contador] += letra;
            contador++;
            if (contador === llave) {
                contador = 0;
            }
        }
    }
}

// function pruebas(mensaje) {
//     let MSE = quitaEspacios(mensaje);
//     console.log(MSE);
//     creaFilas(MSE);
//     console.log(arrCadenas);
//     //cifrado();
//     //imprimeMensaje();
// }