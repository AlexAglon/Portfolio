$(document).ready(main); /*cuando el documetno este listo ejecutamos la funcion main*/

var cont = 1;

function main(){
    $(".menu_bar").click(function(){
        /*$("nav").toggle(); Opcion 1 el despiege es muy brusco*/
        if(cont == 1){/*si nuestro contador es 1 quiere decir que el menu esta activo pero esta fuera de pantalla*/
            $("nav").animate({
                left: "0" /*Hacemos que aparezca en la pantalla*/
            });
            cont = 0;
        }else{
            cont = 1;
            $("nav").animate({
                left: "-100%" /*Hacemos que desaparezca de la pantalla*/
            });
        }
    });
}