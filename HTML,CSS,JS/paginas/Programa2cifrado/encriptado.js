let matriz_letras = new Map();
matriz_letras.set("A","90");
matriz_letras.set("B","91");
matriz_letras.set("C","92");
matriz_letras.set("D","93");
matriz_letras.set("E","94");
matriz_letras.set("F","80");
matriz_letras.set("G","81");
matriz_letras.set("H","82");
matriz_letras.set("I","83");
matriz_letras.set("J","83");
matriz_letras.set("K","84");
matriz_letras.set("L","70");
matriz_letras.set("M","71");
matriz_letras.set("N","72");
matriz_letras.set("O","73");
matriz_letras.set("P","74");
matriz_letras.set("Q","60");
matriz_letras.set("R","61");
matriz_letras.set("S","62");
matriz_letras.set("T","63");
matriz_letras.set("U","64");
matriz_letras.set("V","50");
matriz_letras.set("W","51");
matriz_letras.set("X","52");
matriz_letras.set("Y","53");
matriz_letras.set("Z","54");


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

/*FUNCION PARA ENCRIPTAR LA LETRA*/
function encriptaLetra(letra,mensajeEncriptado){
    let valorLetra = matriz_letras.get(letra);//obtenemos el valor de nuestra letra
    mensajeEncriptado = mensajeEncriptado + valorLetra;//lo agregamosa nuestra variable de mensaje encriptado
    return mensajeEncriptado;
} 

/*FUNCION PARA ENCRIPTAR EL MENSAJE QUE LE MANDEMOS */
function encriptaMensaje(mensajeSE){
    mensajeEncriptado = "";
    for (let letra of mensajeSE) {//recorremos nuestro mensaje sin espacios
        mensajeEncriptado = encriptaLetra(letra,mensajeEncriptado);
    }

    return mensajeEncriptado;
}

//funcion para orquestar todas las funciones anteriores
function encripta(){
    let mensaje = document.getElementById("Enc-input").value;//obtenemos el valor del input de encriptado
    let MSE = quitaEspacios(mensaje);
    let ME = encriptaMensaje(MSE);
    document.getElementById("des-input").value = ME;
}

//para cuando el usuario de click en el boton de encriptar
let btn_encriptado = document.getElementById("btn-e");
btn_encriptado.addEventListener("click",encripta);


//si el usuario quiere limpiar la pantalla
function clearScreen(){
    document.getElementById("Enc-input").value = "";
    document.getElementById("des-input").value = "";
}

let btn_clear = document.getElementById("btn-cls");
btn_clear.addEventListener("click",clearScreen);