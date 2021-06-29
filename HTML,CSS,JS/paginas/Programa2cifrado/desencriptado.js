//CREAMOS NUESTRO MAPA DE NUMEROS QUE CONTENDRA EL VALOR A COLOCAR DE LETRA 
let matriz_numeros = new Map();
matriz_numeros.set("90","A");
matriz_numeros.set("91","B");
matriz_numeros.set("92","C");
matriz_numeros.set("93","D");
matriz_numeros.set("94","E");
matriz_numeros.set("80","F");
matriz_numeros.set("81","G");
matriz_numeros.set("82","H");
matriz_numeros.set("83","IJ");
matriz_numeros.set("84","K");
matriz_numeros.set("70","L");
matriz_numeros.set("71","M");
matriz_numeros.set("72","N");
matriz_numeros.set("73","O");
matriz_numeros.set("74","P");
matriz_numeros.set("60","Q");
matriz_numeros.set("61","R");
matriz_numeros.set("62","S");
matriz_numeros.set("63","T");
matriz_numeros.set("64","U");
matriz_numeros.set("50","V");
matriz_numeros.set("51","W");
matriz_numeros.set("52","X");
matriz_numeros.set("53","Y");
matriz_numeros.set("54","Z");

let arr_numeros = [];//arreglo que nos ayudara a separar la cadena de caracteres en pares

/*FUNCION PARA DESENCRIPTAR LA CADENA QUE GUARDAMOS EN EL ARREGLO*/
function desencriptaCadena(arrN){//Recibe el areglo con los pares de numeros
    let mensajeDesencriptado = "";
    for (const numero of arrN) {//lo recorremos
        let letra = matriz_numeros.get(numero);//obtenemos el valor de nuestra letra
        mensajeDesencriptado = mensajeDesencriptado + letra;//lo agregamosa nuestra variable de mensaje desencriptado
    }
    return mensajeDesencriptado;//regresamos el mensaje
} 

/*FUNCION PARA AGREGAR PARES DE NUMEROS A NUESTRO ARREGLO*/
function agregaNumerosArreglo(cadenaNumeros){//Recibe nuestra cadena de numeros
    let contador = 0;
    let par_num = "";
    let longuitud_cadena = 0;
    const lengthC = cadenaNumeros.length;//longuitud de nuestra cadena recibida
    
    for (let numero of cadenaNumeros) {//recorremos nuestro mensaje 
        if(contador === 2){//si mi contador es === 2 ya tenemos un par de numeros asi que lo agregamos a nuestro arreglo
            contador = 1;//inicializamos el contador en 1 porque si no se salta 1 numero
            arr_numeros.push(par_num);//agregamos el par de numeros que tenemos a nuestro arreglo
            par_num = "" + numero; //le damos a nuestra variable el valor de la letra actual  
            longuitud_cadena ++;
        }else{//contador menor a 2
            longuitud_cadena++
            par_num = par_num + numero;//concatenamos lo que tenemos en par_num con nuestro numero actual
            contador++;
            //para evitar que no agregue el ultimo par de numeros nos apoyamos de longuitud_cadena
            //al final de todo el recorrido tendremos longuitudes iguales por lo que el ultimo numero se agregara
            if (longuitud_cadena === lengthC) {
                arr_numeros.push(par_num);
            }
        }
    }
    
    return arr_numeros;//regresamso nuestro arreglo de numeros
}

//funcion para orquestar todas las funciones anteriores
function desencripta(){
    let cadenaNum = document.getElementById("des-input").value;
    let AN = agregaNumerosArreglo(cadenaNum);
    let msj = desencriptaCadena(AN);
    msj = msj.toLowerCase();
    document.getElementById("Enc-input").value = msj;
    arr_numeros = [];
}

//para cuando el usuario de click en el boton de desencriptar
let btn_desencriptado = document.getElementById("btn-d");
btn_desencriptado.addEventListener("click",desencripta);
